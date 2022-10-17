import './product-container.scss'
import Button from '../button/button.jsx'

import { useContext } from 'react'
import { CartContext } from '../../contexts/cart-context'

const ProductContainer = ({ productInfo }) => {
    const { cartProducts, setCartProducts } = useContext(CartContext)
    
    const addProduct = () => {
        const cartArray = [...cartProducts]
        if (!productInfo.hasOwnProperty('quantity')) {
            productInfo.quantity = 1
        }
        else if (productInfo.hasOwnProperty('quantity') && productInfo.quantity == 0) {
            productInfo.quantity = 1
        }
        if (cartArray.includes(productInfo)) {
            const index = cartArray.findIndex(object => { return object === productInfo })
            cartArray[index].quantity++
        }
        else {
            cartArray.push(productInfo)
        }
        // console.log(cartArray)
        setCartProducts(cartArray)
        console.log(cartProducts)
    }
    // useEffect(() => {setCartProducts(cartArray)}, [cartProducts])


    const { imageUrl, name, price } = productInfo
    return (
        <div className='product-container'>
            <img className='product-image' src={imageUrl} alt={name}></img>
            <div className='footer'>
                <span className='product-name'>{name}</span>
                <span className='product-price'>{`${price}$`}</span>
                <button onClick={addProduct}>TESTE</button>
            </div>
            <Button buttonType='inverted' children={'ADD TO CART'} />
        </div>

    )
}

export default ProductContainer