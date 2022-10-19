import { useContext } from "react"
import { CategoriesContext } from "../../contexts/categories-context"

import ProductDiretory from "../../components/product-diretory/product-diretory"

const Shop = () => {
    const {currentCategories} = useContext(CategoriesContext)
    return(
        <ProductDiretory categories={currentCategories}/>
    )
}

export default Shop