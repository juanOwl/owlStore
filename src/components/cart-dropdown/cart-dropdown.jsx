import './cart-dropdown.scss'
import Button from '../button/button'

import CartProduct from '../product-on-cart/product-on-cart'

import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../contexts/cart-context'
import { ProductsContext } from '../../contexts/products-context'


const CartDropdown = () => {
    const { setCartProducts, cartProducts } = useContext(CartContext)
    const { setProducts, currentProducts } = useContext(ProductsContext)
    // let [forceRemount, setForceRemount] = useState(0)
    // useEffect(() => {
    //     setForceRemount(forceRemount++)
    //     console.log(forceRemount)
    // }, [cartProducts.length]
    // )

    // useEffect(() => {}, [cartProducts])
    const clearCart = () => {
        const cleanProducts = currentProducts
        console.log(cleanProducts)
        for (let i in cleanProducts) {
            if (cleanProducts[i].hasOwnProperty('quantity')) {
                cleanProducts[i].quantity = 0
            }
        }
        setProducts(cleanProducts)
        setCartProducts([])
    }
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items' >
                {cartProducts.map((product) => (
                    
                    <div className='product-item' key={product.id}>
                        <img src={product.imageUrl}></img>
                        <span> {`Quantity: ${product.quantity}x `}</span>
                        <p style={{display:'inline'}}>{`Price: ${product.price}$`}</p>
                        {/* <FontAwesomeIcon icon="fa-regular fa-trash-can" /> */}
                    </div>)
                )}

            </div>
            <button onClick={clearCart}>CLEAR CART</button>
            <Button children={'FINALIZE PURCHASE'} />

        </div>
    )
}
export default CartDropdown