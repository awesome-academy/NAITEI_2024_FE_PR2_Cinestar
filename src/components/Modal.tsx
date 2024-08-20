import React from "react";
import { ModalProps } from "../interfaces/Modal.type";

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="container mx-auto fixed inset-0 bg-white bg-opacity-75 flex items-center justify-center z-50">
      <div className="relative w-full h-full flex items-center justify-center">
        <button
          onClick={onClose}
          className="absolute top-0 right-0 text-black text-3xl p-2"
        >
          &times;
        </button>
        <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/YjWrLPr8_2A?si=ExVRjNyxkIiDMneM" 
            title="YouTube video player"  
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
      </div>
    </div>
  );
};

export default Modal;
