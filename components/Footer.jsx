import React from "react";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
const Footer = () => {
  return (
    <div className="footer-container">
      <p>2023 Yash Sachan All rights reserved</p>
      <p className="icons">
        <AiFillInstagram></AiFillInstagram>
        <AiFillTwitterCircle></AiFillTwitterCircle>
      </p>
    </div>
  );
};

export default Footer;
