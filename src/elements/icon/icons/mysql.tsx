import { SiMysql } from '@icons-pack/react-simple-icons';
import { ReactElement } from 'react';

interface Props {
  size?: 24 | 48;
  color?: string;
}

const IconMySQL = (props: Props): ReactElement => {
  const { size, color } = props;
  return (
    <SiMysql
      size={size ?? 24}
      color={color ?? 'default'}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    />
  );
};

const icon = {
  name: 'MySQL',
  icon: IconMySQL,
};

export default icon;
