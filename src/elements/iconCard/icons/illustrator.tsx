import { SiAdobeillustrator } from '@icons-pack/react-simple-icons';
import { ReactElement } from 'react';

interface Props {
  size?: 24 | 48;
  color?: string;
}

const IconIllustrator = (props: Props): ReactElement => {
  const { size, color } = props;
  return (
    <SiAdobeillustrator
      size={size ?? 24}
      color={color ?? 'default'}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    />
  );
};

const icon = {
  name: 'Illustrator',
  icon: IconIllustrator,
};

export default icon;
