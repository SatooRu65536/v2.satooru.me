import { SiNodedotjs } from '@icons-pack/react-simple-icons';
import { ReactElement } from 'react';

interface Props {
  size?: 24 | 48;
  color?: string;
}

const IconNodejs = (props: Props): ReactElement => {
  const { size, color } = props;
  return (
    <SiNodedotjs
      size={size ?? 24}
      color={color ?? 'default'}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    />
  );
};

const icon = {
  name: 'Node.js',
  icon: IconNodejs,
};

export default icon;
