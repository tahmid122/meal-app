import { Suspense, useEffect, useState } from "react";
import "./App.css";
import Categories from "./components/Categories";
import { NavBar } from "./components/NavBar";
import ShowCategoryItems from "./components/ShowCategoryItems";
import ImageHolder from "./components/ImageHolder";
const categoriesPromise = fetch(
  "https://www.themealdb.com/api/json/v1/1/categories.php"
).then((res) => res.json());
function App() {
  const [category, setCategory] = useState("");
  const [foods, setFoods] = useState([]);
  const [imageTrue, setImageTrue] = useState({ image: "", isTrue: false });
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      .then((res) => res.json())
      .then((data) => setFoods(data.meals));
  }, [category]);
  return (
    <>
      <NavBar />
      <Suspense fallback={<h1>Categories are loading.....</h1>}>
        <Categories
          categoriesPromise={categoriesPromise}
          setCategory={setCategory}
        />
      </Suspense>
      {imageTrue.isTrue ? (
        <ImageHolder setImageTrue={setImageTrue} imageTrue={imageTrue} />
      ) : (
        ""
      )}

      <Suspense fallback={<h1>Food is loading....</h1>}>
        {foods ? (
          <ShowCategoryItems
            foods={foods}
            setImageTrue={setImageTrue}
            imageTrue={imageTrue}
          />
        ) : (
          <h1 className="font-bold text-xl text-center mt-5">
            Foods here. Please click on any category.
          </h1>
        )}
      </Suspense>
    </>
  );
}

export default App;
