import dayjs from 'dayjs';
import { ReactElement } from 'react';

import PostCard from './card';
import styles from './index.module.scss';

import SectionLayout from '@/layouts/section';
import { GetArticle } from '@/utils/articles';

interface Props {
  articles: GetArticle[] | undefined;
}

const RecentPostsSection = (props: Props): ReactElement => {
  const { articles } = props;

  return (
    <SectionLayout title="Recent Posts" className={styles.recent_posts}>
      {articles &&
        articles.map((article) => (
          <PostCard
            key={article.data.number}
            title={article.data.title}
            content={article.content}
            date={dayjs(article.postedAt)}
            thumbnail={article.thumbnail}
            link={`/posts/${article.data.number}`}
          />
        ))}
    </SectionLayout>
  );
};

export default RecentPostsSection;
