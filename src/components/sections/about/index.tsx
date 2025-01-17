import type { ReactElement } from 'react';

import { FadeIn } from '@/components/shares/Fadein';

import { ABOUT } from '@/Const/about';
import SectionLayout from '@/layouts/Section';
import Title from './title';

function AbountSection(): ReactElement {
  return (
    <SectionLayout fadein={false} title={<Title />} underline>
      <FadeIn direction="left">
        {ABOUT.map((a) => (
          <p key={a}>{a}</p>
        ))}
      </FadeIn>
    </SectionLayout>
  );
}

export default AbountSection;
