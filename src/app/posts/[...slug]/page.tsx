import { ReactElement } from 'react';

import ListPostPage from '@/components/page/ListPost';
import PostPage from '@/components/page/PostPage';
import { PER_PAGE } from '@/const/setting';
import { getArticles } from '@/utils/articles';

const { articles } = getArticles();

interface StaticSlug {
  slug: string[];
}

export const generateStaticParams = (): StaticSlug[] => {
  const articleSlugs = articles.map((article) => ({
    slug: [article.category, article.article.data.number.toString()],
  }));

  const groupedArticles = Object.groupBy(articles, (article) => article.category);

  const listCategorySlugs = Object.entries(groupedArticles)
    .map(([category, articles]) => {
      if (articles === undefined) throw new Error('articles is undefined');

      const pageCount = Math.ceil(articles.length / PER_PAGE);

      return Array.from({ length: pageCount }, (_, i) => ({
        slug: [category, 'list', (i + 1).toString()],
      }));
    })
    .flat(1);

  console.log([...articleSlugs, ...listCategorySlugs]);

  const listAllPageCount = Math.ceil(articles.length / PER_PAGE);
  const listAllSlugs: StaticSlug[] = Array.from({ length: listAllPageCount }).map((_, i) => ({
    slug: ['list', (i + 1).toString()],
  }));

  return [...articleSlugs, ...listCategorySlugs, ...listAllSlugs];
};

interface Props {
  params: {
    slug: string[];
  };
}

const Page = (props: Props): ReactElement => {
  const { slug } = props.params;

  const isList = slug.at(-2) === 'list';
  const category = slug.at(0);
  const number = slug.at(-1);

  if (number === undefined) throw new Error('number is undefined');
  if (isNaN(parseInt(number))) throw new Error('number is not a number');

  return (
    <>
      {isList ? (
        <ListPostPage category={category} number={parseInt(number)} />
      ) : (
        <PostPage category={category} number={parseInt(number)} />
      )}
    </>
  );
};

export default Page;
