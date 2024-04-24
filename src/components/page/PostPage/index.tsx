import { GetArticle } from '@/utils/articles';

interface Props {
  articles: GetArticle[];
  number: number;
}

const PostPage = (props: Props) => {
  const { articles, number } = props;

  const article = articles.find((article) => article.article.data.number === number);

  return <div>{article?.article.data.title}</div>;
};

export default PostPage;
