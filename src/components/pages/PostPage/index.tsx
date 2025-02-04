import type { GetArticle } from '@/utils/articles';

import Thumbnail from '@/components/shares/thumbnail';

import ToHtml from '@/components/shares/toHtml';
import dayjs from 'dayjs';
import styles from './index.module.scss';

interface Props {
  articles: GetArticle[];
  number: number;
}

function PostPage(props: Props) {
  const { articles, number } = props;

  const article = articles.find((article) => article.data.number === number);

  if (article === undefined) {
    return <div>記事が見つかりませんでした</div>;
  }

  return (
    <div className={styles.post_container}>
      <h1 className={styles.title}>{article.data.title}</h1>
      <p className={styles.postedat}>{dayjs(article.postedAt).format('YYYY年MM月DD日')}</p>

      <Thumbnail alt="thumbnail" height="300px" src={article.thumbnail ?? '/default/penguin.webp'} />

      <ToHtml className={styles.content} content={article.content} />
    </div>
  );
}

export default PostPage;
