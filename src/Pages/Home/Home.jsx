import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiArrowRightCircle } from "react-icons/fi";
import { TbTruckDelivery } from "react-icons/tb";
import { TiCreditCard } from "react-icons/ti";
import { BiFilterAlt } from "react-icons/bi";
import { Illustration, IllusCard, Headset } from "../../assets";
import { slideData } from "../../data";
import {
  Sneakers,
  Sneakers2,
  Sneakers3,
  Shoe,
  Airpodmax,
  Sound,
  Trouser,
  Wears,
  SweatShirt,
} from "../../assets";

import "./Home.scss";
import { ProductCard, Carousel } from "../../components";

const Home = () => {
  const [popularProductData, setPopularProductData] = useState([
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

  const [topDealsData, setTopDealsData] = useState([
    {
      id: 1,
      name: "lorem ipsum",
      price: 6000,
      rating: 4.5,
      img: Airpodmax,
      favorite: false,
      discount: "45",
    },
    {
      id: 2,
      name: "lorem ipsum",
      price: 6000,
      rating: 4.5,
      img: Shoe,
      favorite: false,
      discount: "45",
    },
    {
      id: 3,
      name: "lorem ipsum",
      price: 6000,
      rating: 4.5,
      img: Sound,
      favorite: false,
      discount: "45",
    },
    {
      id: 4,
      name: "lorem ipsum",
      price: 6000,
      rating: 4.5,
      img: Trouser,
      favorite: false,
      discount: "45",
    },
    {
      id: 5,
      name: "lorem ipsum",
      price: 6000,
      rating: 4.5,
      img: Wears,
      favorite: false,
      discount: "45",
    },
    {
      id: 6,
      name: "lorem ipsum",
      price: 6000,
      rating: 4.5,
      img: SweatShirt,
      favorite: false,
      discount: "45",
    },
  ]);

  const handleFavorite = (id) => {
    const newData = popularProductData.map((item) => {
      if (item.id === id) {
        item.favorite = !item.favorite;
      } else {
        // item.favorite = false;
      }
      return item;
    });
    setPopularProductData(newData);

    // setFavorite(!favorite);
  };

  const handleFavoriteDeals = (id) => {
    const newData = topDealsData.map((item) => {
      if (item.id === id) {
        item.favorite = !item.favorite;
      } else {
        // item.favorite = false;
      }
      return item;
    });
    setTopDealsData(newData);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="container-b">
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
        <section className="top-sales">
          <h1 className="header">Top sale of the month</h1>

          <div className="w-full mb-32 card">
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
          </div>
        </section>

        <section className="popular">
          <h1 className="header mb-16">Popular</h1>
          <div className="pop">
            {popularProductData.map((product, index) => (
              <ProductCard
                key={index}
                onClick={() => handleFavorite(product.id)}
                {...product}
              />
            ))}
          </div>
        </section>

        {/* <!--section top deals--> */}
        <section className="top">
          <h1 class="header mb-16">Top Deals</h1>
          <div className="w-full flex items-end links">
            <Link to="/" className="text-right w-full">
              See all
            </Link>
          </div>
          <div className="prod w-full mt-12">
            {topDealsData.map((product, index) => (
              <ProductCard
                key={index}
                onClick={() => handleFavoriteDeals(product.id)}
                {...product}
              />
            ))}
          </div>
        </section>
        {/* top deals section ends here */}

        {/* Nee product section starts here */}
        <section className="top">
          <h1 className="header mb-16">New Products</h1>
          <div className="w-full flex justify-between links">
            <div className="flex items-center">
              Filter
              <BiFilterAlt />
            </div>
            <Link to="/" className="text-right w-full">
              See all
            </Link>
          </div>
          <div className="prod w-full mt-12">
            {topDealsData.map((product, index) => (
              <ProductCard
                key={index}
                onClick={() => handleFavoriteDeals(product.id)}
                {...product}
              />
            ))}
          </div>
        </section>

        <section className="brands">
          <Carousel />
        </section>
      </div>
    </div>
  );
};

export default Home;
