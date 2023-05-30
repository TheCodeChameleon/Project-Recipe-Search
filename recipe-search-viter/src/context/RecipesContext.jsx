import { createContext, useState } from "react";

export const RecipesContext = createContext();

const RecipesProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);

  return (
    <RecipesContext.Provider value={{ recipes, setRecipes }}>
      {children}
    </RecipesContext.Provider>
  );
};

export default RecipesProvider;
