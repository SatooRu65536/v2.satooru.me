import type { ReactElement } from 'react';

import { FadeIn } from '@/components/shares/Fadein';

import { ABOUT } from '@/const/about';
import SectionLayout from '@/layouts/section';
import Title from './title/index';

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
