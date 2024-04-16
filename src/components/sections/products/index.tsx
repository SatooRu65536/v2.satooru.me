import { ReactElement } from 'react';

import ProductCard from './card';
import styles from './index.module.scss';

import SectionLayout from '@/layouts/section';
import { GetArticle } from '@/utils/articles';

interface Props {
  articles: GetArticle[] | undefined;
}

const ProductsSection = (props: Props): ReactElement => {
  const { articles } = props;

  return (
    <SectionLayout title="Products" className={styles.products}>
      {articles &&
        articles.map((article) => (
          <ProductCard
            key={article.article.data.number}
            article={article}
            link={`/post/${article.article.data.number}`}
          />
        ))}
    </SectionLayout>
  );
};

export default ProductsSection;
