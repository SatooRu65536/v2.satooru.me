import { SiX } from '@icons-pack/react-simple-icons';
import { ReactElement } from 'react';

interface Props {
  size?: 24 | 48;
  color?: string;
}

const IconX = (props: Props): ReactElement => {
  const { size, color } = props;
  return (
    <SiX
      size={size ?? 24}
      color={color ?? 'default'}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    />
  );
};

const icon = {
  name: 'X',
  icon: IconX,
};

export default icon;
