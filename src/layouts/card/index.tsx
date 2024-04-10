import { DetailedHTMLProps, HTMLAttributes, ReactElement } from 'react';

import styles from './index.module.scss';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  children: ReactElement | ReactElement[];
}

const CardLayout = (props: Props): ReactElement => {
  const { children, className, ...rest } = props;

  return (
    <article className={`${styles.card} ${className}`} {...rest}>
      {children}
    </article>
  );
};

export default CardLayout;
