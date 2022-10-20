import "./product-diretory.scss";

// import { useContext } from 'react'
// import { ProductsContext } from '../../contexts/products-context'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductContainer from "../product-container/product-container";

// const {currentProduct} = useContext(ProductsContext)

const ProductDiretory = ({ categories }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      {Object.keys(categories).map((title) => (
        <div className="TESTE">
          <h2>{title}</h2>
          <Carousel showDots={true} responsive={responsive} infinite={true} >
                {categories[title].map((product) => (
                    <div>
                        <ProductContainer key={product.id} productInfo={product} />
                    </div>
                ))}
          </Carousel>
        </div>
      ))}
    </>
  );
};

export default ProductDiretory;
