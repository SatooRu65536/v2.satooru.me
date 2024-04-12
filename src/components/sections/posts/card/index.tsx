import dayjs, { Dayjs } from 'dayjs';
import { ReactElement } from 'react';

import styles from './index.module.scss';

import CardLayout from '@/layouts/card';

interface Props {
  title: string;
  content: string;
  thumbnail?: string;
  date: Dayjs;
  link: string;
}

const defaultThumbnail = '/default/penguin.webp';

const PostCard = (props: Props): ReactElement => {
  const { title, content, thumbnail, date, link } = props;

  return (
    <CardLayout className={styles.card} link={link}>
      <div className={styles.left}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.content}>
          <p>{content}</p>
        </div>
        <p className={styles.date}>{dayjs(date).format('YYYY/MM/DD')}</p>
      </div>

      <div className={styles.right}>
        <img src={thumbnail ?? defaultThumbnail} className={styles.thumbnail} alt="" />
      </div>
    </CardLayout>
  );
};

export default PostCard;
