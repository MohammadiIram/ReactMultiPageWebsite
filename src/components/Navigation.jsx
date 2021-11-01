import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="navigation">
      <nav class="navbar navbar-expand navbar-dark bg-dark">
        <div class="container">
          <Link class="navbar-brand" to="/">
          <img src="https://codeforcause.org/static/logo/logo.svg"></img>
          </Link>
          <img src ="https://codeforcause.org/static/home/codeforcause.svg"></img>
          <div>
            <ul class="navbar-nav ml-auto">
            <li
                class={`nav-item  ${
                  props.location.pathname === "/SpecialOffers" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/SpecialOffers">
                  SpecialOffers       
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/CampusLeader" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/CampusLeader">
                  CampusLeader
                  <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/Events" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/Events">
                  Events       
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/Courses" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/Courses">
                  Courses
                </Link>
              </li>
              <li
              
                class={`nav-item  ${
                  props.location.pathname === "/Login" ? "active" : ""
                }`}
              >
                <Link class ="nav-link" to="/Login">
                  Login
                </Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}


export default withRouter(Navigation);
