import { SiFirebase } from '@icons-pack/react-simple-icons';
import { ReactElement } from 'react';

interface Props {
  size?: 24 | 48;
  color?: string;
}

const IconFirebase = (props: Props): ReactElement => {
  const { size, color } = props;
  return (
    <SiFirebase
      size={size ?? 24}
      color={color ?? 'default'}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    />
  );
};

const icon = {
  name: 'Firebase',
  icon: IconFirebase,
};

export default icon;
