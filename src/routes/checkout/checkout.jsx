import "./checkout.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart-context";
import CheckoutItem from "../../components/checkout-item/checkout-item";

const Checkout = () => {
  const { cartProducts, totalPrice } = useContext(CartContext);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartProducts.length > 0 ? cartProducts.map((product) => (
        <CheckoutItem product={product}/>
      ))  : <span className="empty-cart">Your cart is empty : (</span>}
      <div className="total">Total: {totalPrice}$</div>
    </div>
  );
};

export default Checkout;
