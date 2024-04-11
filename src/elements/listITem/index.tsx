import dayjs, { Dayjs } from 'dayjs';
import { ReactElement } from 'react';

import styles from './index.module.scss';

import Fontawesome from '@/elements/fontawesome';

interface Props {
  date: Dayjs | [Dayjs] | [Dayjs, Dayjs];
  type: string;
  title: string;
  link?: string;
  description?: string;
}

const ListItem = (props: Props): ReactElement => {
  const { date, type, title, link, description } = props;

  return (
    <li className={styles.lit_item}>
      <p className={styles.date}>
        {Array.isArray(date)
          ? `${dayjs(date[0]).format('YYYY/MM/DD')} ~ ${date[1] === undefined ? '現在' : dayjs(date[1]).format('YYYY/MM/DD')}`
          : dayjs(date).format('YYYY/MM/DD')}
      </p>

      <p className={styles.main}>
        <span>[{type}]</span>
        <h3 className={styles.title}>{title}</h3>
        {link && (
          <a href={link} className={styles.link}>
            <Fontawesome iconKey="faUpRightFromSquare" />
          </a>
        )}
      </p>

      {description && <p className={styles.description}>{description}</p>}
    </li>
  );
};

export default ListItem;
