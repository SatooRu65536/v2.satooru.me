import { SiNestjs } from '@icons-pack/react-simple-icons';
import { ReactElement } from 'react';

interface Props {
  size?: 24 | 48;
  color?: string;
}

const IconNestjs = (props: Props): ReactElement => {
  const { size, color } = props;
  return (
    <SiNestjs
      size={size ?? 24}
      color={color ?? 'default'}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    />
  );
};

const icon = {
  name: 'Nestjs',
  icon: IconNestjs,
};

export default icon;
