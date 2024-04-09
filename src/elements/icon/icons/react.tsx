import { SiReact } from '@icons-pack/react-simple-icons';
import { ReactElement } from 'react';

interface Props {
  size?: 24 | 48;
  color?: string;
}

const IconReact = (props: Props): ReactElement => {
  const { size, color } = props;
  return (
    <SiReact
      size={size ?? 24}
      color={color ?? 'default'}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    />
  );
};

const icon = {
  name: 'React',
  icon: IconReact,
};

export default icon;
