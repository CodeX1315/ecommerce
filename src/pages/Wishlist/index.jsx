import { Navbar } from "../../components/Navbar";
import { useCart } from "../../context/cartd-context";
import { FavProduct } from "../../components/FavProduct";


export const Wishlist = () => {
  const { fav } = useCart();
  return (
    <div>
      <Navbar />
      <main>
        {fav?.length > 0 ? (
          <div className="flex flex-wrap gap-3 ml-4 mt-4">
            {fav?.length > 0 &&
              fav.map((product) => (
                <FavProduct key={product.id} product={product} />
              ))}
          </div>
        ) : (
          <div>
            <p className="justify-center font-black font-mono text-5xl text-center text-purple-700">
              You not selected any product 
            </p>
          </div>
        )}
      </main>
    </div>
  );
};
