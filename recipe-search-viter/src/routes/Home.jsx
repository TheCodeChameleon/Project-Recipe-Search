import "../App.css";
import React, { useState, useContext } from "react";
import { Alert } from "../components/components";
import { useNavigate } from "react-router-dom";
import { RecipesContext } from "../context/RecipesContext";

const Home = () => {
  const [query, setQuery] = useState("");
  const [alert, setAlert] = useState("");

  const { setRecipes } = useContext(RecipesContext);
  const navigate = useNavigate();

  const APP_ID = "c5847c28";

  const APP_KEY = "d43b85c456a08855a0ca55664c0db274	";

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const getData = async () => {
    if (query !== "") {
      const result = await fetch(url).then((response) => response.json());
      if (!result.more) {
        return setAlert("No food with such name");
      }
      setRecipes([]);
      setRecipes(result.hits);
      navigate("/recipes");
      setQuery("");
      setAlert("");
    } else {
      setAlert("Please fill the form");
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getData();
  };

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="App">
      <h1>Recipe Search</h1>
      <form className="search-form" onSubmit={onSubmit} name="search-form">
        {alert !== "" && <Alert alert={alert} />}
        <input
          type="text"
          placeholder="Search food..."
          autoComplete="off"
          onChange={onChange}
          value={query}
        ></input>
        <button type="submit" id="submit-button">
          <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    </div>
  );
};

export default Home;
