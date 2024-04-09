import { SiHtml5 } from '@icons-pack/react-simple-icons';
import { ReactElement } from 'react';

interface Props {
  size?: 24 | 48;
  color?: string;
}

const IconHTML = (props: Props): ReactElement => {
  const { size, color } = props;
  return (
    <SiHtml5
      size={size ?? 24}
      color={color ?? 'default'}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    />
  );
};

const icon = {
  name: 'HTML',
  icon: IconHTML,
};

export default icon;
