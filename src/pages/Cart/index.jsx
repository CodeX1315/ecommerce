import { Navbar } from "../../components/Navbar";
import { useCart } from "../../context/cartd-context";
import { CartCard } from "../../components/CartCard";
import { PriceDetails } from "../../components/PriceDetails";

export const Cart = () => {
  const { cart } = useCart();
  return (
    <div className="bg-[#BBDEFB]">
      <Navbar />
      <main className="flex flex-col m-4 p-10 gap-8">
        <p className="text-center font-black font-mono text-3xl mt-4 text-red-600 ">
          Shopy Cart
        </p>
        <div className="flex flex-wrap">
        <div>
          {cart?.length > 0 ? (
            cart.map((product) => (
              <CartCard key={product.id} product={product} />
            ))
          ) : (
            <p className="justify-center font-black font-mono text-5xl text-center text-purple-700">
              OOPS the cart is empty
            </p>
          )}
        </div>
        <div className="ml-52">
            <PriceDetails />
        </div>
        </div>
      </main>
    </div>
  );
};
