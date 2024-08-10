import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdAddCircle } from "react-icons/io";

const Navbar = ({ onSearch }) => {
  const [searchInput, setSearchInput] = useState("");

  function handleSearch() {
    setSearchInput(searchInput);
    onSearch(searchInput);
  }

  return (
    <header className="flex justify-between items-center px-6 md:px-[10%] fixed top-0 left-0 w-full bg-gray-800 z-10 py-3">
      <a href="#" className="text-xl md:text-2xl text-white">
        Tomes
      </a>
      <div className="flex"> 
        <input
          value={searchInput}
          onChange={(event) => {
            setSearchInput(event.target.value);
          }}
          type="text"
          className="input input-bordered input-sm w-40 md:w-80"
          placeholder="Book or Author"
        />
        <button onClick={handleSearch} className="ml-2 md:ml-3 btn btn-sm btn-primary">
          Search
        </button>
      </div>
      <Link to={"/books/create"}>
        <IoMdAddCircle size={30} className="text-white"/>
      </Link>
    </header>
  );
};

export default Navbar;
