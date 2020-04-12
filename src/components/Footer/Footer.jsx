import React from 'react';

import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer class="mt-5">
      <p class="attribution">
        Sourced by{' '}
        <a href="https://github.com/mathdroid/covid-19-api" target="_blank">
          mathdroid
        </a>
        . Coded by <a href="https://bulenteroglu.co.uk">Bulent Eroglu</a>.
      </p>
    </footer>
  );
};

export default Footer;
