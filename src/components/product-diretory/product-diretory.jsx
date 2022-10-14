import './product-diretory.scss'

// import { useContext } from 'react'
// import { ProductsContext } from '../../contexts/products-context'

import ProductContainer from '../product-container/product-container'

// const {currentProduct} = useContext(ProductsContext)

const ProductDiretory = ({product}) => {
    return(
        <div className='main-product-container'>
            {product.map((product) => (
                <ProductContainer key={product.id} productInfo={product}/>
            ))}
        </div>
    )
}

export default ProductDiretory
