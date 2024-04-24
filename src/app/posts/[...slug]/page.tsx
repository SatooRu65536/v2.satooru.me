import { ReactElement } from 'react';

import ListPostPage from '@/components/page/ListPost';
import PostPage from '@/components/page/PostPage';
import { getArticles } from '@/utils/articles';

const { articles } = getArticles();

interface StaticSlug {
  slug: string[];
}

export const generateStaticParams = (): StaticSlug[] => {
  const articleSlugs = articles.map((article) => ({
    slug: [article.article.data.number.toString()],
  }));

  const groupedArticles = Object.groupBy(articles, (article) => article.category);

  const listCategorySlugs: StaticSlug[] = Object.keys(groupedArticles).map((category) => ({
    slug: [category],
  }));

  return [...articleSlugs, ...listCategorySlugs];
};

interface Props {
  params: {
    slug: string[];
  };
}

const Page = (props: Props): ReactElement => {
  const { slug } = props.params;

  const lastSlug = slug.at(-1);
  const articleNum = parseInt(lastSlug ?? '');
  const isListPage = isNaN(articleNum);
  const category = isListPage ? lastSlug : slug.at(-2) ?? undefined;

  return (
    <>
      {isListPage ? (
        <ListPostPage articles={articles} category={category} />
      ) : (
        <PostPage articles={articles} number={articleNum} />
      )}
    </>
  );
};

export default Page;
