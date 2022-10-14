import './product-container.scss'
import Button from '../button/button.jsx'

import { useContext, useState, useEffect } from 'react'
import { CartContext } from '../../contexts/cart-context'

const ProductContainer = ({ productInfo }) => {
    const { cartProducts, setCartProducts } = useContext(CartContext)
    const cartArray = cartProducts

    let [forceRemount, setForceRemount] = useState(0)
    useEffect(() => {
        setForceRemount(forceRemount++)
        console.log('MEUOVO ')
    }, [cartProducts]
    )


    const addProduct = () => {
        if (!productInfo.hasOwnProperty('quantity')){
            productInfo.quantity = 1
        }
        else if(productInfo.hasOwnProperty('quantity') && productInfo.quantity==0){
            productInfo.quantity = 1
        }
        if (cartArray.includes(productInfo)) {
            const index = cartArray.findIndex(object => {return object === productInfo })
            cartProducts[index].quantity++
            setCartProducts(cartArray)
        }
        else {
            cartArray.push(productInfo)
            setCartProducts(cartArray)
        }
        // setCartProducts(cartArray)
        console.log(cartProducts)
        // console.log(cartArray)
    }


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