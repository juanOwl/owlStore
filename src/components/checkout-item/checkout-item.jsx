import "./checkout-item.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart-context";

const CheckoutItem = ({ product }) => {
  const { cartProducts, addProduct, decreaseQuantity, removeProduct } =
    useContext(CartContext);
  return (
    <div key={product.id} className="checkout-item-container">
      <div className="image-container">
        <img src={product.imageUrl} alt={product.name} />
      </div>
      <span className="name">{product.name}</span>
      <span className="quantity">
        <span className='dec-button' onClick={() => decreaseQuantity(product, cartProducts)}><b>- &nbsp;&nbsp;</b></span>
        {product.quantity}
        <span className='add-button' onClick={() => addProduct(product, cartProducts)}><b>&nbsp;&nbsp; +</b></span>
      </span>
      <span className="price">{product.price} $</span>
      <div
        onClick={() => removeProduct(product, cartProducts)}
        className="remove-button"
      >
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
