import { ReactElement } from 'react';

import styles from './index.module.scss';

import { ExperienceProp } from '@/components/sections/experiences';

interface Porps {
  experience: ExperienceProp;
}

const ExperienceItem = (props: Porps): ReactElement => {
  const { experience } = props;

  return (
    <div className={styles.card} key={experience.description}>
      <div className={styles.circle_container}>
        <div className={styles.circle} data-fill={experience.fill} />
        <div className={styles.line} />
      </div>

      <div className={styles.box}>
        <div className={styles.content}>
          <p className={styles.designation}>{experience.description}</p>
          <a className={styles.name} href={experience.url}>
            {experience.organization}
          </a>
          <p className={styles.position}>
            {experience.start.format('YYYY.MM')}
            {' - '}
            {experience.end ? experience.end.format('YYYY.MM') : '現在'}
            {experience.location && `, ${experience.location}`}
            {', '}
          </p>
          <p className={styles.overview}>{experience.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;
