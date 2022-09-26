import { useEffect } from "react";
import { Link } from "react-router-dom";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { IoStarHalf } from "react-icons/io5";

const ProductCarousel = ({
  name,
  favorite,
  rating,
  price,
  img,
  discount,
  onClick,
}) => {
  return (
    <>
      <div
        className="bg-white z-50 relative"
        style={{
          flex: "0 0 auto",
          width: "146.57px",
          height: "187px",
          boxShadow: " 0px 5.46784px 27.3392px #EDEDED",
          borderRadius: "6.31757px",
        }}
      >
        <div
          className="product-image relative w-full overflow-hidden"
          style={{ height: "106.14px" }}
        >
          {discount && (
            <span
              className="absolute bg-slate-100 py-1 px-2.5 rounded-sm top-1 right-1 z-50 capitalize"
              style={{
                color: "#1C00FF",
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "11.25px",
                lineHeight: "17px",
                textAlign: "center",
              }}
            >
              {discount}%
            </span>
          )}
          <img
            src={img}
            alt={name}
            className="w-full relative overflow-hidden object-cover rounded-lg"
            style={{ height: "106.14px" }}
          />
        </div>
        <div
          className="product-info w-full pt-2 px-2"
          style={{ height: "80.86px" }}
        >
          <div className="flex justify-between mb-1.5">
            <h2
              className="capitalize pb-0"
              style={{
                fontFamily: "Inter",
                fontSize: "15px",
                fontWeight: "500",
                lineHeight: "18px",
                color: "000",
              }}
            >
              {name}
            </h2>
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

          <span
            className="price font-black"
            style={{
              fontFamily: "Inter",
              fontSize: "17px",
              fontWeight: "600",
              lineHeight: "21px",
              color: "#1c0fff",
            }}
          >
            &#8358; {price}
          </span>
          <div className="flex">
            <IoStarHalf style={{ color: "#C4C4C4" }} />
            <p className="product-card-desc-left-rating ml-0.5">{rating}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCarousel;
