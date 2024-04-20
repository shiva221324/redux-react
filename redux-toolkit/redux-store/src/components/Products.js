import React from "react";
import { useState, useEffect } from "react";
import { add } from "../store/cartSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/productsSlice";

const Products = () => {
  //const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);

  useEffect(() => {
    // fetch("https://fakestoreapi.com/products")
    //   .then((data) => data.json())
    //   .then((result) => setProducts(result));
    dispatch(fetchProducts());
  }, []);
  const handleAdd = (product) => {
    dispatch(add(product));
  };
  if (status === "loading") {
    return <h2>LOADING...</h2>;
  }
  return (
    <>
      <h1 className=" font-bold text-2xl text-center">Products Dashboard</h1>
      <div className=" m-8 gap-5 grid grid-cols-4">
        {products.map((product, index) => {
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
                  onClick={() => handleAdd(product)}
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Products;
