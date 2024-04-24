'use client';

import dayjs from 'dayjs';
import { useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

import ListPostCard from './card';
import styles from './index.module.scss';

import PageNation from '@/components/shares/pagenation';
import { PER_PAGE } from '@/const/setting';
import { GetArticle } from '@/utils/articles';

interface Props {
  articles: GetArticle[];
  category: string | undefined;
}

const ListPostPage = (props: Props) => {
  const { articles, category } = props;

  const groupedArticles = Object.groupBy(articles, (article) => article.category);

  const searchParams = useSearchParams();
  const page = parseInt(searchParams.get('p') ?? '1');

  const allArticles = category ? groupedArticles[category] ?? [] : articles;
  const displayedArticles = allArticles.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const pageTo = useCallback(
    (n: number) => {
      const path = category ? `/posts/${category}` : '/posts';
      return `${path}?p=${n}`;
    },
    [category],
  );

  if (displayedArticles === undefined || displayedArticles.length === 0) {
    return <div>記事はありません</div>;
  }

  return (
    <div className={styles.container}>
      <section className={styles.articles_wrapper}>
        <div className={styles.articles}>
          {displayedArticles?.map(({ article, postedAt }) => (
            <ListPostCard
              key={article.data.number}
              title={article.data.title}
              content={article.content}
              date={dayjs(postedAt)}
              link={`/posts/${article.data.number}`}
            />
          ))}
        </div>
      </section>

      <section className={styles.pagenation}>
        <PageNation currentPage={page} totalArticles={allArticles.length} pageTo={pageTo} />
      </section>
    </div>
  );
};

export default ListPostPage;
