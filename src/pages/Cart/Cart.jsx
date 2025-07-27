import { useContext } from "react";
import CartContext from "../../context/CartContext/CartContext";
import emptyCart from "../../assets/EmptyCart.png";

function Cart() {
  const { cartItems, removeFromCart, updateQuantity, getTotal, clearCart } =
    useContext(CartContext);

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto flex flex-col items-center justify-center w-[30%]">
        <img
          src={emptyCart}
          alt="Empty Cart"
          className="w-full object-cover mt-6 dark:bg-amber-50 "
        />
        <p className="text-3xl text-center py-10 text-main-color font-bold">
          Your Cart Is Empty
        </p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
      {cartItems.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center bg-gray-100 p-4 mb-3 rounded-lg"
        >
          <div className="flex items-center gap-4">
            <img src={item.image} alt={item.title} className="w-16 h-16" />
            <div>
              <h2 className="font-bold">{item.title}</h2>
              <p className="text-sm">Price: ${item.price.toFixed(2)}</p>
              <div className="flex items-center gap-2 mt-2">
                <button
                  onClick={() => updateQuantity(item.id, -1)}
                  className="px-2 bg-gray-300 rounded hover:cursor-pointer"
                >
                  –
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, 1)}
                  className="px-2 bg-gray-300 rounded hover:cursor-pointer"
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <button
            onClick={() => removeFromCart(item.id)}
            className="text-xl hover:cursor-pointer"
          >
            <i
              className="fa-solid fa-trash-can"
              style={{ color: "#f11313" }}
            ></i>
          </button>
        </div>
      ))}
      <div className="mt-6 flex justify-between items-center">
        <p className="text-xl font-bold">Total: ${getTotal().toFixed(2)}</p>
        <div className="flex gap-4">
          <button
            onClick={clearCart}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 hover:cursor-pointer"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
