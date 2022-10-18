import { createContext, useState } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartProducts: [],
  setCartProducts: () => {},
  addProduct: () => {},
});


export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);
  const addProduct = (productInfo, productsOnCart) => {
    const cartArray = [...productsOnCart];
    if (!productInfo.hasOwnProperty("quantity")) {
      productInfo.quantity = 1;
    } else if (
      productInfo.hasOwnProperty("quantity") &&
      productInfo.quantity === 0
    ) {
      productInfo.quantity = 1;
    }
    if (cartArray.includes(productInfo)) {
      const index = cartArray.findIndex((object) => {
        return object === productInfo;
      });
      cartArray[index].quantity++;
    } else {
      cartArray.push(productInfo);
    }
    // console.log(cartArray)
    setCartProducts(cartArray);
    console.log(cartProducts);
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartProducts,
    setCartProducts,
    addProduct,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
