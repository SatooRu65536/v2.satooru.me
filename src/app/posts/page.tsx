import { ReactElement, Suspense } from 'react';

import ListPostPage from '@/components/pages/listPostPage';
import Loading from '@/components/shares/loading';
import { articles } from '@/utils/articles';

const Page = (): ReactElement => {
  return (
    <Suspense fallback={<Loading />}>
      <ListPostPage articles={articles} category={undefined} />
    </Suspense>
  );
};

export default Page;
