import { SiTypescript } from '@icons-pack/react-simple-icons';
import { ReactElement } from 'react';

interface Props {
  size?: 24 | 48;
  color?: string;
}

const IconTypeScript = (props: Props): ReactElement => {
  const { size, color } = props;
  return (
    <SiTypescript
      size={size ?? 24}
      color={color ?? 'default'}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    />
  );
};

const icon = {
  name: 'TypeScript',
  icon: IconTypeScript,
};

export default icon;
