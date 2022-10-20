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
    setIsCartOpen
  } = useContext(CartContext);
  const { setCategories, currentCategories } = useContext(CategoriesContext);

  const clearCart = () => {
    const cleanProducts = { ...currentCategories };
    console.log(cleanProducts);
    Object.keys(cleanProducts).map((title) =>
      cleanProducts[title].map((item) => {
        if (item.hasOwnProperty("quantity")) {
          item.quantity = 0;
        }
      })
    );

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
        <div onClick={() => setIsCartOpen(false)}>
          <Button children={"FINALIZE PURCHASE"} />
        </div>
      </Link>
    </div>
  );
};
export default CartDropdown;
