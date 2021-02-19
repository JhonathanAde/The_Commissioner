import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <ul className="creator-info">
        <li>
          Jhonathan Ade 
        </li>
        <li>
          <a href="#">
            <i class="fab fa-github fa-2x"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fab fa-linkedin fa-2x"></i>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Footer