import React, { useState, useParams } from "react";
import { useFetch } from "../hooks/useFetch";

function Product() {
  const { id } = useParams();
  const {
    data: product,
    isPending,
    Error,
  } = useFetch("https://dummyjson.com/products/" + id);

  const [cart, setCart] = useState([]);

  const addToCart = () => {
    setCart([...cart, product]);
  };

  return (
    <>
      {product && (
        <div className="align-content">
          <h1 className="text-4xl mb-5 font-bold">{product.title}</h1>
          <div className="carousel carousel-center p-4 space-x-3 bg-neutral rounded-box">
            {product.images.map((image) => {
              return (
                <div key={image} className="carousel-item">
                  <img
                    src={image}
                    className="rounded-box max-h-60 lg:max-h-96  h-full object-contain"
                  />
                </div>
              );
            })}
          </div>

          <p className="text-4xl mt-5 text-center font-bold">
            <b></b>
            {product.brand}
          </p>
          <p className="text-4xl mt-5 ">
            Discount: <b></b>
            {product.discountPercentage}
          </p>

          <p className="text-4xl mt-5   ">
            Rating: <b></b>
            {product.rating}
          </p>

          <p className="text-4xl  mt-5 mb-5  ">
            Categoria: <b></b>
            {product.category}
            <div className=" text-right">
              <button onClick={addToCart} className="btn btn-primary">
                Add To Cart
              </button>
            </div>
          </p>
        </div>
      )}
    </>
  );
}

export default Product;
