import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => (
  <footer className="footer">
    <div className="container">
      <p className="paragraph footer__title">Footer</p>
      <div className="copyright">
        &copy; Copyright {new Date().getFullYear()}{' '}
        <Link className="copyright__link" to="http:s//olusegunomilabu.com">
          Onemole
        </Link>
      </div>
    </div>
  </footer>
);
