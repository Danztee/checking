import React from "react";
import { Logo } from "../../assets";
import { Link, link } from "react-router-dom";

import "./auth.scss";

const SignIn = () => {
  const login = (e) => {
    e.preventDefault();
  };

  const register = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <div className="logo">
        <img src={Logo} alt="" />
        <h1
          style={{
            marginLeft: "40px",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "30px",
            lineHeight: "54px",
          }}
        >
          For The <br />
          <span style={{ color: "blue", fontFamily: "Poppins" }}>
            Ecommerce
          </span>{" "}
          You
          <br />
          Don't Know yet.
        </h1>
      </div>
      <div className="header">
        <div class="crlcl">
          <div class="circle">
            <div class="inner-circle">
              <div class="back-img"></div>
            </div>
          </div>
        </div>
        <div class="loginpage">
          <div class="button-box">
            <div id="btn"></div>
            <button type="button" class="toggle-btn bnt" onclick={login}>
              <span style={{ fontSize: " 16px", color: "#fff" }}>
                <Link
                  to="/"
                  style={{
                    textDecoration: "none",
                    color: "rgb(255, 255, 255)",
                    fontFamily: "Poppins",
                  }}
                >
                  Signin
                </Link>
              </span>
            </button>
            <button type="button" class="toggle-btn bnt" onclick={register}>
              <span style={{ fontWeight: "10" }}>
                <Link
                  to="signup.html"
                  style={{
                    textDecoration: "none",
                    color: "rgb(177, 68, 68)167, 57, 57",
                    fontFamily: "Poppins",
                  }}
                >
                  Signup
                </Link>
              </span>
            </button>
          </div>
          <div class="wlcm">
            <h1>Welcome back</h1>
            <p>There are great offers waiting for you.</p>
            <form action="#" id="login">
              <div class="field">
                <div class="field input-field">
                  <input
                    type="email"
                    placeholder="Enter your Email here"
                    class="input"
                  />
                </div>

                <div class="field input-field" style={{ marginTop: "50px" }}>
                  <input
                    type="password"
                    placeholder="Password"
                    class="password"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
