import { ReactElement } from 'react';
import styles from './index.module.scss';
import Icon from '@/components/shares/icon';
import { LINKS } from '@/const/links';
import { FadeIn, FadeInWithStagger } from '@/components/shares/fadein';

const LinksSection = (): ReactElement => {
  return (
    <section className={styles.links}>
      <FadeInWithStagger>
        {LINKS.map((link) => (
          <FadeIn key={link.link} direction="left">
            <p>
              <a href={link.link} target="_blank">
                <Icon iconKey={link.iconKey} className={styles.icon} color="black" />
                <span>{link.name}</span>
              </a>
            </p>
          </FadeIn>
        ))}
      </FadeInWithStagger>
    </section>
  );
};

export default LinksSection;
