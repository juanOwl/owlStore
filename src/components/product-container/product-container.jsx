import "./product-container.scss";
import Button from "../button/button.jsx";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart-context";

const ProductContainer = ({ productInfo }) => {
  const { addProduct, cartProducts } = useContext(CartContext);

  const { imageUrl, name, price } = productInfo;
  return (
    <div className="product-container">
      <img className="product-image" src={imageUrl} alt={name}></img>
      <div className="footer">
        <span className="product-name">{name}</span>
        <span className="product-price">{`${price}$`}</span>
      </div>
      <div
        onClick={() => addProduct(productInfo, cartProducts)}
        className="button-containerB"
      >
        <Button buttonType="inverted" children={"ADD TO CART"} />
      </div>
    </div>
  );
};

export default ProductContainer;
