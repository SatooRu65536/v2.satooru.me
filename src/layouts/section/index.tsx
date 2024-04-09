import { ReactElement, ReactNode } from 'react';

import styles from './index.module.scss';

interface Props {
  children: ReactNode;
  title?: string | ReactElement;
  align?: 'left' | 'center' | 'right';
  underline?: boolean;
}

const SectionLayout = (props: Props): ReactElement => {
  const { children, title, align, underline } = props;

  return (
    <section className={styles.section}>
      <div className={styles.title} data-underline={underline}>
        {typeof title === 'string' ? <h1>{title}</h1> : title}
      </div>

      <div className={styles.content} data-align={align}>
        {children}
      </div>
    </section>
  );
};

export default SectionLayout;
