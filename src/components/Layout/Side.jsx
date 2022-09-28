import { Logo } from "../../assets";
import { useVisibility } from "../../hooks/useVisibility";
import { IconContainer, CustomNavLink } from "../../components";
import { IoMdClose } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";
import "./Side.scss";
import { TbMessageCircle } from "react-icons/tb";
import { Link } from "react-router-dom";
import { navLinkData } from "../../data";
import { CustomLink } from "../../components";

const Side = (isVisible, toggle) => {
  const visible = isVisible.isVisible;
  const mode = isVisible.toggle;

  return (
    <>
      {visible && <div className="sidebar-overlay"></div>}
      <section className={`menu-p ${visible ? "close" : "open"}`}>
        <div className="sidebar-header flex justify-between w-full">
          <div className="logo-wrapper">
            <img src={Logo} alt="" />
          </div>
          <div className="flex items-center">
            <IconContainer
              className="md:hidden h-8 w-8 icon text-neutral-900"
              onClick={() => {
                mode();
              }}
            >
              <IoMdClose />
            </IconContainer>
          </div>
        </div>
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
        <ul className={`flex justify-between`}>
          {navLinkData.map((nav, index) => {
            const { name, link } = nav;

            return (
              <li key={index} className="flex items-center">
                <IconContainer className="icon">
                  <nav.icon />
                </IconContainer>
                <CustomNavLink href={link}>
                  <span className="title">{name}</span>
                </CustomNavLink>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default Side;
