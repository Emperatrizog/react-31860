import React, { createContext, useContext, useState } from 'react';

export const CartContext = createContext({});

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  function addToCart(item, amount) {
    console.log({ item, amount });
    if (isInCart(item.id)) {
      return setCartList(
        cartList.map((cafe) =>
          cafe.id === item.id
            ? { ...cafe, amount: cafe.amount + amount}
            : cafe
        )
      );
    }
    setCartList([...cartList, { ...item, amount }]);
  }

  function isInCart(id) {
    return cartList.some((item) => item.id === id);
  }

  return (
    <CartContext.Provider
      value={{
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
