import { useState } from "react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { BsBag } from "react-icons/bs";
import { TbBell } from "react-icons/tb";
import { FiSearch } from "react-icons/fi";
import { Logo } from "../../assets";
import { ProfileCard } from "../../components";

import "./Navbar.scss";

const Navbar = () => {
  const [profile, setProfile] = useState(false);

  const handleProfile = () => {
    setProfile(!profile);
  };

  return (
    <nav className="navbar relative w-full">
      <div className="container-b flex items-center justify-between w-full">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <ul>
          <Link to="/">
            <li className="nav-link-hover">Home</li>
          </Link>
          <Link to="/">
            <li>Brands</li>
          </Link>
          <Link to="/">
            <li>
              Categories <img src="png/open.png" alt="" />
            </li>
          </Link>
          <Link to="/">
            <li>About</li>
          </Link>
        </ul>
        <div className="search flex justify-between items-center">
          <button className="mr-1">
            <FiSearch />
          </button>
          <input type="text" placeholder="Search" />
        </div>
        <div className="nav-icons">
          <button onClick={handleProfile}>
            <i className="nav-icon">
              <CgProfile className="nav-img" />
            </i>
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
        {profile && (
          <ProfileCard
            closeHandler={handleProfile}
            className={`transition-all ease-in-out duration-500`}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
