import React from "react";

const Category = ({ category, setCategory }) => {
  const { strCategory } = category;
  return (
    <button
      onClick={() => setCategory(strCategory)}
      className="btn btn-primary ml-4"
    >
      {strCategory}
    </button>
  );
};

export default Category;
