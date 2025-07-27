import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";

function ProductDetails() {
  let { id } = useParams();

  function getProductById() {
    return axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.data);
  }

  let { data, isLoading, error } = useQuery({
    queryKey: ["products", id],
    queryFn: getProductById,
    refetchOnWindowFocus: false,
  });
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="container mx-auto pt-18">
          <div className="flex flex-col justify-center items-center sm:flex-row ">
            <div className="pic  sm:w-1/2 p-4">
              <img
                src={data?.image}
                alt={data?.title}
                className="w-full h-[400px] lg:w-3/4 lg:mx-auto"
              />
            </div>
            <div className="details sm:w-1/2 p-8">
              <h2 className="font-bold text-2xl">{data?.title}</h2>
              <p className="text-lg capitalize font-bold text-blue-800">
                {data?.category}
              </p>
              <p className="text-lg py-2 capitalize">{data?.description}</p>
              <div className="flex justify-between items-center py-3">
                <p className="text-xl font-bold">${data?.price}</p>
                <p className="text-xl font-semibold">
                  <i className="fas fa-star text-yellow-300 text-lg"></i>
                  {data?.rating.rate}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      {error ? (
        <p className="text-center font-bold text-3xl">{error.message}</p>
      ) : null}
    </>
  );
}

export default ProductDetails;
