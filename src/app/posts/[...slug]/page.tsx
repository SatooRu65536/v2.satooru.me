import { ReactElement, Suspense } from 'react';

import ListPostPage from '@/components/pages/listPost';
import PostPage from '@/components/pages/postPage';
import Loading from '@/elements/loading';
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
        <Suspense fallback={<Loading />}>
          <ListPostPage articles={articles} category={category} />
        </Suspense>
      ) : (
        <PostPage articles={articles} number={articleNum} />
      )}
    </>
  );
};

export default Page;
