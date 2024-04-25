'use client';

import dayjs from 'dayjs';
import { useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

import ListPostCard from './card';
import styles from './index.module.scss';

import PageNation from '@/components/shares/pagenation';
import PostCategories from '@/components/shares/postCategories';
import { PER_PAGE } from '@/const/setting';
import { GetArticle } from '@/utils/articles';

interface Props {
  articles: GetArticle[];
  category: string | undefined;
}

const ListPostPage = (props: Props) => {
  const { articles, category } = props;

  const decodedCategory = category ? decodeURI(category) : category;
  const groupedArticles = Object.groupBy(articles, (article) => article.category);

  const searchParams = useSearchParams();
  const page = parseInt(searchParams.get('p') ?? '1');

  const allArticles = decodedCategory ? groupedArticles[decodedCategory] ?? [] : articles;
  const displayedArticles = allArticles.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const categoriesSet = new Set(articles.map((article) => article.category));

  const pageTo = useCallback(
    (n: number) => {
      const path = decodedCategory ? `/posts/${decodedCategory}` : '/posts';
      return `${path}?p=${n}`;
    },
    [decodedCategory],
  );

  const hasArticles = displayedArticles.length > 0;

  return (
    <div className={styles.container}>
      <section className={styles.categories_wrapper}>
        <PostCategories categories={categoriesSet} currentCategory={decodedCategory} />
      </section>

      <section className={styles.articles_wrapper}>
        <div className={styles.articles}>
          {!hasArticles ? (
            <p>記事はありません</p>
          ) : (
            displayedArticles.map((article) => (
              <ListPostCard
                key={article.data.number}
                title={article.data.title}
                content={article.content}
                date={dayjs(article.postedAt)}
                link={`/posts/${article.data.number}`}
                thumbnail={article.thumbnail}
              />
            ))
          )}
        </div>
      </section>

      <section className={styles.pagenation}>
        <PageNation currentPage={page} totalArticles={allArticles.length} pageTo={pageTo} />
      </section>
    </div>
  );
};

export default ListPostPage;
