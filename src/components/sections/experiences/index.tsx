import { Dayjs } from 'dayjs';
import { ReactElement } from 'react';

import styles from './index.module.scss';
import ExperienceItem from './item';
import { EXPERIENCES } from '@/const/experience';
import SectionLayout from '@/layouts/section';

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

const ExperiencesSection = (): ReactElement => {
  const sortedExperiences = EXPERIENCES.sort((a, b) => a.start.diff(b.start));

  return (
    <SectionLayout title="Experiences" className={styles.experiences} leftSpace>
      {sortedExperiences.map((experience) => {
        return <ExperienceItem experience={experience} />;
      })}
    </SectionLayout>
  );
};

export default ExperiencesSection;
