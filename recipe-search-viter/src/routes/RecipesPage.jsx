import React from "react";
import { Recipe } from "../components/components";
import { useContext } from "react";
import { RecipesContext } from "../context/RecipesContext";
import { Link } from "react-router-dom";

const RecipesPage = () => {
  const { recipes, setRecipes } = useContext(RecipesContext);

  if (!recipes.length) {
    return (
      <div>
        <h1> The recipes did not load correctly. Please try again.</h1>
      </div>
    );
  }

  return (
    <div id="recipes-page">
      <div className="recipes-home">
        <Link to="/">
          <button className="recipes-home-button">
            <i className="fa-solid fa-house"></i>
          </button>
        </Link>
      </div>
      <div className="recipes">
        {recipes.length !== 0 &&
          recipes.map((rec) => <Recipe recipe={rec} key={rec.recipe.label} />)}
        {console.log(recipes)}
      </div>
    </div>
  );
};

export default RecipesPage;
