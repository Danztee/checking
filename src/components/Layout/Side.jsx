import { Logo } from "../../assets";
import { useWindowSize } from "../../hooks";
import { IconContainer, CustomNavLink } from "../../components";
import { IoMdClose } from "react-icons/io";
import "./Side.scss";
import { TbMessageCircle } from "react-icons/tb";
import { Link } from "react-router-dom";
import { navLinkData } from "../../data";

const Side = (isVisible, toggle) => {
  const visible = isVisible.isVisible;
  const mode = isVisible.toggle;
  const { width } = useWindowSize();

  return (
    <>
      {visible && width < 768 ? (
        <div
          className="sidebar-overlay "
          onClick={() => {
            mode();
          }}
        />
      ) : null}
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
          <Link
            to="/messages"
            className="nav-link ml-2"
            onClick={() => {
              mode();
            }}
          >
            Live Messages
          </Link>
        </div>
        <div className="flex items-center py-4 nav-link">
          <Link
            to="/"
            onClick={() => {
              mode();
            }}
          >
            Home
          </Link>
        </div>
        <div className="flex items-center justify-between pb-4 nav-link">
          <Link
            to=""
            onClick={() => {
              mode();
            }}
          >
            Notifications
          </Link>
          <div className="notification">10</div>
        </div>
        <div className="flex items-center pb-4 nav-link">
          <Link
            to=""
            onClick={() => {
              mode();
            }}
          >
            Categories
          </Link>
        </div>
        <ul className={`flex justify-between`}>
          {navLinkData.map((nav, index) => {
            const { name, link } = nav;

            return (
              <li key={index} className="flex items-center">
                <IconContainer className="icon">
                  <nav.icon />
                </IconContainer>
                <CustomNavLink href={link} onClick={() => mode()}>
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
