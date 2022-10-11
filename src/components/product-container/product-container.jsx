import './product-container.scss'
import Button from '../button/button.jsx'

const ProductContainer = ({productInfo}) => {
    const {imageUrl, name, price} = productInfo
    return(
        <div className='product-container'>
            <img className='product-image' src={imageUrl} alt={name}></img>
            <div className='footer'>
                <span className='product-name'>{name}</span>
                <span className='product-price'>{`${price}$`}</span>
            </div>
            <Button buttonType='inverted' children={'ADD TO CART'}/>
        </div>

    )
}

export default ProductContainer