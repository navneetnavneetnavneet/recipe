import React from "react";
import Card from "./Card";
import { useLocation } from "react-router-dom";

const Recipes = () => {
  const { pathname } = useLocation();

  const recipes = [
    {
      id: "mAi6vrfNOmNe1LdgZ_MTd",
      title: "Italian Wedding Soup ",
      image:
        "https://png.pngtree.com/png-clipart/20231127/original/pngtree-high-angle-view-of-italian-wedding-soup-in-a-bowl-on-png-image_13728005.png",
      description:
        "The BEST Italian Wedding Soup! A delicious and hearty soup made with bite size herbed beef and pork meatballs, veggies and acini de pepe",
      ingredients:
        "1/2 lb Ground beef,1/2 lb Ground veal,1/4 c Italian seasoned bread crumb,1 Egg,1 tb Parsley,Salt and pepper to taste,4 c Chicken broth,2 c Spinach leaves cut into piec,1/4 c Grated Pecorino Romano chees",
      instructions:
        "Combine the ground meat, bread crumbs, egg, parsley, salt and pepper in a bowl. Mix well and form into tiny meat balls. Bake on a cookie sheet for 30 minutes at 350F. Meanwhile, bring broth to a boil and add spinach. Cover and boil for 5 minutes. Add the meatballs to the hot broth, bring to a simmer. Stir in the cheese and serve immediately. Rita in Scottsdale 01/02/92 01:41 am",
    },
  ];

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
          <h1 className="w-full text-center text-3xl font-extrabold text-orange-600">
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
