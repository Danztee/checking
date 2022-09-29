import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { GiBackwardTime } from "react-icons/gi";
import { FiSettings, FiCamera } from "react-icons/fi";
import { HiOutlineLogout } from "react-icons/hi";
import { MdKeyboardArrowUp } from "react-icons/md";
import { AiOutlineShop } from "react-icons/ai";
import { getUserProfileFromLocalStorage } from "../../actions/userAction";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Profile = () => {
  const dispatch = useDispatch();

  const userProfileFromLocalStorage = useSelector(
    (state) => state.userProfileFromLocalStorage
  );
  const { loading, error, user } = userProfileFromLocalStorage;

  useEffect(() => {
    dispatch(getUserProfileFromLocalStorage());
  }, [dispatch]);

  console.log(user);

  return (
    <div>
      <div
        className="mt-8 px-7 py-3 profile-card-info flex justify-between"
        style={{ backgroundColor: "#F0F3FF" }}
      >
        <div className="flex">
          <div className="profile-card-info-img w-16 h-16 mr-3 relative">
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
          <div className="mt-1.5 profile-card-info-name">
            <h1>{user?.name}</h1>
            <h2>
              {user?.email} <span className="text-gray-400">Verified</span>
            </h2>
          </div>
        </div>
        <Link to="/" className="mt-8 underline text-blue-600">
          Edit
        </Link>
      </div>
      <div className="px-6 py-8 profile-card-menu">
        <div className="profile-card-menu-item">
          <Link to="/">
            <MdFavoriteBorder className="profile-card-menu-icon" />
            <span className="profile-card-menu-text" style={{ color: "#000" }}>
              Favorites
            </span>
          </Link>
        </div>
        <div className="profile-card-menu-item">
          <Link to="/">
            <AiOutlineShop className="profile-card-menu-icon" />
            <span className="profile-card-menu-text" style={{ color: "#000" }}>
              Notifications
            </span>
          </Link>
        </div>
        <div className="profile-card-menu-item">
          <Link to="/">
            <GiBackwardTime className="profile-card-menu-icon" />
            <span className="profile-card-menu-text" style={{ color: "#000" }}>
              History
            </span>
          </Link>
        </div>
        <div className="profile-card-menu-item">
          <Link to="/">
            <FiSettings className="profile-card-menu-icon" />
            <span className="profile-card-menu-text" style={{ color: "#000" }}>
              Settings
            </span>
          </Link>
        </div>
        <div className="profile-card-menu-list">
          <ul className="profile-card-menu-list-item list-disc pl-12">
            <li className="profile-card-menu-list-item-link">
              <Link to="/">Address Book</Link>
            </li>
            <li className="profile-card-menu-list-item-link">
              <Link to="/">Change Password</Link>
            </li>
            <li className="profile-card-menu-list-item-link">
              <Link to="/">Delete Account</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-6 profile-card-line-2 mt-4"></div>
      <div className="px-6 profile-card-logout-2 flex mb-48">
        <Link to="/" className="flex">
          <HiOutlineLogout className="profile-card-logout-icon" />
          <span className="profile-card-logout-text">Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default Profile;
