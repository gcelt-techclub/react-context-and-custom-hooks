import { createContext, useEffect, useState } from "react";

// Creating a Context
export const ThemeContext = createContext();

// Creating the Context Provider -> Basically, this "provider" provides its children with the actual context and its corresponding values
const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const value = {
    theme,
    setTheme,
  };

  useEffect(() => {
    const htmlElem = window.document.getElementsByTagName("html")[0];

    if (theme === "dark") {
      htmlElem.classList.add("dark");
    } else {
      htmlElem.classList.remove("dark");
      htmlElem.classList.add("light");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
