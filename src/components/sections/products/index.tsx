import type { GetArticle } from '@/utils/articles';
import type { ReactElement } from 'react';
import { FadeIn, FadeInWithStagger } from '@/components/shares/fadein';
import SectionLayout from '@/layouts/section';
import ProductCard from './card';
import styles from './index.module.scss';

interface Props {
  articles: GetArticle[] | undefined;
}

function ProductsSection(props: Props): ReactElement {
  const { articles } = props;

  return (
    <SectionLayout title="Products">
      <FadeInWithStagger className={styles.products}>
        {articles
        && articles.map((article) => (
          <FadeIn className={styles.fade} key={article.data.number}>
            <ProductCard article={article} link={`/posts/${article.data.number}`} />
          </FadeIn>
        ))}
      </FadeInWithStagger>
    </SectionLayout>
  );
}

export default ProductsSection;
