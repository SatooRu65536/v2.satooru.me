import { SiCss3 } from '@icons-pack/react-simple-icons';
import { ReactElement } from 'react';

interface Props {
  size?: 24 | 48;
  color?: string;
}

const IconCSS3 = (props: Props): ReactElement => {
  const { size, color } = props;
  return (
    <SiCss3
      size={size ?? 24}
      color={color ?? 'default'}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    />
  );
};

const icon = {
  name: 'CSS3',
  icon: IconCSS3,
};

export default icon;
