import "./cart-dropdown.scss";
import Button from "../button/button";

import CartProduct from "../product-on-cart/product-on-cart";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart-context";
import { ProductsContext } from "../../contexts/products-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashCan
} from "@fortawesome/free-solid-svg-icons";

const CartDropdown = () => {
  const { setCartProducts, cartProducts } = useContext(CartContext);
  const { setProducts, currentProducts } = useContext(ProductsContext);
  const clearCart = () => {
    const cleanProducts = [...currentProducts];
    console.log(cleanProducts);
    for (let i in cleanProducts) {
      if (cleanProducts[i].hasOwnProperty("quantity")) {
        cleanProducts[i].quantity = 0;
      }
    }
    setProducts(cleanProducts);
    setCartProducts([]);
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartProducts.map((product) => (
          <CartProduct key={product} cartItem={product} />
        ))}
      </div>
      <button className="clear-cart" onClick={clearCart}>
        CLEAR CART <FontAwesomeIcon icon={faTrashCan} className="trash-icon" />
      </button>
      <Button children={"FINALIZE PURCHASE"} />
    </div>
  );
};
export default CartDropdown;
