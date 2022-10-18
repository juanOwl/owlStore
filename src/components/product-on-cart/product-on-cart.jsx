import "./product-on-cart.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const CartProduct = ({ cartItem, removeItem }) => {
  const { name, price, quantity, imageUrl, id } = cartItem;

  return (
    <div className="product-item" key={id}>
      <img src={imageUrl} alt={name}></img>
      <div className="item-details">
        <div style={{ display: "block" }}>{name}</div>
        <span> {`Quantity: ${quantity}x `}</span>
        <p style={{ display: "inline" }}>{`Price: ${price}$`}</p>
      </div>
      <div className='remove-button' onClick={removeItem}>
        <FontAwesomeIcon icon={faTrashCan} className="trash-icon" />
      </div>
    </div>
  );
};

export default CartProduct;
