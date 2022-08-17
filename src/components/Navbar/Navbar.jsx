import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { BsBag } from "react-icons/bs";
import { TbBell } from "react-icons/tb";
import { FiSearch } from "react-icons/fi";
import { Logo } from "../../assets";
import { ProfileCard, Category } from "../../components";
import { AiFillCaretDown } from "react-icons/ai";

import "./Navbar.scss";

const Navbar = () => {
  const [profile, setProfile] = useState(false);
  const [category, setCategory] = useState(false);

  const handleProfile = () => {
    setProfile(!profile);
  };

  const pathname = useLocation().pathname;

  return (
    <>
      {pathname !== "/login" && pathname !== "/register" ? (
        <nav className="navbar relative w-full">
          <div className="container-b flex items-center justify-between w-full">
            <div className="logo">
              <img src={Logo} alt="" />
            </div>
            <ul className="flex justify-between">
              <li>
                <Link to="/" className="nav-Link-hover">
                  Home
                </Link>
              </li>
              <li to="/">
                <Link to="/">Brands</Link>
              </li>
              <li className="relative " onMouseEnter={() => setCategory(true)}>
                <button
                  className="flex items-center relative"
                  onClick={() => setCategory(!category)}
                  onMouseEnter={() => setCategory(true)}
                  // onMouseLeave={() => setCategory(false)}
                >
                  <span className="mr-2">Categories</span> <AiFillCaretDown />
                </button>
                {category && (
                  <div className="absolute top-36 -right-80">
                    <Category onMouseEnter={() => setCategory(true)} />
                  </div>
                )}
              </li>
              <li>
                <Link to="/">About</Link>
              </li>
            </ul>
            <div className="search flex justify-between items-center">
              <button className="mr-1">
                <FiSearch />
              </button>
              <input type="text" placeholder="Search" />
            </div>
            <div className="nav-icons">
              <button onClick={handleProfile} className="relative">
                <i className="nav-icon">
                  <CgProfile className="nav-img" />
                </i>
                {profile && (
                  <ProfileCard
                    closeHandler={handleProfile}
                    className={`transition-all ease-in-out duration-500`}
                  />
                )}
              </button>
              <Link to="/">
                <i className="nav-icon">
                  <BsBag className="nav-img" />
                </i>
              </Link>
              <Link to="/">
                <i className="nav-icon">
                  <TbBell className="nav-img" />
                </i>
              </Link>
            </div>
          </div>
        </nav>
      ) : null}
    </>
  );
};

export default Navbar;
