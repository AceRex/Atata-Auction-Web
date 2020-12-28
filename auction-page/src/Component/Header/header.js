import React from "react";
import "./scss/style.css";
import Logo from "./headerLogo.png";
import { BsSearch } from "react-icons/bs";
import HeaderBottom from "./headerBottom";
import moment from "moment";

export default function Header() {
  return (
    <div className="header">
      <div className="header-container">
        <div className="header-logo">
          <img src={Logo} />
        </div>
        <div className="search">
          <div className="search-input">
            <span>
              <BsSearch />
            </span>
            <input type="search" placeholder="Search for Item Here" />
          </div>
          <button className="search-btn">Search</button>
        </div>
        <div className="timer">
          <span className="comment">{moment().format('MMMM Do YYYY, h:mm:ss a')}</span>
        </div>
      </div>
      <HeaderBottom />
    </div>
  );
}
