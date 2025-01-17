'use client';

import type { GetArticle } from '@/utils/articles';
import PageNation from '@/components/shares/Pagenation';
import PostCategories from '@/components/shares/PostCategories';

import { PER_PAGE } from '@/Const/setting';
import dayjs from 'dayjs';

import { useSearchParams } from 'next/navigation';
import { useCallback } from 'react';
import ListPostCard from './Card';
import styles from './index.module.scss';

interface Props {
  articles: GetArticle[];
  category: string | undefined;
}

function ListPostPage(props: Props) {
  const { articles, category } = props;

  const decodedCategory = category !== undefined ? decodeURI(category) : category;
  const groupedArticles = Object.groupBy(articles, (article) => article.category);

  const searchParams = useSearchParams();
  const page = Number.parseInt(searchParams.get('p') ?? '1');

  const allArticles = decodedCategory !== undefined ? groupedArticles[decodedCategory] ?? [] : articles;
  const displayedArticles = allArticles.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const categoriesSet = new Set(articles.map((article) => article.category));

  const pageTo = useCallback(
    (n: number) => {
      const path = decodedCategory !== undefined ? `/posts/${decodedCategory}` : '/posts';
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
          {!hasArticles
            ? (
                <p>記事はありません</p>
              )
            : (
                displayedArticles.map((article) => (
                  <ListPostCard
                    content={article.content}
                    date={dayjs(article.postedAt)}
                    key={article.data.number}
                    link={`/posts/${article.data.number}`}
                    thumbnail={article.thumbnail}
                    title={article.data.title}
                  />
                ))
              )}
        </div>
      </section>

      <section className={styles.pagenation}>
        <PageNation currentPage={page} pageTo={pageTo} totalArticles={allArticles.length} />
      </section>
    </div>
  );
}

export default ListPostPage;
