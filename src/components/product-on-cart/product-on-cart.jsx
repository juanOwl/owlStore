import './product-on-cart.styles.scss'

    const CartProduct = ({cartItem}) => {
        const {name, price, quantity, imageUrl} = cartItem
        return(
            <div className='cart-product-container'>
                <img src={imageUrl} alt={name}/>
                <span>{name}</span>
                <span>{price}</span>
            </div>
        )
    }

    export default CartProduct 