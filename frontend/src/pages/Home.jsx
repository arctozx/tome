import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import Navbar from "../components/Navbar";
import { MdEdit, MdDelete } from "react-icons/md";
import BookModal from "../components/BookModal";
import DeleteModal from "../components/DeleteModal";
import { Link } from "react-router-dom";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [searched, setSearched] = useState("");

  useEffect(() => {
    setLoading(true);
    const fetchBooks = async () => {
      try {
        const response = await axios.get("https://tome-dgt3.onrender.com/books");
        setBooks(response.data.data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
}, []);

  const openModal = (book) => {
    setSelectedBook(book);
    setShowModal(true);
  };

  const deleteBook = (book) => {
    setSelectedBook(book);
    setShowDeleteModal(true);
  };

  const handleDeleteBook = (book) => {
    axios
      .delete(`https://tome-dgt3.onrender.com/books/${book._id}`)
      .then(() => {
        setBooks(books.filter((b) => b._id !== book._id));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  function handleSearch(search) {
    setSearched(search);
  }

  const filteredBooks = books.filter((book) => {
    const title = book.title.toLowerCase();
    const author = book.author.toLowerCase();
    const searchTerms = searched.toLowerCase().split(" ");
  
    return searchTerms.every(term => title.includes(term) || author.includes(term));
  });

  return (
    <div className="my-4 sm:my-6 md:my-8 lg:my-10">
      <Navbar onSearch={handleSearch} />
      <div className="flex justify-center w-full h-full mt-20 sm:mt-16 md:mt-20 overflow-auto scrollbar-gutter-stable">
        <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          {loading ? (
            <Spinner />
          ) : (
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredBooks.map((book) => (
                <div
                  key={book._id}
                  className="border-2 border-gray-500 rounded-lg p-3 sm:p-4 hover:scale-95 transition-transform duration-300"
                >
                  <div
                    className="h-48 sm:h-56 md:h-64 cursor-pointer"
                    onClick={() => openModal(book)}
                  >
                    <img
                      src={book.imageUrl}
                      alt={book.title}
                      className="w-full h-full object-cover rounded-t-lg"
                    />
                  </div>

                  <div className="flex flex-col items-center mt-2 sm:mt-3">
                    <h1 className="truncate text-sm sm:text-base">{book.title}</h1>
                    <p className="font-bold truncate text-xs sm:text-sm">{book.author}</p>

                    <div className="flex justify-evenly mt-2 w-full">
                      <Link to={`/books/update/${book._id}`}>
                        <MdEdit className="text-lg sm:text-xl hover:scale-125 transition-transform duration-300 cursor-pointer" />
                      </Link>

                      <MdDelete
                        className="text-lg sm:text-xl hover:scale-125 transition-transform duration-300 cursor-pointer"
                        onClick={() => deleteBook(book)}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          {showModal && (
            <BookModal
              book={selectedBook}
              onClose={() => setShowModal(false)}
            />
          )}
          {showDeleteModal && (
            <DeleteModal
              book={selectedBook}
              onClose={() => setShowDeleteModal(false)}
              onDelete={handleDeleteBook}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
