import { SiPython } from '@icons-pack/react-simple-icons';
import { ReactElement } from 'react';

interface Props {
  size?: 24 | 48;
  color?: string;
}

const IconPython = (props: Props): ReactElement => {
  const { size, color } = props;
  return (
    <SiPython
      size={size ?? 24}
      color={color ?? 'default'}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    />
  );
};

const icon = {
  name: 'Python',
  icon: IconPython,
};

export default icon;
