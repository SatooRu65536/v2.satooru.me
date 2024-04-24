import Link from 'next/link';
import { ReactElement } from 'react';

import styles from './index.module.scss';

interface Props {
  categories: Set<string>;
  currentCategory?: string;
}

const PostCategories = (props: Props): ReactElement => {
  const { categories, currentCategory } = props;

  return (
    <div className={styles.container}>
      {Array.from(categories).map((category) => (
        <Link
          key={category}
          href={`/posts/${category}`}
          className={styles.link}
          data-selected={category === currentCategory}
        >
          {category}
        </Link>
      ))}
    </div>
  );
};

export default PostCategories;
