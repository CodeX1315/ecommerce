import { useCart } from "../../context/cartd-context";
import { findProductInCart } from "../../utils/findProductInCart";
import { useNavigate } from "react-router-dom";

export const ProductCard = ({product}) => {

  const { cartDispatch, cart } = useCart();
  const isProductInCart = findProductInCart( cart, product.id);
  const navigate = useNavigate();
  // console.log(isProductInCart);
  const onCartClick = (product) => {
        !isProductInCart ?
       cartDispatch({
        type: "ADD_TO_CART",
        payload: { product }
      }) : navigate('/cart')
  }

  console.log(cart);

  return (
    <div className="card card-vertical d-flex direction-column relative shadow">
      <div className="card-image-container">
        <img className="card-image" src={product.images[0]} alt="shoes" />
      </div>
      <div className="card-details">
        <div className="card-title">{product.title}</div>
        <div className="card-description">
            <p>{product.category.name}</p>
          <p className="card-price">
            Rs. {product.price}00
            {/* <span className="price-strike-through">Rs. 2499</span> */}
            <span className="discount">(30% OFF)</span>
          </p>
        </div>
        <div className="cta-btn">
            <button className="button btn-primary btn-icon cart-btn d-flex bg-rose-400 align-center justify-center gap cursor btn-margin">
             <span className="material-icons-outlined text-3xl">favorite</span>
            Add To whishlist
          </button>
          <button onClick={ () => onCartClick(product)} className="button btn-primary btn-icon cart-btn d-flex bg-rose-400  align-center justify-center gap cursor btn-margin">
             <span className="material-icons-outlined text-3xl">
              {
                isProductInCart ? 'shopping_cart_checkout': 'shopping_cart'
              }
            
             </span>
            {
              isProductInCart ? 'Go To Cart' : 'Add To Cart'
             }
             
          </button>
          
        </div>
      </div>
    </div>
  );
};
