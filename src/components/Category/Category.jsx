import React from "react";
import { Link } from "react-router-dom";
import { MdPhoneIphone, MdSportsHandball } from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";
import { TiShoppingCart } from "react-icons/ti";
import { VscPerson } from "react-icons/vsc";
import { FaGraduationCap } from "react-icons/fa";
import { IoGameControllerOutline, IoWomanOutline } from "react-icons/io5";
import { BiHomeAlt } from "react-icons/bi";
import { TbMoodKid } from "react-icons/tb";

import "./Category.scss";

// const categoryData = [{}];

const Category = () => {
  return (
    <div className="cartgos">
      <div className="categories-cont">
        <div className="cart-rwo">
          <Link to="/products/phones" className="tag">
            <MdPhoneIphone />
            <span>Phone</span>
          </Link>
          <Link to="/products" className="tag">
            <TbMoodKid />
            <span>Kids</span>
          </Link>
        </div>
        <div className="cart-rwo">
          <Link to="/products" className="tag">
            <RiComputerLine />
            <span>Computing</span>
          </Link>
          <Link to="/products" className="tag">
            <TiShoppingCart />
            <span>supermarket</span>
          </Link>
        </div>
        <div className="cart-rwo">
          <Link to="/products" className="tag">
            <VscPerson />
            <span>gent</span>
          </Link>
          <Link to="/products" className="tag">
            <BiHomeAlt />
            <span>Home and Office</span>
          </Link>
        </div>
        <div className="cart-rwo">
          <Link to="/products" className="tag">
            <FaGraduationCap />
            <span>education</span>
          </Link>
          <Link to="/products" className="tag">
            <IoGameControllerOutline />
            <span>Gaming</span>
          </Link>
        </div>
        <div className="cart-rwo">
          <Link to="/products" className="tag">
            <IoWomanOutline />
            <span>ladies</span>
          </Link>
          <Link to="/products" className="tag">
            <MdSportsHandball />
            <span>sports</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Category;
