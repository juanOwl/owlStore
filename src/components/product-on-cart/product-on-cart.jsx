import './product-on-cart.styles.scss'

    const CartProduct = ({imageUrl, name, price}) => {
        return(
            <div className='cart-product-container'>
                <img src={imageUrl}/>
                <span>{name}</span>
                <span>{price}</span>
            </div>
        )
    }

    export default CartProduct 