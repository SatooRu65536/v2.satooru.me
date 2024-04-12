import dayjs from 'dayjs';
import { ReactElement } from 'react';

import PostCard from './card';
import styles from './index.module.scss';

import SectionLayout from '@/layouts/section';

const RecentPostsSection = (): ReactElement => {
  return (
    <SectionLayout title="Recent Blogs" className={styles.recent_blogs}>
      <PostCard
        title="Title"
        content="こんてんつがはいりますとてもながいよ"
        date={dayjs('2023-01-01')}
        link="/posts/1"
      />
      <PostCard
        title="Title"
        content="こんてんつがはいりますとてもながいよ"
        date={dayjs('2023-01-02')}
        link="/posts/2"
      />
      <PostCard
        title="Title"
        content="こんてんつがはいりますとてもながいよ"
        date={dayjs('2023-01-03')}
        link="/posts/3"
      />
      <PostCard
        title="Title"
        content="こんてんつがはいりますとてもながいよ"
        date={dayjs('2023-01-04')}
        link="/posts/4"
      />
    </SectionLayout>
  );
};

export default RecentPostsSection;
