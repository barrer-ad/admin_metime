import React from "react";
import "../Login/Login.css";

export default function Login() {
  return (
    <div className="container mt-5 mb-5">
      <div className="d-flex flex row g-0">
        <div className="col-md-6 mt-3">
          <div className="card card1 p-3">
            <div className="d-flex flex-column login">
              <img src="./img/Group 11940 1.png" height="44" width="139" />
              <span className="mt-3">Log in</span>
            </div>
            <div className="input-field d-flex flex-column mt-3">
              <span>Email</span>
              <input className="form-control" placeholder="email@example.com" />
              <span className="mt-3">Password</span>
              <input
                className="form-control"
                placeholder="Enter Your Password"
              />
              <button className="mt-4 d-flex justify-content-center align-items-center btn-log">
                Login
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6 mt-3">
          <div className="card2 d-none d-lg-block d-sm-none">
            <div className="image">
              <img src="../img/unsplash_3nBzt3Jdeh4.png" className="w-100" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
