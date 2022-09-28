import React from "react";
import { Logo } from "../../assets";
import { useVisibility } from "../../hooks/useVisibility";
import { IconContainer } from "../../components";
import { IoMdClose } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";
import "./Sidebar.scss";
import { TbMessageCircle } from "react-icons/tb";
import { Link } from "react-router-dom";
import { navLinkData } from "../../data";
import { CustomLink } from "../../components";

const Sidebar = ({ isVisible, toggle }) => {
  // const { isVisible, toggle } = useVisibility();

  return (
    <>
      <section
        className={`sidebar flex absolute ${isVisible ? "left-40" : ""}`}
      >
        <div
          className={`sidebar-container ${
            isVisible ? ` animate__slideInLeft` : `animate__slideOutLeft`
          } animate__animated absolute`}
        >
          <div className="sidebar-header flex justify-between w-full">
            <div className="logo-wrapper">
              <img src={Logo} alt="" />
            </div>
            <div className="flex items-center">
              <IconContainer
                className="md:hidden h-8 w-8 icon"
                onClick={() => {
                  toggle();
                }}
                aria-controls="normal-sidebar"
                aria-expanded={isVisible}
              >
                {isVisible ? <IoMdClose /> : <AiOutlineMenu />}
              </IconContainer>
            </div>
          </div>
          <div className="sidebar-body px-4.5">
            <div className="message-container flex items-center pb-2.5">
              <IconContainer>
                <TbMessageCircle />
              </IconContainer>
              <Link to="/messages" className="nav-link ml-2">
                Live Messages
              </Link>
            </div>
            <div className="flex items-center py-4 nav-link">
              <Link to="/">Home</Link>
            </div>
            <div className="flex items-center justify-between pb-4 nav-link">
              <Link to="">Notifications</Link>
              <div className="notification">10</div>
            </div>
            <div className="flex items-center pb-4 nav-link">
              <Link to="">Categories</Link>
            </div>
            <div className="flex flex-col items-start pb-4 mt-2">
              {navLinkData.map((item, index) => {
                return (
                  <div className="flex items-center pb-4 cat-link" key={index}>
                    <IconContainer className="mr-3">
                      <item.icon />
                    </IconContainer>
                    <CustomLink to={item.link}>{item.name}</CustomLink>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sidebar;
