import React, { useState } from "react";
import { IoCloseCircleSharp } from "react-icons/io5";
import Spinner from "./Spinner";

const DeleteModal = ({ book, onClose, onDelete }) => {
  const [loading, setLoading] = useState(false);

  const deleteBook = () => {
    setLoading(true);
    onDelete(book);
    setLoading(false);
    onClose();
  };

  return (
    <div
      className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center text-neutral-800"
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="w-11/12 md:w-[300px] max-w-full h-[300px] rounded-xl p-4 flex flex-col relative bg-[rgba(30,35,42,255)] text-gray-300"
      >
        <IoCloseCircleSharp
          className="absolute right-4 top-4 text-3xl text-red-600 cursor-pointer"
          onClick={onClose}
        />

        <h1>
          Title: <p className="font-bold">{book.title}</p>
        </h1>
        <p className="mt-10">Are you sure you want to delete this book?</p>

        {loading ? (
          <Spinner />
        ) : (
          <div className="flex justify-around mt-20">
            <button className="btn btn-info w-2/5" onClick={deleteBook}>
              Yes
            </button>
            <button className="btn btn-error w-2/5" onClick={onClose}>
              No
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DeleteModal;
