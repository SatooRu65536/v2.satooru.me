import { ReactElement } from 'react';

import Title from './title';

import { ABOUT } from '@/const/about';
import SectionLayout from '@/layouts/section';
import { FadeIn } from '@/components/shares/fadein';

const AbountSection = (): ReactElement => {
  return (
    <SectionLayout title={<Title />} underline fadein={false}>
      <FadeIn direction="left">
        {ABOUT.map((a, i) => (
          <p key={i}>{a}</p>
        ))}
      </FadeIn>
    </SectionLayout>
  );
};

export default AbountSection;
