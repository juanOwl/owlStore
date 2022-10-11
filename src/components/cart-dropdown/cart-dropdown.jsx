import './cart-dropdown.scss'
import Button from '../button/button'

const CartDropdown = () => {
    return(
        <div className='cart-dropdown-container'>
            <div className='cart-items'/>
            <Button children={'FINALIZE PURCHASE'}/>

        </div>
    )
}
export default CartDropdown