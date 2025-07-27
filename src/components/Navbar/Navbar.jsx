import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import { useContext, useState } from "react";
import ProductFilterContext from "../../context/ProductFilterContext/ProductFilterContext";
import { ThemeContext } from "./../../context/ThemeContext/ThemeContext";

function Navbar() {
  let { searchTerm, setSearchTerm, allProducts } =
    useContext(ProductFilterContext);
  let { theme, toggleTheme } = useContext(ThemeContext);

  const [showDropdown, setShowDropdown] = useState(false);

  const filteredResults = searchTerm
    ? allProducts.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];
  return (
    <div className="flex justify-between items-center px-4 py-2 bg-gray-800 text-white dark:bg-gray-200 dark:text-black ">
      <Link to="/">
        <div className="start">
          <img src={Logo} alt="logo" className="w-14 rounded-full" />
        </div>
      </Link>
      <div className="flex items-center justify-center">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setShowDropdown(true);
          }}
          onBlur={() => setTimeout(() => setShowDropdown(false), 200)} // delay so click can register
          className="border py-2 px-4 w-[60%]  sm:w-75 rounded-2xl focus:outline-none focus:border-blue-500"
          placeholder="Search..."
        />
        {showDropdown && filteredResults.length > 0 && (
          <ul className="absolute top-14 w-1/2 md:w-1/5 mx-auto z-50 bg-white text-black shadow-lg rounded-lg mt-1 max-h-64 overflow-y-auto ">
            {filteredResults.map((product) => (
              <li key={product.id}>
                <Link
                  to={`/products/${product.id}`}
                  className="block px-4 py-2 hover:bg-gray-200"
                  onClick={() => setSearchTerm("")}
                >
                  <div className="flex">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-12 h-12 object-cover rounded-md mr-2"
                    />
                    <span className="line-clamp-1">{product.title}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
      <button
        onClick={toggleTheme}
        className="bg-gray-200 dark:bg-gray-700 text-black dark:text-white px-4 py-2 rounded"
      >
        {theme === "light" ? (
          <i className="fa-regular fa-moon"></i>
        ) : (
          <i className="fa-solid fa-sun" style={{ color: "#FFD43B" }}></i>
        )}
      </button>
    </div>
  );
}

export default Navbar;
