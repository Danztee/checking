import { listProducts } from "../../actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import { ProductCard } from "../../components";
import { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";

import "./ProductDesc.scss";
import Accordion from "./Accordion";

import img from "../../assets/pro-desc.png";
import smallImg from "../../assets/small-img.png";

const ProductDesc = (props) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);

  console.log(props);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    if (count === 1) {
      return;
    }
    setCount((prev) => prev - 1);
  };

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  const location = useLocation();
  let state = location.state;

  console.log(state);

  return (
    <div>
      <section className="customContainer">
        <h1 className="category">Home === category</h1>

        <div className="container">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* first grid col */}
            <div className="flex" style={{ flexDirection: "column" }}>
              <div style={{}} className="img-container">
                <img src={state.img} alt="" className="prod-desc-img" />
              </div>

              <div
                className="small"
                style={{ justifyContent: "space-between" }}
              >
                <img src={state.img} alt="" className="prod-desc-img" />
                <img src={state.img} alt="" className="prod-desc-img" />
                <img src={state.img} alt="" className="prod-desc-img" />
                <img src={state.img} alt="" className="prod-desc-img" />
              </div>
            </div>

            {/* second grid col */}
            <div style={{}}>
              <h1 className="title">{state.name}</h1>
              <p className="price">N{state.price}</p>
              <div className="stars flex gap-2 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-star"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-star"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-star"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-star"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-star"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                </svg>
              </div>

              <div className="cover">
                <div className="mt-5">
                  <p>Available colors</p>
                  <div className="colors flex gap-2 mt-2">
                    <div className="color"></div>
                    <div className="color"></div>
                    <div className="color"></div>
                    <div className="color"></div>
                  </div>
                </div>
                <div className="select-menu">
                  <select className="mt-10">
                    <option value="0">Sizes</option>
                    <option value="38">39</option>
                    <option value="39">38</option>
                    <option value="40">40</option>
                    <option value="41">41</option>
                  </select>
                </div>
              </div>

              <div className="quantity">
                <p>QTY</p>
                <div className="flex box">
                  <div className="qty-button flex">
                    <h1 style={{ marginLeft: "1.5rem" }}>{count}</h1>
                    <div className="btn-cont">
                      <button onClick={increment}>+</button>
                      <button onClick={decrement}>-</button>
                    </div>
                  </div>
                  <div className="adding flex gap-3">
                    <button>Buy now</button>
                    <button>Add to cart</button>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    class="bi bi-heart"
                    viewBox="0 0 16 16"
                    style={{ color: "#1C00FF" }}
                  >
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                  </svg>
                </div>
              </div>

              <Accordion
                title="Can’t see what you want? describe it here"
                style={{
                  marginTop: "6rem",
                }}
              />
            </div>
          </div>
        </div>

        {/* accordion */}
        <div>
          <Accordion title="Description" />
          <Accordion title="Customer reviews" />
        </div>

        {/* related products */}
        <div>
          <h1
            style={{
              fontSize: "2rem",
              display: "flex",
              justifyContent: "center",
              margin: "2rem 0 ",
            }}
          >
            Related Products
          </h1>

          <div>
            {loading ? (
              <h2>Loading...</h2>
            ) : error ? (
              <h2>{error}</h2>
            ) : (
              <div
                className="grid lg:grid-cols-3 gap-5"
                style={{ margin: "2rem 0 " }}
              >
                {products.map((product) => (
                  <ProductCard
                    key={product._id}
                    img={product.image}
                    price={product.price}
                    name={product.name}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
export default ProductDesc;
