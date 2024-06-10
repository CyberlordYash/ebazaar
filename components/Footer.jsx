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
      <div className=" footer-portfolio">
        Check out my other projects at{" "}
        <a href="https://yashsachan.netlify.app/">
          <button className="footer-button">Portfolio</button>
        </a>
      </div>
    </div>
  );
};

export default Footer;
