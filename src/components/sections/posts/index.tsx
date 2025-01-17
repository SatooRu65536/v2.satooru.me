import dayjs from 'dayjs';
import { ReactElement } from 'react';
import PostCard from './card';
import styles from './index.module.scss';
import SectionLayout from '@/layouts/section';
import { GetArticle } from '@/utils/articles';
import { FadeIn, FadeInWithStagger } from '@/components/shares/fadein';

interface Props {
  articles: GetArticle[] | undefined;
}

const RecentPostsSection = (props: Props): ReactElement => {
  const { articles } = props;

  return (
    <SectionLayout title="Recent Posts">
      <FadeInWithStagger className={styles.recent_posts}>
        {articles &&
          articles.map((article) => (
            <FadeIn key={article.data.number} className={styles.fadein}>
              <PostCard
                title={article.data.title}
                content={article.content}
                date={dayjs(article.postedAt)}
                thumbnail={article.thumbnail}
                link={`/posts/${article.data.number}`}
              />
            </FadeIn>
          ))}
      </FadeInWithStagger>
    </SectionLayout>
  );
};

export default RecentPostsSection;
