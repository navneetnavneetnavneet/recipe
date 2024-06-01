import React, { useContext, useState } from "react";
import { recipecontext } from "../contexts/RecipeContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Create = () => {
  const [recipes, setRecipes] = useContext(recipecontext);
  const navigate = useNavigate();

  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  const SubmitHandler = (event) => {
    event.preventDefault();

    const newRecipe = {
      id: Date.now(),
      image,
      title,
      description,
      ingredients,
      instructions,
    };

    setRecipes([...recipes, newRecipe]);
    toast.success("Recipe Create Successfully")

    // navigate("/recipes");
  };

  console.log(recipes);

  return (
    <form onSubmit={SubmitHandler} className="w-[60%] mx-auto py-10">
      <h1 className="text-7xl font-extrabold text-orange-600 mb-10">
        Create New <br /> Recipe
      </h1>
      <input
        onChange={(e) => setImage(e.target.value)}
        value={image}
        type="text"
        placeholder="Recipe Image URL"
        className="w-full px-6 py-3 rounded-md border text-xl mb-5"
      />
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        type="text"
        placeholder="Recipe Name"
        className="w-full px-6 py-3 rounded-md border text-xl mb-5"
      />
      <textarea
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        placeholder="recipe description..."
        className="w-full resize-none px-6 py-3 rounded-md border text-xl mb-5"
      ></textarea>
      <textarea
        onChange={(e) => setIngredients(e.target.value)}
        value={ingredients}
        placeholder='recipe ingredients -> "use comma to seprate ingredients"'
        className="w-full resize-none px-6 py-3 rounded-md border text-xl mb-5"
      ></textarea>
      <textarea
        onChange={(e) => setInstructions(e.target.value)}
        value={instructions}
        placeholder='recipe instructions -> "use comma to seprate instructions"'
        className="w-full resize-none px-6 py-3 rounded-md border text-xl mb-5"
      ></textarea>
      <div className="w-fiull text-right">
        <button className="px-4 py-2 rounded-md bg-orange-600 hover:bg-orange-700 text-xl text-white">
          Publish Recipe &nbsp; &#8594;
        </button>
      </div>
    </form>
  );
};

export default Create;
