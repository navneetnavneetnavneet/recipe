import React, { createContext, useEffect, useState } from "react";

export const recipecontext = createContext(null);

const RecipeContext = (props) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(JSON.parse(localStorage.getItem("cooks")));
  }, []);

  return (
    <recipecontext.Provider value={[recipes, setRecipes]}>
      {props.children}
    </recipecontext.Provider>
  );
};

export default RecipeContext;
