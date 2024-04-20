import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/cartSlice";
const Cart = () => {
  const Cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleRemove = (id) => {
    dispatch(remove(id));
  };
  return (
    <>
      <h1 className=" font-bold text-2xl text-center">Products Dashboard</h1>
      <div className=" m-8 gap-5 grid grid-cols-4">
        {Cart.map((product, index) => {
          return (
            <div className="max-w-xs rounded overflow-hidden shadow-lg">
              <img
                className="w-full h-56 object-contain"
                src={product.image}
                alt={product.title}
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 truncate">
                  {product.title}
                </div>
                <div className=" pb-2 truncate">{product.description}</div>
                <div className=" pb-2 text-center">INR: {product.price}</div>
                <button
                  onClick={() => handleRemove(product.id)}
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Remove
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cart;
