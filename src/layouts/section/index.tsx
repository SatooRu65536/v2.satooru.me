import { ReactElement, ReactNode } from 'react';

import styles from './index.module.scss';

interface Props {
  children: ReactNode;
  title?: string | ReactElement;
  leftSpace?: boolean;
  center?: boolean;
  underline?: boolean;
  className?: string;
}

const SectionLayout = (props: Props): ReactElement => {
  const { children, center, title, leftSpace, underline, className } = props;

  return (
    <section className={styles.section}>
      <div className={styles.title} data-underline={underline}>
        {typeof title === 'string' ? <h1>{title}</h1> : title}
      </div>

      <div className={`${styles.content} ${className}`} data-leftspace={leftSpace} data-center={center}>
        {children}
      </div>
    </section>
  );
};

export default SectionLayout;
