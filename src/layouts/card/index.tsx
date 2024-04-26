import { Link } from 'next-view-transitions';
import { DetailedHTMLProps, HTMLAttributes, ReactElement } from 'react';

import styles from './index.module.scss';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  children: ReactElement | ReactElement[];
  link?: string;
}

const CardLayout = (props: Props): ReactElement => {
  const { children, className, link, ...rest } = props;

  return (
    <article className={`${styles.card} ${className}`} {...rest} data-haslink={link !== undefined}>
      {link !== undefined && <Link href={link} className={styles.link} />}
      {children}
    </article>
  );
};

export default CardLayout;
