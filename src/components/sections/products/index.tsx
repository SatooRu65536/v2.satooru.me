import { ReactElement } from 'react';
import ProductCard from './card';
import styles from './index.module.scss';
import SectionLayout from '@/layouts/section';
import { GetArticle } from '@/utils/articles';
import { FadeIn, FadeInWithStagger } from '@/components/shares/fadein';

interface Props {
  articles: GetArticle[] | undefined;
}

const ProductsSection = (props: Props): ReactElement => {
  const { articles } = props;

  return (
    <SectionLayout title="Products">
      <FadeInWithStagger className={styles.products}>
        {articles &&
          articles.map((article) => (
            <FadeIn key={article.data.number} className={styles.fade}>
              <ProductCard article={article} link={`/posts/${article.data.number}`} />
            </FadeIn>
          ))}
      </FadeInWithStagger>
    </SectionLayout>
  );
};

export default ProductsSection;
