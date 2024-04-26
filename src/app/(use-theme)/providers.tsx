'use client';

import { Provider } from 'jotai';
import { ReactElement, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Providers = (props: Props): ReactElement => {
  const { children } = props;

  return <Provider>{children}</Provider>;
};

export default Providers;
