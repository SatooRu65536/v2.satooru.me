import { ReactElement } from 'react';

import styles from './index.module.scss';

import Icon from '@/components/shares/icon';
import { LINKS } from '@/const/links';

const LinksSection = (): ReactElement => {
  return (
    <section className={styles.links}>
      <div>
        {LINKS.map((link) => (
          <p key={link.link}>
            <a href={link.link} target="_blank">
              <Icon iconKey={link.iconKey} className={styles.icon} />
              <span>{link.name}</span>
            </a>
          </p>
        ))}
      </div>
    </section>
  );
};

export default LinksSection;
