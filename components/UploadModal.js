import React from 'react';
import { modalState } from "../atom/modalAtom";
import { useRecoilState } from "recoil";

function UploadModal() {
  const [isOpen, setIsOpen] = useRecoilState(modalState);

  return (
    <div>
      {isOpen && (
        <h1>open</h1>
      )}
    </div>
  );
}

export default UploadModal;
