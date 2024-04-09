import { SiNextdotjs } from '@icons-pack/react-simple-icons';
import { ReactElement } from 'react';

interface Props {
  size?: 24 | 48;
  color?: string;
}

const IconNextjs = (props: Props): ReactElement => {
  const { size, color } = props;
  return (
    <SiNextdotjs
      size={size ?? 24}
      color={color ?? 'default'}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    />
  );
};

const icon = {
  name: 'Next.js',
  icon: IconNextjs,
};

export default icon;
