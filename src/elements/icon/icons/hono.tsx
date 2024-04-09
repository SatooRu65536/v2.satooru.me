import { SiHono } from '@icons-pack/react-simple-icons';
import { ReactElement } from 'react';

interface Props {
  size?: 24 | 48;
  color?: string;
}

const IconHono = (props: Props): ReactElement => {
  const { size, color } = props;
  return (
    <SiHono
      size={size ?? 24}
      color={color ?? 'default'}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    />
  );
};

const icon = {
  name: 'Hono',
  icon: IconHono,
};

export default icon;
