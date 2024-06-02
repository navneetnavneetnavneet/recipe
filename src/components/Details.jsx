import React, { useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { recipecontext } from "../contexts/RecipeContext";
import { toast } from "react-toastify";

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipes, setRecipes] = useContext(recipecontext);

  const recipe = recipes.find((r) => r.id == id);

  const DeleteHandler = () => {
    setRecipes(recipes.filter((r) => r.id != id));
    toast.success("Recipe Delete Successfully");
    navigate("/recipes");
  };

  return recipe ? (
    <div className="w-[80%] mx-auto py-10">
      <Link to="/recipes" className="text-3xl ri-arrow-left-line"></Link>
      <div className="details w-full min-h-[75vh] flex">
        <div className="left w-1/2 p-5 shadow">
          <div className="w-full h-2/3">
            <img
              className="w-full h-full object-contain"
              src={recipe.image}
              alt=""
            />
          </div>
          <h1 className="text-2xl text-center mt-[5%] mb-5">{recipe.title}</h1>
          <p className="text-center text-zinc-400">{recipe.description}</p>
          <div className="w-full mt-10 flex justify-between">
            <Link
              to={`/update-recipe/${id}`}
              className="text-blue-600 border-blue-600 border-2 py-2 px-4"
            >
              Update
            </Link>
            <button
              onClick={DeleteHandler}
              className="text-orange-600 border-orange-600 border-2 py-2 px-4"
            >
              Delete
            </button>
          </div>
        </div>
        <div className="right w-1/2 px-[5%] py-[3%] overflow-auto">
          <h1 className="text-3xl text-orange-600 border-b border-orange-600">
            Ingredients
          </h1>
          <ul className="list-disc text-zinc-400">
            {recipe.ingredients.split(",").map((d, i) => (
              <li key={i} className="list-item text-sm mt-2">
                {d}
              </li>
            ))}
          </ul>
          <h1 className="text-3xl mt-5 text-orange-600 border-b border-orange-600">
            Instruction
          </h1>
          <ul className="list-decimal text-zinc-400">
            {recipe.instructions.split(".").map((d, i) => (
              <li className="list-item text-sm mt-2" key={i}>
                {d}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  ) : (
    <h1 className="w-full text-center text-4xl text-orange-600 mt-10">
      Loading Recipe...
    </h1>
  );
};

export default Details;
