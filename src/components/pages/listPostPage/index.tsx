'use client';

import dayjs from 'dayjs';
import { useSearchParams } from 'next/navigation';

import ListPostCard from './card';
import styles from './index.module.scss';

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

  const displayedArticles = groupedArticles[category ?? 'others']?.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  return (
    <div className={styles.container}>
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
  );
};

export default ListPostPage;
