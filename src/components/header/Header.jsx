import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="title">
        Quick Instinct Quiz
      </Link>
      {/* <hr className="divider" /> */}
    </div>
  );
};

export default Header;
