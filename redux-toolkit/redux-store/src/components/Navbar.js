import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
  const items = useSelector((state) => {
    //console.log(state);
    return state.cart;
  });
  return (
    <div className="bg-gray-800 p-4 pl-3 text-white flex justify-between items-center">
      <div className="flex items-center">
        <Link
          to="/"
          className=" text-lg font-semibold mr-4 hover:text-gray-300"
        >
          Home
        </Link>
        <div className="flex-grow"></div>
      </div>
      <span className="text-2xl font-bold">REDUX STORE</span>
      <div>
        <div className="flex-grow"></div>
        <Link
          to="/cart"
          className="mr-4 hover:text-gray-300 font-semibold text-lg "
        >
          Cart
        </Link>
        <span className=" font-semibold  bg-[#b59677;] hover:bg-amber-500 hover:text-black text-white px-2 py-1 rounded">
          Cart items:{items.length}
        </span>
      </div>
    </div>
  );
};

export default Navbar;
