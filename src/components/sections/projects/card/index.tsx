import { ReactElement } from 'react';

import styles from './index.module.scss';

import Fontawesome from '@/components/shares/fontawesome';
import Icon, { IconKey } from '@/components/shares/icon';
import CardLayout from '@/layouts/card';

interface Props {
  title: string;
  description: string;
  techs: IconKey[];
  repository: string;
  site?: string;
}

const ProjectCard = (props: Props): ReactElement => {
  const { title, description, techs } = props;

  return (
    <CardLayout className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <h4 className={styles.description}>{description}</h4>
      <div className={styles.tech_wrapper}>
        <div>
          {techs.map((tech) => (
            <Icon key={tech} iconKey={tech} />
          ))}
        </div>
      </div>

      <div className={styles.buttons}>
        <a href={props.repository} target="_blank">
          <Icon iconKey="github" />
        </a>

        {props.site && (
          <a href={props.site} target="_blank">
            <Fontawesome iconKey="faWindowMaximize" />
          </a>
        )}
      </div>
    </CardLayout>
  );
};

export default ProjectCard;
