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
          <Link to="/">
            <label htmlFor="" className="label">
              <MdPhoneIphone />
              <span>Phone</span>
            </label>
          </Link>
          <Link to="/">
            <label htmlFor="">
              <TbMoodKid />
              <span>Kids</span>
            </label>
          </Link>
        </div>
        <div className="cart-rwo">
          <Link to="/">
            <label htmlFor="">
              <RiComputerLine />
              <span>Computing</span>
            </label>
          </Link>
          <Link to="/">
            <label htmlFor="">
              <TiShoppingCart />
              <span>supermarket</span>
            </label>
          </Link>
        </div>
        <div className="cart-rwo">
          <Link to="/">
            <label htmlFor="">
              <VscPerson />
              <span>gent</span>
            </label>
          </Link>
          <Link to="/">
            <label htmlFor="">
              <BiHomeAlt />
              <span>Home and Office</span>
            </label>
          </Link>
        </div>
        <div className="cart-rwo">
          <Link to="/">
            <label htmlFor="">
              <FaGraduationCap />
              <span>education</span>
            </label>
          </Link>
          <Link to="/">
            <label htmlFor="">
              <IoGameControllerOutline />
              <span>Gaming</span>
            </label>
          </Link>
        </div>
        <div className="cart-rwo">
          <Link to="/">
            <label htmlFor="">
              <IoWomanOutline />
              <span>ladies</span>
            </label>
          </Link>
          <Link to="/">
            <label htmlFor="">
              <MdSportsHandball />
              <span>sports</span>
            </label>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Category;
