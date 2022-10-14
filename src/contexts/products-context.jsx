import { createContext, useState } from "react";
import shop_data from '../utils/shop-data.json'

export const ProductsContext = createContext({
    currentProducts: null,
    setProducts: () => {}
})

export const ProductsProvider = ({children}) => {
    const [currentProducts, setProducts] = useState(shop_data)
    const value = {currentProducts, setProducts} 

    return(
        <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
    )
}