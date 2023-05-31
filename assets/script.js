const Alert = ({ alert }) => {
  return (
    <div className="alert">
      <h3>{alert}</h3>
    </div>
  );
};

const List = ({ main }) => {
  return main.map((item) => {
    return (
      <ul className="ingredient-list">
        <li className="ingredient-text">{item.text}</li>
        <li className="ingredient-weight">Weight - {item.weight}</li>
      </ul>
    );
  });
};

const RecipeDetails = ({ ingredients, onClick }) => {
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

const Recipe = ({ recipe }) => {
  const [show, setShow] = React.useState(false);

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

function App() {
  const [query, setQuery] = React.useState("");
  const [recipes, setRecipes] = React.useState([]);
  const [alert, setAlert] = React.useState("");

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
      <form className="search-form" onSubmit={onSubmit}>
        {alert !== "" && <Alert alert={alert} />}
        <input
          type="text"
          placeholder="Search food..."
          autoComplete="off"
          onChange={onChange}
          value={query}
        ></input>
        <button type="submit">
          <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
      <div className="recipes">
        {recipes !== [] &&
          recipes.map((rec) => <Recipe recipe={rec} key={rec.recipe.label} />)}
      </div>
      <div className="footer">
        <h3>
          By{" "}
          <a
            href="https://github.com/TheCodeChameleon"
            target="_blank"
            rel="noopener noreferrer"
          >
            TheCodeChameleon
          </a>
        </h3>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
