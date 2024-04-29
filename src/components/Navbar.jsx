import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="w-full h-full flex justify-end items-center p-3 bg-slate-200 dark:bg-slate-700">
      <button
        className="rounded-xl bg-blue-500 text-white p-2"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? "Light Theme" : "Dark Theme"}
      </button>
    </div>
  );
};

export default Navbar;
