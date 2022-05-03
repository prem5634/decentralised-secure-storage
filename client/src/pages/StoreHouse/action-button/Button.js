import React from "react";
import { Link } from "react-router-dom";
import * as Icons from "react-icons/fa";
import "./Button.css";

function Button() {
  return (
    <>
      <Link to="signup">
        <button className="btn">
          <Icons.FaUserPlus />
          <span>Log out</span>
        </button>
      </Link>
    </>
  );
}

export default Button;