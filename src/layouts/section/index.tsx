import { ComponentProps, ReactElement, ReactNode } from 'react';

import styles from './index.module.scss';
import { FadeIn } from '@/components/shares/fadein';

interface Props {
  children: ReactNode;
  title?: string | ReactElement;
  leftSpace?: boolean;
  center?: boolean;
  underline?: boolean;
  fadein?: boolean;
  className?: string;
}

const SectionLayout = (props: Props): ReactElement => {
  const { children, center, title, leftSpace, underline, fadein, className } = props;

  return (
    <section className={styles.section}>
      <FadeWrapper fadein={fadein} underline={underline}>
        {typeof title === 'string' ? <h1>{title}</h1> : title}
      </FadeWrapper>

      <div className={`${styles.content} ${className}`} data-leftspace={leftSpace} data-center={center}>
        {children}
      </div>
    </section>
  );
};

interface FadeProps {
  fadein?: boolean;
  underline?: boolean;
  children: ReactNode;
}

const FadeWrapper = ({ fadein, underline, children }: FadeProps) => {
  if (fadein === false) {
    return (
      <div className={styles.title} data-underline={underline}>
        {children}
      </div>
    );
  }
  return (
    <FadeIn className={styles.title} data-underline={underline} direction='left'>
      {children}
    </FadeIn>
  );
};

export default SectionLayout;
