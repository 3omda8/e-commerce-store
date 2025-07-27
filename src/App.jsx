import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import { RouterProvider } from "react-router";
import Cart from "./pages/Cart/Cart";
import { ProductFilterProvider } from "./context/ProductFilterContext/ProductFilterContext";
import ThemeContextProvider from "./context/ThemeContext/ThemeContext";
import { CartProvider } from "./context/CartContext/CartContext";
import { Toaster } from "react-hot-toast";

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
    <ThemeContextProvider>
      <QueryClientProvider client={queryClient}>
        <ProductFilterProvider>
          <CartProvider>
            <RouterProvider router={routes} />
            <Toaster position="top-right" reverseOrder={false} />
          </CartProvider>
        </ProductFilterProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ThemeContextProvider>
  );
}

export default App;
