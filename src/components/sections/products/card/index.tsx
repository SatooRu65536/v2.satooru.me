import dayjs, { Dayjs } from 'dayjs';
import { ReactElement } from 'react';

import styles from './index.module.scss';

import Icon, { IconKey } from '@/elements/icon';
import CardLayout from '@/layouts/card';

interface Props {
  title: string;
  tag: string;
  w: 250 | 300;
  techs: IconKey[];
  thumbnail?: string;
  date: Dayjs;
}

const defaultThumbnail = '/public/default/penguin.webp';

const ProductCard = (props: Props): ReactElement => {
  const { title, tag, w, techs, thumbnail, date } = props;

  return (
    <CardLayout style={{ width: `${w}px` }} className={styles.card}>
      <div className={styles.left}>
        <h3 className={styles.title}>{title}</h3>
        <h4 className={styles.tag}>{tag}</h4>
        <div className={styles.tech_wrapper}>
          <div>
            {techs.map((tech) => (
              <Icon key={tech} iconKey={tech} />
            ))}
          </div>
        </div>
        <p className={styles.date}>{dayjs(date).format('YYYY/MM/DD')}</p>
      </div>

      <div className={styles.right}>
        <img src={thumbnail ?? defaultThumbnail} className={styles.thumbnail} alt="" />
      </div>
    </CardLayout>
  );
};

export default ProductCard;
