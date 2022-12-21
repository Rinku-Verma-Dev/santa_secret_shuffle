import React from "react";
import "./style.css";

export const Navbar = ({ handelClick }) => {
  return (
    <div className="nav_bar">
      <button className="shuffelBtn" onClick={handelClick}>
        Shuffle
      </button>
    </div>
  );
};
