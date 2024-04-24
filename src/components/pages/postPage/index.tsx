import dayjs from 'dayjs';

import styles from './index.module.scss';

import Thumbnail from '@/components/shares/thumbnail';
import ToHtml from '@/components/shares/tohtml';
import { GetArticle, getThumbnail } from '@/utils/articles';

interface Props {
  articles: GetArticle[];
  number: number;
}

const PostPage = (props: Props) => {
  const { articles, number } = props;

  const article = articles.find((article) => article.data.number === number);

  if (article === undefined) {
    return <div>記事が見つかりませんでした</div>;
  }

  const thumbnail = getThumbnail(article.content);

  return (
    <div className={styles.post_container}>
      <h1 className={styles.title}>{article.data.title}</h1>
      <p className={styles.postedat}>{dayjs(article.postedAt).format('YYYY年MM月DD日')}</p>

      <Thumbnail alt="thumbnail" height="300px" src={thumbnail ?? '/default/penguin.webp'} />

      <ToHtml className={styles.content} content={article.content} />
    </div>
  );
};

export default PostPage;
