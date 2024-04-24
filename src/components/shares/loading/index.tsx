import { HTMLProps, ReactElement } from 'react';

import styles from './index.module.scss';

interface Props extends HTMLProps<HTMLDivElement> {}

const Loading = (props: Props): ReactElement => {
  return (
    <div {...props} className={styles.loading}>
      <div />
    </div>
  );
};

export default Loading;
