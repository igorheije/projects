import './Footer.css';
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <span>
        Desenvolvido com <i className="fa fa-heart text-danger"></i> por
        <strong>
          {' '}
          Ig<span className="text-danger">o</span>r{' '}
        </strong>
      </span>
    </footer>
  );
};
export default Footer;
