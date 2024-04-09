import { ReactElement } from 'react';

import styles from './index.module.scss';

import Icon, { IconKey, IconMap } from '@/elements/icon';

interface Props {
  iconKey: IconKey;
  size: 'sm' | 'lg';
}

const IconCard = (props: Props): ReactElement => {
  const { iconKey, size } = props;
  const IconSize = size === 'lg' ? 48 : 24;

  return (
    <div className={styles.icon}>
      <Icon size={IconSize} iconKey={iconKey} />
      <p>{IconMap[iconKey].name}</p>
    </div>
  );
};

export default IconCard;
