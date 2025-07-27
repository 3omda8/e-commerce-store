import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import { RouterProvider } from "react-router";
import Cart from "./pages/Cart/Cart";
import { ProductFilterProvider } from "./context/ProductFilterContext/ProductFilterContext";

function App() {
  const queryClient = new QueryClient();
  let routes = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/products/:id",
          element: <ProductDetails />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
      ],
    },
  ]);
  return (
    <QueryClientProvider client={queryClient}>
      <ProductFilterProvider>
        <RouterProvider router={routes} />
      </ProductFilterProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
