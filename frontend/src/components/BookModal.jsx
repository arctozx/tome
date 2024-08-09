import React from "react";
import { IoCloseCircleSharp } from "react-icons/io5";

const BookModal = ({ book, onClose }) => {
  return (
    <div
      className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center text-neutral-800 p-4"
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="w-full max-w-[600px] max-h-[90vh] bg-[rgba(30,35,42,255)] rounded-xl p-4 sm:p-6 flex flex-col relative text-gray-300 overflow-hidden"
      >
        <IoCloseCircleSharp
          className="absolute right-4 top-4 text-2xl sm:text-3xl text-red-600 cursor-pointer"
          onClick={onClose}
        />

        <div className="overflow-y-auto flex-grow pr-2">
          <h1 className="text-lg sm:text-xl mb-2">
            Title: <span className="font-bold">{book.title}</span>
          </h1>
          <h2 className="text-base sm:text-lg mb-4">
            Genre: <span className="font-bold">{book.genre}</span>
          </h2>

          <div>
            <p className="text-base sm:text-lg font-semibold mb-2">Overview:</p>
            <p className="text-sm sm:text-base">{book.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookModal;