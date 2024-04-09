import { SiRaspberrypi } from '@icons-pack/react-simple-icons';
import { ReactElement } from 'react';

interface Props {
  size?: 24 | 48;
  color?: string;
}

const IconRaspberrypi = (props: Props): ReactElement => {
  const { size, color } = props;
  return (
    <SiRaspberrypi
      size={size ?? 24}
      color={color ?? 'default'}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    />
  );
};

const icon = {
  name: 'Raspberry Pi',
  icon: IconRaspberrypi,
};

export default icon;
