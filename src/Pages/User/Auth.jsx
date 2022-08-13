// import { useEffect } from "react";
import { Logo, AuthHero } from "../../assets";
import { Link, useLocation } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import "animate.css";

const bgSignUp = {
  width: "119.52px",
  height: "38.29px",
  backgroundColor: "#3f51dc",
  borderRadius: "43px",
  right: "3px",
  // transition: "all 0.3s ease-in-out",
};

const bgSignIn = {
  width: "119.52px",
  height: "38.29px",
  backgroundColor: "#3f51dc",
  borderRadius: "43px",
  left: "3px",
  // transition: "all 0.3s ease-in-out",
};

const FormContainer = () => {
  const pathName = useLocation().pathname;
  console.log(pathName);

  return (
    <div className="form-container">
      <div className="form-container__nav flex px-8 justify-between relative">
        <div
          className={`absolute bg-btn ${
            pathName === "/register"
              ? "animate__animated animate__fadeInLeft"
              : ""
          }`}
          style={pathName === "/register" ? bgSignUp : null}
        ></div>
        <div
          className={`absolute bg-btn ${
            pathName === "/login"
              ? "animate__animated animate__fadeInRight"
              : ""
          }`}
          style={pathName === "/login" ? bgSignIn : null}
        ></div>
        <div
          className={`form-container__nav-item z-50 ${
            pathName === "/login" ? "text-white" : ""
          }`}
        >
          <Link to="/login">Sign In</Link>
        </div>
        <div
          className={`form-container__nav-item z-50 ${
            pathName === "/register" ? "text-white" : ""
          }`}
        >
          <Link to="/register">Sign Up</Link>
        </div>
      </div>
      {pathName === "/register" && (
        <>
          <div className="form-container__form">
            <div className="form-container__form-header mb-14">
              <p>There are great offers waiting for you!!</p>
            </div>
            <div className="form-container__form-body">
              <div className="form-container__form-body-item mb-7">
                <input type="text" placeholder="Fullname" />
              </div>
              <div className="form-container__form-body-item mb-7">
                <input type="text" placeholder="Email" />
              </div>
              <div className="form-container__form-body-item mb-7">
                <input type="password" placeholder="Password" />
              </div>
              <div className="form-container__form-body-item">
                <button className="sign">Register Account</button>
              </div>
              <div className="line relative my-7">
                <div className="line-item absolute">or</div>
              </div>
              <div className="form-container__form-body-item">
                <button className="google flex items-center text-center justify-center gap-3">
                  <FcGoogle />
                  Register with Google
                </button>
              </div>
            </div>
          </div>
        </>
      )}
      {pathName === "/login" && (
        <>
          <div className="form-container__form">
            <div className="form-container__form-header mb-14">
              <h1>Welcome back!</h1>
              <p>There are great offers waiting for you!!</p>
            </div>
            <div className="form-container__form-body">
              <div className="form-container__form-body-item mb-7">
                <input type="text" placeholder="Email" />
              </div>
              <div className="form-container__form-body-item mb-14">
                <input type="password" placeholder="Password" />
              </div>
              <div className="form-container__form-body-item">
                <button className="sign">Sign In</button>
              </div>
              <div className="line relative my-7">
                <div className="line-item absolute">or</div>
              </div>
              <div className="form-container__form-body-item flex">
                <button className="google flex items-center text-center justify-center gap-3">
                  <FcGoogle />
                  Google
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const Auth = () => {
  // let number = document.getElementById("number");
  // let counter = 0;

  // useEffect(() => {
  //   setInterval(() => {
  //     if (counter === 65) {
  //       clearInterval();
  //     } else {
  //       counter += 1;
  //       number.innerHTML = counter + "%";
  //     }
  //   }, 22);
  // }, []);

  return (
    <div className="auth">
      <div className="container-b">
        <div className="flex">
          <div className="text-bg">
            <div className="logo mb-8">
              <img src={Logo} alt="" />
            </div>
            <div className="text relative">
              <h1 className="capitalize z-50">
                for the <br /> <span>ecommerce</span> you <br /> don't know yet.
              </h1>
              <div className="circle absolute z-10"></div>
            </div>
            <div className="hero-img">
              <img src={AuthHero} alt="" />
              <div className="all">
                <div className="skill">
                  <div className="outer">
                    <div className="inner">
                      <div id="number">65%</div>
                      <div
                        className="bonus"
                        style={{
                          color: "#fff",
                          position: "absolute",
                          left: "20px",
                          fontSize: "13px",
                        }}
                      >
                        <h4
                          style={{ textAlign: "center", marginBottom: "0" }}
                          className="capitalize"
                        >
                          bonus package for new users
                        </h4>
                      </div>
                    </div>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    width="160px"
                    height="160px"
                  >
                    <defs>
                      <linearGradient id="GradientColor">
                        <stop offset="0%" stopColor="blue" />
                        <stop offset="100%" stopColor="blue" />
                      </linearGradient>
                    </defs>
                    <circle cx="80" cy="80" r="70" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="form">
            <FormContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
