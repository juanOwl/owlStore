import "./product-on-cart.styles.scss";

const CartProduct = ({ cartItem }) => {
  const { name, price, quantity, imageUrl, id } = cartItem;
  return (
    <div className="product-item" key={id}>
      <img src={imageUrl} alt={name}></img>
      <div className="item-details">
        <div style={{ display: "block" }}>{name}</div>
        <span> {`Quantity: ${quantity}x `}</span>
        <p style={{ display: "inline" }}>{`Price: ${price}$`}</p>
      </div>
    </div>
  );
};

export default CartProduct;
