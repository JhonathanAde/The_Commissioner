import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-window">
    <div className="footer-sociallinks">
      <ul className="creator-info">
        <li>
          <a href="https://github.com/JhonathanAde">
            <i class="fab fa-github fa-2x"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/jhonathan-ade-358b9b66/">
            <i class="fab fa-linkedin fa-2x"></i>
          </a>
        </li>
        <li>
          <a href="https://angel.co/u/jhonathan-ade">
            <i class="fab fa-angellist fa-2x"></i>
          </a>
        </li>
      </ul>
    </div>
    <div className="footer-authorinfo">
      <h1>
        © copyright 2021 Jhonathan Ade
      </h1>
    </div>
    </div>
  )
}

export default Footer