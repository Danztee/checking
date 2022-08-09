import React from "react";
import { IoStarHalf } from "react-icons/io5";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

const ProductCard = ({ img, name, price, rating, favorite, onClick }) => {
  return (
    <div className="product-card">
      <div className="product-card-img">
        <img src={img} alt="" />
      </div>
      <div className="product-card-desc px-3 mt-3">
        <div className="product-card-desc-left">
          <h1>{name}</h1>
          <div className="marker mx-2.5"></div>
          <IoStarHalf />
          <p className="product-card-desc-left-rating ml-0.5">{rating}</p>
        </div>
        <div className="product-card-desc-right px-3">
          {favorite ? (
            <button onClick={onClick}>
              <MdFavorite color="#1c00ff" />
            </button>
          ) : (
            <button onClick={onClick}>
              <MdFavoriteBorder color="#1c00ff" />
            </button>
          )}
        </div>
      </div>
      <div className="product-card-price px-3 mt-3 mb-4">
        <h2>&#8358; {price}</h2>
      </div>
      <div className="product-card-btn px-3 flex flex-col">
        <button className="product-card-btn-cart">Add to cart</button>
        <button className="product-card-btn-view mt-2.5">View</button>
      </div>
    </div>
  );
};

export default ProductCard;
