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
    if (isInCart(item.id)){
      const newCart = [...cartList];
      const indexEncontrado = newCart.findIndex ((product) => product.id ===item.id)
      newCart[indexEncontrado].amount += amount
      setCartList(newCart);
    }
    else {
      setCartList((previouscart) =>[...cartList, item, amount]);
    }

    setCartList([...cartList, { ...item, amount }]);
  }
  const removeFromCart = (id) => {
    const itemRemoved = cartList.filter((item) => item.id !== id);
    setCartList(itemRemoved);
  }

  function isInCart(id) {
    return cartList.some((item) => item.id === id);
  }

  const calcPriceCart = () =>{
    let total = 0;
    cartList.forEach((element)=>{
      total = total + element.price * element.amount;
    });
    return total;
  }

  const totalAmount = () => {
    let total = 0;
    cartList.forEach((element)=>{
      total = total + element.amount;
    })
    return total;
  }


  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCart,
        setCartList,
        removeFromCart,
        isInCart,
        calcPriceCart,
        totalAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
