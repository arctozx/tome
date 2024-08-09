import React from "react";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

const Backbutton = () => {
  return (
    <div className="flex">
      <Link to={"/"}
      className="w-fit">
        <IoMdArrowRoundBack size={40}/>
      </Link>
    </div>
  );
};

export default Backbutton;
