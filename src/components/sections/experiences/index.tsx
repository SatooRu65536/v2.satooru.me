import type { Dayjs } from 'dayjs';
import type { ReactElement } from 'react';

import { EXPERIENCES } from '@/Const/experience';
import SectionLayout from '@/layouts/Section';
import { hash } from 'ohash';
import styles from './index.module.scss';
import ExperienceItem from './item';

export interface ExperienceProp {
  description: string;
  organization: string;
  start: Dayjs;
  end?: Dayjs;
  location?: string;
  overview?: string;
  url: string;
  fill?: boolean;
}

function ExperiencesSection(): ReactElement {
  const sortedExperiences = EXPERIENCES.sort((a, b) => a.start.diff(b.start));

  return (
    <SectionLayout className={styles.experiences} leftSpace title="Experiences">
      {sortedExperiences.map((experience) => <ExperienceItem experience={experience} key={hash(experience)} />)}
    </SectionLayout>
  );
}

export default ExperiencesSection;
