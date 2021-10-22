import { useTheme } from "../context/ThemeContext";
import moon from "../assets/moon.png";
import darkMoon from "../assets/dark-moon.png";

const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="lg:flex lg:justify-between p-6">
      <div className="flex-1 min-w-0">
        <h2 className="font-bold sm:text-3xl text-gray-900 dark:text-white">
          Where in the world?
        </h2>
      </div>
      <div className="mt-5 flex lg:mt-0 lg:ml-4">
        <span className="hidden sm:block">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 text-sm font-medium bg-white dark:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <img
              src={theme === "dark" ? moon : darkMoon}
              alt="dark mode"
              className="w-5"
            />
          </button>
        </span>
      </div>
    </div>
  );
};

export default Header;
