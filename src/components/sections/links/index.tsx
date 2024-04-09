import { SiGithub, SiX } from '@icons-pack/react-simple-icons';
import { ReactElement } from 'react';

import styles from './index.module.scss';

const LinksSection = (): ReactElement => {
  return (
    <section className={styles.links}>
      <div>
        <p>
          <a href="https://x.com/SatooRu65536">
            <SiX
              className={styles.icon}
              size={24}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            />
            <span>@SatooRu65536</span>
          </a>
        </p>

        <p>
          <a href="http://github.com/SatooRu65536/">
            <SiGithub
              className={styles.icon}
              size={24}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            />
            <span>@SatooRu65536</span>
          </a>
        </p>
      </div>
    </section>
  );
};

export default LinksSection;
