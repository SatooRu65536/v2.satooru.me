import type { GetArticle } from '@/utils/articles';
import type { ReactElement } from 'react';

import Icon from '@/components/shares/icon';
import CardLayout from '@/layouts/card';

import { toProduct } from '@/utils/articles';
import dayjs from 'dayjs';
import styles from './index.module.scss';

interface Props {
  article: GetArticle;
  link: string;
}

const defaultThumbnail = '/default/penguin.webp';

function ProductCard(props: Props): ReactElement {
  const { article, link } = props;
  const { title, tag, techs, thumbnail, createdAt } = toProduct(article);

  return (
    <CardLayout className={styles.card} link={link}>
      <div className={styles.left}>
        <h3 className={styles.title}>{title}</h3>
        <h4 className={styles.tag}>{tag}</h4>
        <div className={styles.tech_wrapper}>
          <div>
            {techs.map((tech) => (
              <Icon iconKey={tech} key={tech} />
            ))}
          </div>
        </div>
        <p className={styles.date}>{dayjs(createdAt).format('YYYY/MM/DD')}</p>
      </div>

      <div className={styles.right}>
        <img alt="" className={styles.thumbnail} src={thumbnail ?? defaultThumbnail} />
      </div>
    </CardLayout>
  );
}

export default ProductCard;
