import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  function addToCart(product) {
    let toastShown = false;

    setCartItems((current) => {
      const exists = current.find((item) => item.id === product.id);
      if (!toastShown) {
        toastShown = true;
        toast.success(
          exists
            ? "Product already exists in cart, quantity updated"
            : "Product added to cart"
        );
      }

      return exists
        ? current.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...current, { ...product, quantity: 1 }];
    });
  }

  console.log("Current cart items:", cartItems);

  function removeFromCart(productId) {
    setCartItems((current) => current.filter((item) => item.id !== productId));
  }

  function updateQuantity(productId, amount) {
    setCartItems((current) =>
      current
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + amount }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function clearCart() {
    setCartItems([]);
  }

  function getTotal() {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }

  // uncomment this if you need to show cart quantity count in Navbar not just number of items
  // function getCartCount() {
  //   return cartItems.reduce((count, item) => count + item.quantity, 0);
  // }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
