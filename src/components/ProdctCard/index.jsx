export const ProductCard = ({product}) => {
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
            <button className="button btn-primary btn-icon cart-btn d-flex                          align-center justify-center gap cursor btn-margin">
             <span className="material-icons-outlined text-3xl">favorite</span>
            Add To whishlist
          </button>
          <button className="button btn-primary btn-icon cart-btn d-flex                          align-center justify-center gap cursor btn-margin">
             <span className="material-icons-outlined text-3xl">shopping_cart</span>
            Add To Cart
          </button>
          
        </div>
      </div>
    </div>
  );
};
