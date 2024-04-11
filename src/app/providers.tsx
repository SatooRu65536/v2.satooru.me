'use client';

import { Provider } from 'jotai';
import { ReactElement } from 'react';

interface Props {
  children: ReactElement | ReactElement[];
}

const Providers = (props: Props): ReactElement => {
  const { children } = props;

  return <Provider>{children}</Provider>;
};

export default Providers;
