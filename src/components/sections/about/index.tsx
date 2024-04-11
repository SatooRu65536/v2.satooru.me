import { ReactElement } from 'react';

import Title from './title';

import { ABOUT } from '@/const/about';
import SectionLayout from '@/layouts/section';

const AbountSection = (): ReactElement => {
  return (
    <SectionLayout title={<Title />} align="left" underline>
      {ABOUT.map((a, i) => (
        <p key={i}>{a}</p>
      ))}
    </SectionLayout>
  );
};

export default AbountSection;
