import React, { createContext, useState } from "react";
export const CartPageContext = createContext();
const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (product) => {
    const presentItem = cartItems.find((item) => item.id === product.id);
    if (presentItem) {
      setCartItems((prev) =>
        prev.map((prevProd) =>
          prevProd.id === product.id
            ? { ...prev, qty: presentItem.qty + 1 }
            : prevProd
        )
      );
    } else {
      setCartItems((prev) => [...prev, { ...product, qty: 1 }]);
    }
  };
  const increaseQty = (productId) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };
  const decreaseQty = (productId) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === productId ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0)
    );
  };
  const numberQty = (productId, count) => {
    setCartItems((prev) =>
      prev
        .map((item) => (item.id === productId ? { ...item, qty: count } : item))
        .filter((item) => item.qty > 0)
    );
  };
  const removeProduct = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };
  const cartTotal = cartItems.reduce(
    (total, currentItem) => total + currentItem.price * currentItem.qty,
    0
  );
  const value = {
    cartItems,
    addToCart,
    increaseQty,
    decreaseQty,
    numberQty,
    removeProduct,
    cartTotal,
  };
  return (
    <CartPageContext.Provider value={value}>
      {children}
    </CartPageContext.Provider>
  );
};

export default CartContextProvider;
