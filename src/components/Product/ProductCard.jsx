import { useState, useEffect } from "react";
import { IoStarHalf } from "react-icons/io5";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { BsCartPlus } from "react-icons/bs";

import "./ProductCard.scss";
import { Link } from "react-router-dom";

const ProductCard = ({
  img,
  name,
  price,
  rating,
  favorite,
  onClick,
  discount,
  productId,
}) => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    const updateSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const { width } = windowSize;

  return (
    <>
      {width > 640 ? (
        <div className="product-card">
          <div className="product-card-img relative">
            <img src={img} alt="" />
            {discount ? (
              <div className="product-card-img-discount absolute top-3 right-3">
                <span>-{discount}%</span>
              </div>
            ) : null}
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
            <Link
              className="product-card-btn-view mt-2.5"
              to={"/productDesc/:Desc"}
              state={{
                img: img,
                name: name,
                price: price,
                productId: productId,
              }}
            >
              View
            </Link>
          </div>
        </div>
      ) : (
        <div
          className="bg-white z-10 relative"
          style={{
            flex: "0 0 auto",
            width: "146.57px",
            height: "187px",
            boxShadow: " 0px 5.46784px 27.3392px #EDEDED",
            borderRadius: "6.31757px",
          }}
        >
          <div
            className="absolute z-50 h-10 w-10 flex justify-center items-center -left-3 -top-3"
            style={{
              background: " #FFFFFF",
              boxShadow: "0px 0px 24px rgba(141, 141, 141, 0.25)",
              borderRadius: " 80px",
              color: "#1C00FF",
            }}
          >
            <button>
              <BsCartPlus />
            </button>
          </div>
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
      )}
    </>
  );
};

export default ProductCard;
