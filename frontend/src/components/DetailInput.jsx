import React from "react";

const DetailInput = ({method,label, value}) => {
  return (
    <div>
      <label htmlFor="book-title">{label}</label>
      <input
        onChange={method}
        value={value}
        type="text"
        className="input input-bordered input-sm w-full mt-2"
        placeholder="Book Title"
      />
    </div>
  );
};

export default DetailInput;
