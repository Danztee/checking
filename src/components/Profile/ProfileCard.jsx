import React from "react";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { GiBackwardTime } from "react-icons/gi";
import { FiSettings, FiCamera } from "react-icons/fi";
import { HiOutlineLogout } from "react-icons/hi";
import { MdKeyboardArrowUp } from "react-icons/md";
import "animate.css";

import "./profile.scss";

const ProfileCard = ({ closeHandler, className }) => {
  return (
    <div
      className={`${className} animate__animated animate__fadeIn profile-card absolute top-8 -right-10`}
    >
      <div className="profile-card-info flex justify-between">
        <div className="flex">
          <div className="profile-card-info-img w-12 h-12 mr-3 relative">
            <img
              src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
              alt=""
              className="w-full h-full"
            />
            <div className="profile-card-info-img-upload absolute bottom-0 right-0">
              <input type="file" id="profilePhotoInput" name="photo" />
              <label htmlFor="profilePhotoInput" className="">
                <FiCamera />
              </label>
            </div>
          </div>
          <div className="profile-card-info-name">
            <h1>John Doe</h1>
            <h2>5376 sales</h2>
          </div>
        </div>
        <button onClick={closeHandler}>
          <MdKeyboardArrowUp />
        </button>
      </div>
      <div className="profile-card-line mt-4"></div>
      <div className="profile-card-menu">
        <div className="profile-card-menu-item">
          <Link to="/">
            <FaRegUser className="profile-card-menu-icon" />
            <span className="profile-card-menu-text">Profile</span>
          </Link>
        </div>
        <div className="profile-card-menu-item">
          <Link to="/">
            <MdFavoriteBorder className="profile-card-menu-icon" />
            <span className="profile-card-menu-text">Favorites</span>
          </Link>
        </div>
        <div className="profile-card-menu-item">
          <Link to="/">
            <GiBackwardTime className="profile-card-menu-icon" />
            <span className="profile-card-menu-text">History</span>
          </Link>
        </div>
        <div className="profile-card-menu-item">
          <Link to="/">
            <FiSettings className="profile-card-menu-icon" />
            <span className="profile-card-menu-text">Settings</span>
          </Link>
        </div>
      </div>
      <div className="profile-card-logout mt-4">
        <Link to="/">
          <HiOutlineLogout className="profile-card-logout-icon" />
          <span className="profile-card-logout-text">Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default ProfileCard;
