export const CartCard = ({ product }) => {
  return (
    <div className="flex bg-white shadow-md rounded-lg overflow-hidden mb-4 w-[800px]">
      {/* Image */}
      <div className="w-32 h-32 flex-shrink-0">
        <img
          src={product.images[0]}
          alt={product.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Details */}
      <div className="flex flex-col justify-between p-4 flex-1">
        {/* Title */}
        <h2 className="text-lg font-semibold">{product.title}</h2>

        {/* Category & Price */}
        <div className="text-gray-600">
          <p className="text-sm">{product.category.name}</p>
          <p className="text-base font-bold">
            Rs. {product.price}00{" "}
            <span className="text-sm text-red-500 font-medium">(30% OFF)</span>
          </p>
        </div>

        {/* Quantity */}
        <div className="flex items-center gap-2 mt-2">
          <span className="font-medium">Quantity:</span>
          <div className="flex items-center border rounded-md overflow-hidden">
            <button className="px-2 py-1 bg-gray-200 hover:bg-gray-300">-</button>
            <span className="px-3 py-1">{1}</span>
            <button className="px-2 py-1 bg-gray-200 hover:bg-gray-300">+</button>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-2 mt-4">
          <button className="flex-1 bg-red-500 text-white py-2 rounded hover:bg-red-600">
            Remove From Cart
          </button>
          <button className="flex-1 border border-blue-500 text-blue-500 py-2 rounded hover:bg-blue-50">
            Move To Whishlist
          </button>
        </div>
      </div>
    </div>
  );
};
