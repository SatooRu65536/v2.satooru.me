import { SiSvelte } from '@icons-pack/react-simple-icons';
import { ReactElement } from 'react';

interface Props {
  size?: 24 | 48;
  color?: string;
}

const IconSvelte = (props: Props): ReactElement => {
  const { size, color } = props;
  return (
    <SiSvelte
      size={size ?? 24}
      color={color ?? 'default'}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    />
  );
};

const icon = {
  name: 'Svelte',
  icon: IconSvelte,
};

export default icon;
