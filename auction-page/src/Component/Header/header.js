import React from "react";
import "./scss/style.css";
import Logo from "./headerLogo.png";
import { BsSearch } from "react-icons/bs";
import Moment from "react-moment";

export default function Header() {
  return (
    <div className="header">
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
        <Moment interval={30000}>1976-04-19T12:59-0500</Moment>
      </div>
    </div>
  );
}
