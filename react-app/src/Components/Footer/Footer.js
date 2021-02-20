import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-window">
    <div className="footer">
      <ul className="creator-info">
        <li>
          Jhonathan Ade 
        </li>
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
    </div>
  )
}

export default Footer