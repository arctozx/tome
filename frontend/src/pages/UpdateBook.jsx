import React from "react";
import Backbutton from "../components/Backbutton";
import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import DetailInput from "../components/DetailInput";

const UpdateBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [overview, setOverview] = useState("");
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`/api/books/${id}`)
      .then((response) => {
        setTitle(response.data.title);
        setAuthor(response.data.author);
        setGenre(response.data.genre);
        setImageUrl(response.data.imageUrl);
        setOverview(response.data.overview);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        alert(error);
        console.log(error);
      });
    return () => {};
  }, []);

  const updateBook = () => {
    const data = {
      title,
      author,
      genre,
      imageUrl,
      overview,
    };
    setLoading(true);

    axios
      .put(`/api/books/${id}`, data)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  const titleChange = (event) => {
    const newTitle = event.target.value;
    setTitle(newTitle);
  };

  const authorChange = (event) => {
    const newAuthor = event.target.value;
    setAuthor(newAuthor);
  };

  const genreChange = (event) => {
    const newGenre = event.target.value;
    setGenre(newGenre);
  };

  const imageUrlChange = (event) => {
    const newImageUrl = event.target.value;
    setImageUrl(newImageUrl);
  };

  const overviewChange = (event) => {
    const newOverview = event.target.value;
    setOverview(newOverview);
  };

  return (
    <div>
      <div className="mt-5 ml-5 sm:mt-8 sm:ml-8 md:mt-10 md:ml-10">
        <Backbutton />
      </div>

      {loading ? (
        <div className="w-fit m-auto">
          <Spinner />
        </div>
      ) : (
        <div>
          <p className="w-fit m-auto text-2xl mt-10">Update book</p>
          <div className="w-[90%] max-w-[500px] m-auto flex flex-col items-center mt-10 border-2 border-gray-500 rounded-lg p-5 sm:w-[80%] md:w-[70%] lg:w-[500px]">
            <div className="w-full mt-4">
              <DetailInput
                method={titleChange}
                label={"Book Title:"}
                value={title}
              />
            </div>

            <div className="w-full mt-4">
              <DetailInput
                method={authorChange}
                label={"Author:"}
                value={author}
              />
            </div>
            <div className="w-full mt-4">
              <DetailInput
                method={genreChange}
                label={"Genre:"}
                value={genre}
              />
            </div>
            <div className="w-full mt-4">
              <DetailInput
                method={imageUrlChange}
                label={"Image URL:"}
                value={imageUrl}
              />
            </div>

            <div className="w-full mt-4">
              <label htmlFor="book-overview">Book Overview:</label>
              <textarea
                className="textarea textarea-bordered w-full mt-2"
                placeholder="Book Overview"
                onChange={overviewChange}
                value={overview}
              ></textarea>
            </div>

            <button onClick={updateBook} className="btn btn-info w-full mt-10">
              Update Book
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdateBook;
