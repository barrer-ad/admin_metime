import React from "react";
import "../Dashbord/Navbar.css";
import Users from "../Users/Users";

export default function Navbar() {
  return (
    <div>
      <div className="dashboard">
        <div className="dashboard-nav">
          <header>
            <a href="#" className="brand-logo">
              <span>
                <img src="../img/me time logo-05 1 (1).png" alt="" />
              </span>
            </a>
          </header>
          <nav className="dashboard-nav-list">
            <a href="#" className="dashboard-nav-item">
              <img
                className="m-1"
                src="../img/icons8-home-24.png"
                width="20"
                height="20"
              />
              Home
            </a>
            <a href="#" className="dashboard-nav-item active">
              <img
                className="m-1"
                src="../img/icons8-dashboard-48.png"
                width="20"
                height="20"
              />
              dashboard
            </a>
            <a href="#" className="dashboard-nav-item">
              <img
                className="m-1"
                src="../img/icons8-upload-48.png"
                width="20"
                height="20"
              />
              Upload
            </a>
            <div className="dashboard-nav-dropdown">
              <a
                href="#!"
                className="dashboard-nav-item dashboard-nav-dropdown-toggle"
              >
                <img
                  className="m-1"
                  src="../img/icons8-users-99.png"
                  width="20"
                  height="20"
                />
                Users
              </a>
            </div>
            <div className="dashboard-nav-dropdown">
              <a
                href="#!"
                className="dashboard-nav-item dashboard-nav-dropdown-toggle"
              >
                <img
                  className="m-1"
                  src="../img/icons8-card-payment-50.png"
                  width="20"
                  height="20"
                />
                Payments
              </a>
            </div>
            <a href="#" className="dashboard-nav-item">
              <img
                className="m-1"
                src="../img/icons8-setting-48.png"
                width="20"
                height="20"
              />
              Settings
            </a>
            <a href="#" className="dashboard-nav-item">
              <img
                className="m-1"
                src="../img/icons8-admin-settings-male-50.png"
                width="20"
                height="20"
              />
              Profile Admins
            </a>
            <div className="nav-item-divider"></div>
            <a href="#" className="dashboard-nav-item">
              <img
                className="m-1"
                src="../img/icons8-logout-48.png"
                width="20"
                height="20"
              />
              Logout
            </a>
          </nav>
        </div>
        <div className="dashboard-app">
          <div className="dashboard-content">
            <div className="container">
              <div className="card">
                <div className="card-header">
                  <h1>Welcome Admin</h1>
                </div>
                <div className="card-body">
                  <Users />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
