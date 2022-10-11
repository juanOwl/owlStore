import { useContext } from "react"
import { ProductsContext } from "../../contexts/products-context"

import ProductDiretory from "../../components/product-diretory/product-diretory"

const Shop = () => {
    const {currentProducts} = useContext(ProductsContext)
    return(
        <ProductDiretory product={currentProducts}/>
    )
}

export default Shop