import { useEffect, useState } from "react";
import { Logo, AuthHero } from "../../assets";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { register, login } from "../../actions/userAction";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { useDispatch, useSelector } from "react-redux";
import "animate.css";

const FormContainer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const pathName = useLocation().pathname;

  const userLogin = useSelector((state) => state.userLogin);
  const {
    loading: loadingLogin,
    error: errorLogin,
    userInfo: userInfoLogin,
  } = userLogin;

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  const redirect = window.location.search
    ? window.location.search.split("=")[1]
    : "/";

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [userInfo, navigate, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (name && email && password) {
      dispatch(register(name, email, password));
    }
  };

  const loginHandler = (e) => {
    e.preventDefault();

    if (email && password) {
      dispatch(login(email, password));
    }
  };

  return (
    <div className="form-container">
      <div className="form-container__nav">
        <div
          className={`${
            pathName === "/login" ? "active" : ""
          } flex justify-between relative py-2.5 px-6`}
        >
          <div className="bg-blue absolute"></div>
          <Link to="/register" className="z-50">
            <div
              className={`sign-up ${
                pathName === "/register" ? "text-white" : ""
              }`}
            >
              <p>Sign Up</p>
            </div>
          </Link>
          <Link to="/login" className="z-50">
            <div className="sign-in" style={{}}>
              <p>Sign In</p>
            </div>
          </Link>
        </div>
      </div>
      {pathName === "/register" && (
        <>
          <div className="form-container__form">
            <div className="form-container__form-header mb-14">
              <p>There are great offers waiting for you!!</p>
            </div>
            <div className="form-container__form-body">
              <form onSubmit={submitHandler}>
                <div className="form-container__form-body-item mb-7">
                  <input
                    type="text"
                    placeholder="Fullname"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-container__form-body-item mb-7">
                  <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-container__form-body-item mb-7">
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="form-container__form-body-item">
                  <button className="sign">Register Account</button>
                </div>
              </form>
              <div className="line relative my-7">
                <div className="line-item absolute">or</div>
              </div>
              <div className="form-container__form-body-item">
                <button className="google flex items-center text-center justify-center gap-3">
                  <FcGoogle />
                  Google
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
              <form onSubmit={loginHandler}>
                <div className="form-container__form-body-item mb-7">
                  <input type="text" placeholder="Email" />
                </div>
                <div className="form-container__form-body-item mb-14">
                  <input type="password" placeholder="Password" />
                </div>
                <div className="form-container__form-body-item">
                  <button className="sign">Sign In</button>
                </div>
              </form>
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
  return (
    <div className="auth">
      <div className="container-b">
        <div className="flex">
          <div className="text-bg hidden lg:block">
            <div className="logo mb-8">
              <img src={Logo} alt="" />
            </div>
            <div className="text relative">
              <h1 className="capitalize z-50">
                for the <br /> <span>ecommerce</span> you <br /> don't know yet.
              </h1>
              <div className="circle fixed"></div>
            </div>
            <div className="hero-img relative">
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
          <div className="form flex justify-center">
            <FormContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
