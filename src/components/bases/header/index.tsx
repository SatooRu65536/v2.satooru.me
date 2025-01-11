import { Link } from 'next-view-transitions';
import { ReactElement } from 'react';

import styles from './index.module.scss';

const LINKS = [
  { title: 'Home', href: '/' },
  { title: 'Posts', href: '/posts' },
  { title: 'Map', href: '/map' },
];

interface Props {
  fixed?: boolean;
}

const Header = ({ fixed }: Props): ReactElement => {
  return (
    <header className={styles.header} data-fixed={fixed}>
      <img src="/icon.webp" alt="アイコン" className={styles.icon} />
      <h3 className={styles.title}>佐藤さとる</h3>

      <nav className={styles.nav}>
        {LINKS.map((l) => (
          <Link key={l.href} href={l.href} className={styles.ink}>
            {l.title}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
