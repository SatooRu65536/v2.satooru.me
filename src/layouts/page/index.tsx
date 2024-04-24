import { ReactElement, ReactNode } from 'react';

import styles from './index.module.scss';

import Footer from '@/components/bases/footer';
import Header from '@/components/bases/header';

interface Props {
  children: ReactNode;
}

const PageLayout = (props: Props): ReactElement => {
  const { children } = props;

  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
};

export default PageLayout;
