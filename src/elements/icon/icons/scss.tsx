import { SiSass } from '@icons-pack/react-simple-icons';
import { ReactElement } from 'react';

interface Props {
  size?: 24 | 48;
  color?: string;
}

const IconSass = (props: Props): ReactElement => {
  const { size, color } = props;
  return (
    <SiSass
      size={size ?? 24}
      color={color ?? 'default'}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    />
  );
};

const icon = {
  name: 'Scss',
  icon: IconSass,
};

export default icon;
