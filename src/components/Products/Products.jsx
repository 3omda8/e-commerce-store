import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loader from "../Loader/Loader";
import { useContext } from "react";
import { Link } from "react-router-dom";
import ProductFilterContext from "../../context/ProductFilterContext/ProductFilterContext";

function Products() {
  let { sortOrder, setSortOrder } = useContext(ProductFilterContext);

  function getProducts() {
    return axios
      .get("https://fakestoreapi.com/products")
      .then((res) => res.data);
  }

  let { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    refetchOnWindowFocus: false,
  });
  let products = data;
  console.log(products, "hi data");
  console.log(isLoading);
  if (error) {
    console.log(error.message);
  } else {
    console.log("No error");
  }
  // Search and Sort Logic

  // uncomment the following lines if you want to implement search functionality in home page not only dropdown menu
  // if (searchTerm) {
  //   products = products?.filter((product) =>
  //     product.title.toLowerCase().includes(searchTerm.toLowerCase())
  //   );
  // }

  if (sortOrder === "lowToHigh") {
    products = [...products].sort((a, b) => a.price - b.price);
  } else if (sortOrder === "highToLow") {
    products = [...products].sort((a, b) => b.price - a.price);
  } else if (sortOrder === "name") {
    products = [...products].sort((a, b) => a.title.localeCompare(b.title));
  }

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex justify-end items-center pe-3">
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="p-2 rounded-lg border border-gray-300 mt-4 focus:outline-none"
          >
            <option value="" disabled={true}>
              Sort By Price or Name
            </option>
            <option value="highToLow">High To Low</option>
            <option value="lowToHigh">Low to High</option>
            <option value="name">Name From A-Z</option>
          </select>
        </div>
      )}
      {error ? (
        <p className="text-center font-bold text-3xl">{error.message}</p>
      ) : null}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4 w-[90%] mx-auto md:w-full ">
        {products?.map((product) => (
          <div
            key={product.id}
            className="p-3 rounded-lg shadow-lg bg-gray-200 hover:cursor-pointer hover:shadow-xl hover:shadow-gray-700 transition-shadow duration-300 relative"
          >
            <Link to={`products/${product.id}`}>
              <p className=" font-semibold text-right">
                <i className="fas fa-star text-yellow-300 text-xl "></i>
                {product.rating.rate}
              </p>
              <div className=" shadow-lg">
                <img
                  src={product.image}
                  alt=""
                  className="w-full h-[400px] md:h-[320px]"
                />
              </div>
              <h2 className="text-xl font-bold mt-3 line-clamp-1">
                {product.title}
              </h2>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default Products;
