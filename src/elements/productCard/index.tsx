import { ReactElement } from 'react';

import styles from './index.module.scss';

import CardLayout from '@/layouts/card';

interface Props {
  title: string;
  tag: string;
  w: 250 | 300;
  techs: ReactElement[];
  thumbnail: string;
}

const ProductCard = (props: Props): ReactElement => {
  const { title, tag, w, techs, thumbnail } = props;

  return (
    <CardLayout style={{ width: `${w}px` }} className={styles.card}>
      <div className={styles.left}>
        <h3 className={styles.title}>{title}</h3>
        <h4 className={styles.tag}>{tag}</h4>
        <div className={styles.tech_wrapper}>
          <div>{techs}</div>
        </div>
      </div>

      <div className={styles.right}>
        <img src={thumbnail} className={styles.thumbnail} alt="" />
      </div>
    </CardLayout>
  );
};

export default ProductCard;
