import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiArrowRightCircle } from "react-icons/fi";
import { TbTruckDelivery } from "react-icons/tb";
import { TiCreditCard } from "react-icons/ti";
import { BiFilterAlt } from "react-icons/bi";
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
  Illustration,
  IllusCard,
  Headset,
  BlackMan,
  Nike,
  Bag,
  Iphone11,
} from "../../assets";

import "./Home.scss";
import {
  ProductCard,
  Carousel,
  CategoryCarousel,
  TopSeller,
} from "../../components";
import "animate.css";

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

  const prod = [
    {
      id: 1,
      name: "Headset MX6",
      price: 6000,
      image: Headset,
    },
    {
      id: 2,
      name: "Iphone 11",
      price: 300000,
      image: Iphone11,
    },
    {
      id: 3,
      name: "Hand bag",
      price: 20000,
      image: Bag,
    },
    {
      id: 4,
      name: "Nike air",
      price: 20000,
      image: Nike,
    },
  ];

  const [prodDataSecond, setProdDataSecond] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (prodDataSecond === prod.length - 1) {
        setProdDataSecond(0);
      } else {
        setProdDataSecond(prodDataSecond + 1);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [prodDataSecond, prod.length]);

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
                <Link to="/register">Register</Link>
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
          <CategoryCarousel />
        </section>

        {/* <!---section for top sales--> */}
        <section className="top-sales">
          <h1 className="header mb-16">Top sale of the month</h1>

          <div className="w-full mb-32 card">
            <div className="top-sales-wright">
              <h1
                className={`top-sales-product-name ${
                  // if prodDataSecond changes, change classname
                  prodDataSecond === 0
                    ? "move-right"
                    : prodDataSecond === 1
                    ? "move-rightt"
                    : prodDataSecond === 2
                    ? "move-right"
                    : prodDataSecond === 3
                    ? "move-rightt"
                    : ""
                }`}
              >
                {prod[prodDataSecond].name}
              </h1>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit
                bibendum justo, consectetur libero consectetur at. Augue mauris
                eu tortor bibendum in nisi, amet nibh.
              </span>
              <h2>&#8358; {prod[prodDataSecond].price}</h2>
              <button className="shop-naww">Shop now</button>
            </div>
            <div className="image">
              <img
                src={prod[prodDataSecond].image}
                alt=""
                className={`${
                  // if prodDataSecond changes, change classname
                  prodDataSecond === 0
                    ? "top-sale-img"
                    : prodDataSecond === 1
                    ? "top-sale-img-2"
                    : prodDataSecond === 2
                    ? "top-sale-img"
                    : prodDataSecond === 3
                    ? "top-sale-img-2"
                    : ""
                }`}
              />
            </div>
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
          <h1 className="header mb-16">Top Deals</h1>
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

        {/* Brands Carousel */}
        <section className="brands mb-32">
          <Carousel />
        </section>

        <section className="seller relative">
          <div className="seller-container">
            <div className="seller-container-text">
              <h1>
                Be our seller today and elevate your business to next level
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
                accumsan in lectus adipiscing. Mollis euismod phasellus aliquam,
                egestas scelerisque. Nulla diam malesuada sapien mattis non
                curabitur.
              </p>
              <a href="/wicart-selsdashbord/Vendor's registration/Admin-details.html">
                <button className="Register">Register</button>
              </a>
            </div>
            <div className="seller-container-image">
              <img src={BlackMan} alt="" className="object-cover" />
            </div>
          </div>
        </section>

        {/* Top Sellers */}
        <section className="top-seller mb-28 flex items-center justify-center relative">
          <TopSeller />
        </section>
      </div>
    </div>
  );
};

export default Home;
