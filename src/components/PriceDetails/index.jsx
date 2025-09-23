import { useCart } from "../../context/cartd-context";
import { getTotalCartAMount } from "../../utils/getTotalCartAMount";

export const PriceDetails = () => {
  const { cart } = useCart();

  const cartTotalPrice = getTotalCartAMount(cart);
  const deliveryCharge = 40;
  return (
    <div className="bg-white shadow-md rounded-lg p-6  max-w-sm flex flex-col gap-4 w-[320px]">
      {/* Header */}
      <p className="text-lg font-bold text-gray-800">Price Details</p>

      {/* Price of items */}
      <div className="flex justify-between border-b pb-2">
        <p>Price of ({cart.length}) items</p>
        <p className="font-semibold">Rs. {cartTotalPrice}</p>
      </div>

      {/* Delivery Charges */}
      <div className="flex justify-between border-b pb-2">
        <p>Delivery Charges</p>
        <p className="font-semibold">Rs. {deliveryCharge}</p>
      </div>

      {/* Total Price */}
      <div className="flex justify-between border-b-2 pb-2 pt-2">
        <p className="font-medium">Total Price</p>
        <p className="font-semibold">Rs. {cartTotalPrice + deliveryCharge}</p>
      </div>

      {/* Place Order Button */}
      <div>
        <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
          Place Order
        </button>
      </div>
    </div>
  );
};
