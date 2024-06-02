import React, { useContext } from "react";
import Card from "./Card";
import { useLocation } from "react-router-dom";
import { recipecontext } from "../contexts/RecipeContext";

const Recipes = () => {
  const { pathname } = useLocation();

  const [recipes] = useContext(recipecontext);

  return (
    <div className="w-[80%] mx-auto py-10">
      <h1 className="text-3xl font-bold text-center">Recipes Collection</h1>
      <p className="text-zinc-400 mt-5 text-center w-1/2 mx-auto">
        Lorem ipsum dolor adipisicing elit. Animi illo ea atque explicabo nisi?
        Autem omnis dignissimos ratione mollitia nihil!
      </p>
      <div className="recipes w-full flex flex-wrap gap-x-[5%] justify-start pb-[5%]">
        {recipes.length > 0 ? (
          recipes.map((r) => <Card key={r.id} recipe={r} />)
        ) : (
          <h1 className="w-full text-center text-3xl mt-10 font-extrabold text-orange-600">
            No Recipe Found
          </h1>
        )}
      </div>
      {pathname == "/recipes" && (
        <a
          href="/create-recipe"
          className="px-4 py-2 bg-orange-200 absolute top-[20%] left-[10%] rounded-md flex gap-x-3 items-center"
        >
          <i className="text-3xl text-orange-600 ri-add-box-line"></i>
          Create Recipe
        </a>
      )}
    </div>
  );
};

export default Recipes;
