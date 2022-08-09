import { useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowRightCircle } from "react-icons/fi";
import { TbTruckDelivery } from "react-icons/tb";
import { TiCreditCard } from "react-icons/ti";
import { Illustration, IllusCard, Headset } from "../../assets";
import { slideData } from "../../data";
import { Sneakers, Sneakers2, Sneakers3 } from "../../assets";

import "./Home.scss";
import { ProductCard } from "../../components";

const Home = () => {
  const [productData, setProductData] = useState([
    {
      id: 1,
      name: "lorem ipsum",
      price: 6000,
      rating: 4.5,
      img: Sneakers,
      favorite: false,
    },
    {
      id: 2,
      name: "lorem ipsum",
      price: 6000,
      rating: 4.5,
      img: Sneakers2,
      favorite: false,
    },
    {
      id: 3,
      name: "lorem ipsum",
      price: 6000,
      rating: 4.5,
      img: Sneakers3,
      favorite: false,
    },
  ]);
  const [favorite, setFavorite] = useState(false);

  const handleFavorite = (id) => {
    const newData = productData.map((item) => {
      if (item.id === id) {
        item.favorite = !item.favorite;
      } else {
        // item.favorite = false;
      }
      return item;
    });
    setProductData(newData);

    // setFavorite(!favorite);
  };
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="container r">
        <header>
          <div className="header-desc">
            <h1>
              Connecting local <span>customers</span> with local
              <span>business</span>
            </h1>
            <br />
            <p className="p">Get 65% off as a new customer</p>
            <div className="cta12">
              <button className="exp">
                Explore <FiArrowRightCircle />
              </button>
              <button className="reg">
                <Link to="/">Register</Link>
              </button>
            </div>
          </div>
          <div className="header-ill">
            <div className="scall-top">
              <div className="header-icon">85%</div>
              <span>
                <h1>Buenos for new users</h1>
                <h2>Lorem Ipsum dolor sit ament,</h2>
              </span>
            </div>

            <img className="smiling-man" src={Illustration} alt="" />
            <div className="scall-botm">
              <div className="header-icon">
                <img src={IllusCard} alt="" />
              </div>
              <span>
                <h1>Buenos for new users</h1>
                <h2>Lorem Ipsum dolor sit ament,</h2>
              </span>
            </div>
          </div>
        </header>

        <section className="structure">
          <div className="structure-cont">
            <div className="structure-cont-top">
              <TbTruckDelivery />
            </div>
            <div className="structure-cont-right">
              <h1>Free delivery</h1>
              <h2>
                For new users and all orders over <span>&#8358; 6,000</span>
              </h2>
            </div>
          </div>

          <div className="structure-cont">
            <div className="structure-cont-top">
              <TiCreditCard />
            </div>
            <div className="structure-cont-right">
              <h1>Quick payment</h1>
              <h2>Lorem ipsum dolor sit amet, consectetur </h2>
            </div>
          </div>

          <div className="structure-cont">
            <div className="structure-cont-top">
              <TiCreditCard />
            </div>
            <div className="structure-cont-right">
              <h1>24/7 Support</h1>
              <h2>Lorem ipsum dolor sit amet, consectetur </h2>
            </div>
          </div>
        </section>

        <section className="slide">
          <img src="images/arow-right.png" alt="" className="moveleft" />
          <div className="product">
            <div className="product-slide flex justify-between">
              {slideData.map((slide, index) => (
                <div key={index} className="product-slide-cont relative">
                  <Link to="/">
                    <img src={slide.img} alt="" className="img top-slide" />
                  </Link>
                  {/* //slide up category name and overlay */}
                  <div className="overlay text-center absolute h-full ">
                    <h1>{slide.category}</h1>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <img src="images/aro-left.png" alt="" className="moveright" />
        </section>

        {/* <!---section for top sales--> */}
        <h1 className="heardeing">Top sale of the month</h1>
        <div className="w-full mb-32">
          <section className="top-sales">
            <div className="top-sales-wright">
              <h1 className="top-sales-product-name">Headset MX6</h1>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit
                bibendum justo, consectetur libero consectetur at. Augue mauris
                eu tortor bibendum in nisi, amet nibh.
              </span>
              <h2>&#8358; 6,000</h2>
              <button className="shop-naww">Shop now</button>
            </div>
            <img src={Headset} alt="" />
          </section>

          <h1 className="heardeing">Popular</h1>
          <section className="img-display">
            <div className="row">
              {productData.map((product, index) => (
                <ProductCard
                  key={index}
                  onClick={() => handleFavorite(product.id)}
                  {...product}
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
