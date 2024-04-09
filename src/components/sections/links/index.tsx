import { ReactElement } from 'react';

import styles from './index.module.scss';

import Icon from '@/elements/icon';

const LinksSection = (): ReactElement => {
  return (
    <section className={styles.links}>
      <div>
        <p>
          <a href="https://x.com/SatooRu65536" target="_blank">
            <Icon iconKey="x" className={styles.icon} />
            <span>@SatooRu65536</span>
          </a>
        </p>

        <p>
          <a href="http://github.com/SatooRu65536/" target="_blank">
            <Icon iconKey="github" className={styles.icon} />
            <span>@SatooRu65536</span>
          </a>
        </p>
      </div>
    </section>
  );
};

export default LinksSection;
