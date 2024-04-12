import { ReactElement } from 'react';

import styles from './index.module.scss';

import Icon, { IconKey, IconMap } from '@/elements/icon';

interface Props {
  iconKey: IconKey;
  size: 'sm' | 'lg';
}

const IconCard = (props: Props): ReactElement => {
  const { iconKey, size } = props;

  return (
    <div className={styles.icon} data-size={size}>
      <Icon size={size === 'lg' ? 48 : 32} iconKey={iconKey} />
      <p>{IconMap[iconKey].name}</p>
    </div>
  );
};

export default IconCard;
