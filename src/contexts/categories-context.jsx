import { createContext, useState, useEffect } from "react";
// import SHOP_DATA from '../utils/shop-data.js'
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

export const CategoriesContext = createContext({
    currentCategories: {},
    setCategories: () => {}
})

export const CategoriesProvider = ({children}) => {
    const [currentCategories, setCategories] = useState({})

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments()
            console.log(categoryMap)
            setCategories(categoryMap)
        }
        getCategoriesMap()
    },[])
    // useEffect(()=> {addCollectionAndDocuments('categories', SHOP_DATA)}, [])
    const value = {currentCategories, setCategories} 

    return(
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    )
}