import { ReactElement } from 'react';

import styles from './index.module.scss';

const Header = (): ReactElement => {
  return <header className={styles.header}>This is Header</header>;
};

export default Header;
