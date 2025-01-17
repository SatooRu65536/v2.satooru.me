import type { ReactElement } from 'react';

import styles from './index.module.scss';

interface Props {
  name: string;
  visitDate: string[];
}

function PopupElement({ name }: Props): ReactElement {
  return (
    <div className={styles.popup}>
      <h1>{name}</h1>
    </div>
  );
}

export default PopupElement;
