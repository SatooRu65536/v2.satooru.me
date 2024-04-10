import { ReactElement } from 'react';

import styles from './index.module.scss';

import Icon, { IconKey, IconMap } from '@/elements/icon';

interface Props {
  iconKey: IconKey;
  size: 'sm' | 'lg';
}

const IconCard = (props: Props): ReactElement => {
  const { iconKey, size } = props;
  const cardSize = size === 'lg' ? '120px' : '80px';
  const iconSize = size === 'lg' ? 48 : 32;
  const fontSize = size === 'lg' ? '1rem' : '0.75rem';

  return (
    <div className={styles.icon} style={{ width: cardSize }}>
      <Icon size={iconSize} iconKey={iconKey} />
      <p style={{ fontSize }}>{IconMap[iconKey].name}</p>
    </div>
  );
};

export default IconCard;
