import React, { useState } from "react";

export const Alert = ({ alert }) => {
  return (
    <div className="alert">
      <h3>{alert}</h3>
    </div>
  );
};

export const List = ({ main }) => {
  return main.map((item) => {
    return (
      <ul className="ingredient-list">
        <li className="ingredient-text">{item.text}</li>
        <li className="ingredient-weight">Weight - {item.weight}</li>
      </ul>
    );
  });
};

export const RecipeDetails = ({ ingredients, onClick }) => {
  return (
    <div className="background-list">
      <div className="background-itens">
        <div className="bar">
          <h3 className="titleIngredients">Ingredients:</h3>
          <button onClick={onClick} id="close-btn">
            <i className="fa-sharp fa-solid fa-circle-xmark"></i>
          </button>
        </div>
        <List main={ingredients} />
      </div>
    </div>
  );
};

export const Recipe = ({ recipe }) => {
  const [show, setShow] = useState(false);

  const onClick = () => {
    return setShow(false);
  };

  const { label, image, url, ingredients } = recipe.recipe;
  return (
    <div className="eachRecipe">
      <h2>{label}</h2>
      <img src={image} alt={label}></img>
      <a href={url} target="_blank" rel="noopener noreferrer">
        SEE FULL RECIPE
      </a>
      <button onClick={() => setShow(true)} className="button">
        Ingredients
      </button>
      {show && (
        <RecipeDetails
          ingredients={ingredients}
          key={label}
          set={setShow}
          onClick={onClick}
        />
      )}
    </div>
  );
};
