import { useContext } from "react";
import ThemeContext from "./ThemeContextMain";


const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className={`navbar ${theme}`}>
      <h2>Theme Switcher</h2>
      <button onClick={toggleTheme}>
        {theme === "light" ? "Switch to Dark" : "Switch to Light"}
      </button>
    </nav>
  );
};

export default Navbar;
