import dayjs from 'dayjs';
import { ReactElement } from 'react';

import styles from './index.module.scss';

import Icon from '@/components/shares/icon';
import CardLayout from '@/layouts/card';
import { GetArticle, toProduct } from '@/utils/articles';

interface Props {
  article: GetArticle;
  link: string;
}

const defaultThumbnail = '/default/penguin.webp';

const ProductCard = (props: Props): ReactElement => {
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
              <Icon key={tech} iconKey={tech} />
            ))}
          </div>
        </div>
        <p className={styles.date}>{dayjs(createdAt).format('YYYY/MM/DD')}</p>
      </div>

      <div className={styles.right}>
        <img src={thumbnail ?? defaultThumbnail} className={styles.thumbnail} alt="" />
      </div>
    </CardLayout>
  );
};

export default ProductCard;
