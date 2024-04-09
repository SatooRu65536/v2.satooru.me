import { SiAdobeaftereffects } from '@icons-pack/react-simple-icons';
import { ReactElement } from 'react';

interface Props {
  size?: 24 | 48;
  color?: string;
}

const IconAftereffects = (props: Props): ReactElement => {
  const { size, color } = props;
  return (
    <SiAdobeaftereffects
      size={size ?? 24}
      color={color ?? 'default'}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    />
  );
};

const icon = {
  name: 'After Effects',
  icon: IconAftereffects,
};

export default icon;
