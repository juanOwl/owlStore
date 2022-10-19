import "./cart-dropdown.scss";
import Button from "../button/button";
import { Link } from "react-router-dom";

import CartProduct from "../product-on-cart/product-on-cart";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart-context";
import { CategoriesContext } from "../../contexts/categories-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const CartDropdown = () => {
  const {
    setCartProducts,
    cartProducts,
    removeProduct,
    totalPrice,
    setTotalPrice,
  } = useContext(CartContext);
  const { setCategories, currentCategories } = useContext(CategoriesContext);

  const clearCart = () => {
    const cleanProducts = [...currentCategories];
    console.log(cleanProducts);
    for (let i in cleanProducts) {
      if (cleanProducts[i].hasOwnProperty("quantity")) {
        cleanProducts[i].quantity = 0;
      }
    }
    setCategories(cleanProducts);
    setCartProducts([]);
    setTotalPrice(0);
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartProducts.map((product) => (
          <div>
            <CartProduct
              key={product}
              cartItem={product}
              removeItem={() => removeProduct(product, cartProducts)}
            />
          </div>
        ))}
      </div>
      <button className="clear-cart" onClick={clearCart}>
        CLEAR CART <FontAwesomeIcon icon={faTrashCan} className="trash-icon" />
      </button>
      <div>Total: {totalPrice}$</div>
      <Link className="nav-link" to="/checkout">
        <Button children={"FINALIZE PURCHASE"} />
      </Link>
    </div>
  );
};
export default CartDropdown;
