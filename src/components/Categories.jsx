import React, { use } from "react";
import Category from "./Category";

const Categories = ({ categoriesPromise, setCategory }) => {
  const categories = use(categoriesPromise).categories;
  return (
    <div className="flex items-center justify-center mt-5">
      {categories.map((category) => (
        <Category
          key={category.idCategory}
          category={category}
          setCategory={setCategory}
        />
      ))}
    </div>
  );
};

export default Categories;
