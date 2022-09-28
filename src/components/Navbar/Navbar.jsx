import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { BsBag } from "react-icons/bs";
import { TbBell } from "react-icons/tb";
import { FiSearch, FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { Logo } from "../../assets";
import { ProfileCard, Category, Side, IconContainer } from "../../components";
import { AiFillCaretDown, AiOutlineMenu } from "react-icons/ai";
import { useVisibility } from "../../hooks/useVisibility";

import "./Navbar.scss";

const Navbar = () => {
  const [profile, setProfile] = useState(false);
  const [category, setCategory] = useState(false);
  const { isVisible, toggle } = useVisibility();

  const handleProfile = () => {
    setProfile(!profile);
  };

  const pathname = useLocation().pathname;

  return (
    <>
      <Side isVisible={isVisible} toggle={toggle} />
      {isVisible && <div className="sidebar-overlay"></div>}
      {pathname !== "/login" && pathname !== "/register" ? (
        <div className="sticky top-0 z-50">
          <nav className="navbar w-full sticky">
            <div className="con flex items-center justify-between w-full">
              <div className="flex items-center">
                <IconContainer
                  className="md:hidden h-8 w-8 mr-3  icon"
                  onClick={() => {
                    toggle();
                  }}
                  aria-controls="normal-sidebar"
                  aria-expanded={isVisible}
                >
                  {isVisible ? <IoMdClose /> : <AiOutlineMenu />}
                </IconContainer>

                <div className="logo-wrapper">
                  <Link to="/">
                    <img src={Logo} alt="" />
                  </Link>
                </div>
              </div>
              <ul className="md:flex hidden justify-between">
                <li>
                  <Link to="/" className="nav-Link-hover">
                    Home
                  </Link>
                </li>
                <li to="/">
                  <Link to="/">Brands</Link>
                </li>
                <li
                  className="relative "
                  onMouseEnter={() => setCategory(true)}
                >
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
                      <Category
                        onMouseEnter={() => setCategory(true)}
                        category={true}
                      />
                    </div>
                  )}
                </li>
                <li>
                  <Link to="/">About</Link>
                </li>
              </ul>
              <div className="search hidden md:flex justify-between items-center">
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
                <Link to="/" className="hidden md:block">
                  <i className="nav-icon">
                    <TbBell className="nav-img" />
                  </i>
                </Link>
              </div>
            </div>
          </nav>
        </div>
      ) : null}
    </>
  );
};

export default Navbar;
