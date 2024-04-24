'use client';

import { useSearchParams } from 'next/navigation';

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
    <div>
      ListPage: {category}:{page}
      <ul>
        {displayedArticles?.map((article) => <li key={article.article.data.number}>{article.article.data.title}</li>)}
      </ul>
    </div>
  );
};

export default ListPostPage;
