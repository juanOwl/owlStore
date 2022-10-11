import './cart-icon.styles.scss'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import { CartContext } from '../../contexts/cart-context'
import { useContext } from 'react'

const CartIcon = ({onClick}) => {
    const {setIsCartOpen, isCartOpen} = useContext(CartContext)
    const toggleCart = () => {
        if(isCartOpen == true) {
            setIsCartOpen(false)
        }
        else setIsCartOpen(true)
    }

    return(
        <div className='cart-icon-container' onClick={toggleCart}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>0</span>
        </div>
    )
}

export default CartIcon