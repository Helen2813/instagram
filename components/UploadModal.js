import React, { useRef, useState } from 'react';
import { modalState } from "../atom/modalAtom";
import { useRecoilState } from "recoil";
import Modal from "react-modal";
import { CameraIcon } from "@heroicons/react/outline";
import { addDoc, collection, serverTimestamp, updateDoc, doc } from "firebase/firestore";
import { db, storage } from "../firebase";
import { useSession } from "next-auth/react";
import { ref, uploadString, getDownloadURL } from "firebase/storage";

function UploadModal() {
  const [isOpen, setIsOpen] = useRecoilState(modalState);
  const filePickerRef = useRef(null);
  const captionRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { data: session } = useSession();

  const addImageToPost = (event) => {
    const reader = new FileReader();
    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };
  }

  const handleClose = () => {
    setIsOpen(false);
    setSelectedFile(null);
  }

  const uploadPost = async () => {
    if (isLoading) return;

    setIsLoading(true);

    const docRef = await addDoc(collection(db, "posts"), {
      caption: captionRef.current.value,
      username: session.user.userName,
      profileImg: session.user.image,
      timestamp: serverTimestamp(),
    });

    console.log('docRef', docRef)
    const imageRef = ref(storage, `posts/${docRef.id}/image`);
    await uploadString(imageRef, selectedFile, "data_url").then(
      async (snapshot) => {
        const downloadURL = await getDownloadURL(imageRef);
        await updateDoc(doc(db, "posts", docRef.id), {
          image: downloadURL,
        });
      }
    );
    setIsOpen(false);
    setIsLoading(false);
    setSelectedFile(null);
  }

  return (
    <div>
      {isOpen && (
        <Modal
          className="max-w-lg w-[90%] p-6 absolute top-56 left-[50%] translate-x-[-50%] bg-white
          border-2 rounded-md shadow-md"
          isOpen={isOpen}
          onRequestClose={handleClose}
          appElement={document.body}
        >
          <div className="flex flex-col justify-center items-center h-[100%]">
            {selectedFile ? (
              <img
                src={selectedFile}
                alt="image"
                className="w-full max-h-[250px] object-cover cursor-pointer"
                onClick={() => setSelectedFile(null)}
              />
            ) : (
              <CameraIcon
                className="cursor-pointer h-14 bg-red-200 p-2 rounded-full border-2 text-red-500"
                onClick={() => filePickerRef.current.click()}
              />
            )}
            <input type="file" hidden ref={filePickerRef} onChange={addImageToPost} />
            <input
              className="m-4 border-none text-center w-full focus:ring-0"
              type="text"
              maxLength={150}
              placeholder="Please enter your caption..."
              ref={captionRef}
            />
            <button
              className="w-full bg-red-600 text-white p-2 shadow-md hover:brightness-125 disabled:bg-gray-200
              disabled:cursor-not-allowed disabled:hover:brightness-100"
              disabled={!selectedFile || isLoading}
              onClick={uploadPost}
            >
              Upload Post
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default UploadModal;
