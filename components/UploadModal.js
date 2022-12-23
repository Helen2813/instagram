import React, { useRef, useState } from 'react';
import { modalState } from "../atom/modalAtom";
import { useRecoilState } from "recoil";
import Modal from "react-modal";
import { CameraIcon } from "@heroicons/react/outline";

function UploadModal() {
  const [isOpen, setIsOpen] = useRecoilState(modalState);
  const filePickerRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);

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
            />
            <button
              className="w-full bg-red-600 text-white p-2 shadow-md hover:brightness-125 disabled:bg-gray-200
              disabled:cursor-not-allowed disabled:hover:brightness-100"
              disabled
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
