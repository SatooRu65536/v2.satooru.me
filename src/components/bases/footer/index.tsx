import { ReactElement } from 'react';

import styles from './index.module.scss';

const Footer = (): ReactElement => {
  return (
    <footer className={styles.footer}>
      <p>SatooRu © 2024 Copyright.</p>
    </footer>
  );
};

export default Footer;
