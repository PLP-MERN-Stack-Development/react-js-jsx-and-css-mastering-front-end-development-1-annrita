import { useContext } from "react";
import { ThemeContext } from "../context/Theme";

export default function Navbar() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <header className="bg-white dark:bg-gray-800 shadow">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold">PLP Task Manager</h1>

        {/* Theme toggle */}
        <div
          onClick={toggleTheme}
          className="w-14 h-7 flex items-center bg-gray-300 dark:bg-gray-700 rounded-full p-1 cursor-pointer transition-colors duration-300"
        >
          <div
            className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 ${
              darkMode ? "translate-x-7" : ""
            }`}
          />
        </div>
      </div>
    </header>
  );
}
