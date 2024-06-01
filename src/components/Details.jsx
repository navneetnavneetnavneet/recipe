import React from "react";
import { Link } from "react-router-dom";

const Details = () => {
  const recipe = {
    id: "mAi6vrfNOmNe1LdgZ_MTd",
    title: "Italian Wedding Soup ",
    image:
      "https://png.pngtree.com/png-clipart/20231127/original/pngtree-high-angle-view-of-italian-wedding-soup-in-a-bowl-on-png-image_13728005.png",
    description:
      "The BEST Italian Wedding Soup! A delicious and hearty soup made with bite size herbed beef and pork meatballs, veggies and acini de pepe",
    ingredients:
      "1/2 lb Ground beef|1/2 lb Ground veal|1/4 c Italian seasoned bread crumb|1 Egg|1 tb Parsley|Salt and pepper to taste|4 c Chicken broth|2 c Spinach leaves cut into piec|1/4 c Grated Pecorino Romano chees",
    instructions:
      "Combine the ground meat, bread crumbs, egg, parsley, salt and pepper in a bowl. Mix well and form into tiny meat balls. Bake on a cookie sheet for 30 minutes at 350F. Meanwhile, bring broth to a boil and add spinach. Cover and boil for 5 minutes. Add the meatballs to the hot broth, bring to a simmer. Stir in the cheese and serve immediately. Rita in Scottsdale 01/02/92 01:41 am",
  };

  const DeleteHandler = () => {
    console.log("Delete Recipe");
  }

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
              to={`/update-recipe/1`}
              className="text-blue-400 border-blue-400 border-2 py-2 px-4"
            >
              Update
            </Link>
            <button onClick={DeleteHandler} className="text-orange-400 border-blue-400 border-2 py-2 px-4">
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
