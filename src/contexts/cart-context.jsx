
import { createContext, useState } from "react";

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartProducts: [],
    setCartProducts: () => { }
})

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartProducts, setCartProducts] = useState([])
    const value = { isCartOpen, setIsCartOpen, cartProducts, setCartProducts };
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}