import dayjs, { Dayjs } from 'dayjs';
import { ReactElement } from 'react';

import styles from './index.module.scss';

import Fontawesome from '@/elements/fontawesome';

export interface ListItemProps {
  date: Dayjs | [Dayjs] | [Dayjs, Dayjs];
  type: string;
  title: string;
  link?: string;
  description?: string;
  dateFormat?: string;
}

interface Props extends ListItemProps {}

const ListItem = (props: Props): ReactElement => {
  const { date, type, title, link, description, dateFormat } = props;
  const dateFormatSnap = dateFormat || 'YYYY/MM/DD';

  return (
    <li className={styles.lit_item}>
      <p className={styles.date}>
        {Array.isArray(date)
          ? `${dayjs(date[0]).format(dateFormatSnap)} ~ ${date[1] === undefined ? '現在' : dayjs(date[1]).format(dateFormatSnap)}`
          : dayjs(date).format(dateFormatSnap)}
      </p>

      <p className={styles.main}>
        <span>[{type}]</span>
        <span className={styles.title}>{title}</span>
        {link && (
          <a href={link} className={styles.link}>
            <Fontawesome className={styles.link_icon} iconKey="faUpRightFromSquare" />
          </a>
        )}
      </p>

      {description && <p className={styles.description}>{description}</p>}
    </li>
  );
};

export default ListItem;
