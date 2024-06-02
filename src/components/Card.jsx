import React from "react";
import { Link } from "react-router-dom";

const Card = (prop) => {
  const { id, title, image, description, instructions, ingredients } =
    prop.recipe;

  return (
    <Link
      to={`/recipes/${id}`}
      className="recipe w-[30%] hover:text-white/90 hover:bg-orange-400 shadow rounded-lg mt-[5%] p-5"
    >
      <div className="w-full h-[40vh] rounded-lg overflow-hidden">
        <img className="w-full h-full object-contain" src={image} alt="" />
      </div>
      <h1 className="text-2xl font-semibold mt-5 text-center">{title}</h1>
      <p className="text-sm my-5 text-center">{description.slice(0, 100)}...</p>
      <div className="flex justify-between">
        <p className="text-center">
          <i className="ri-timer-line"></i>
          <br />
          <span className="text-sm">20min</span>
        </p>
        <p className="text-center">
          <i className="ri-thumb-up-line"></i>
          <br />
          <span className="text-sm">Easy</span>
        </p>
        <p className="text-center">
          <i className="ri-share-line"></i>
          <br />
          <span className="text-sm">Share</span>
        </p>
      </div>
    </Link>
  );
};

export default Card;
