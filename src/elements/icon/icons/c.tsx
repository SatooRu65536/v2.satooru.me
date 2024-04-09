import { SiC } from '@icons-pack/react-simple-icons';
import { ReactElement } from 'react';

interface Props {
  size?: 24 | 48;
  color?: string;
}

const IconC = (props: Props): ReactElement => {
  const { size, color } = props;
  return (
    <SiC
      size={size ?? 24}
      color={color ?? 'default'}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    />
  );
};

const icon = {
  name: 'C',
  icon: IconC,
};

export default icon;
