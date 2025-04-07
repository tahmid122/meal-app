import React, { useState } from "react";

const ShowCategoryItems = ({ foods, setImageTrue, imageTrue }) => {
  const [foodName, setFoodName] = useState("");
  return (
    <div className="p-5 grid grid-cols-4 gap-5 ">
      {foods?.map((food) => {
        const { idMeal, strMeal, strMealThumb } = food;
        return (
          <div key={idMeal} className="rounded overflow-hidden  ">
            <img
              className="w-full h-[200px] object-cover"
              src={strMealThumb}
              alt=""
            />
            <h1 className="text-xl font-bold mt-3">{strMeal}</h1>
            <button
              onClick={() => {
                setImageTrue({ image: strMealThumb, isTrue: true });
                setFoodName(strMeal);
              }}
              className={`btn ${
                imageTrue.isTrue
                  ? foodName === food.strMeal
                    ? "btn-error"
                    : "btn-secondary"
                  : "btn-secondary"
              } mt-3`}
            >
              Overview
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ShowCategoryItems;
