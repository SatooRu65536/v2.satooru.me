import { SiRubyonrails } from '@icons-pack/react-simple-icons';
import { ReactElement } from 'react';

interface Props {
  size?: 24 | 48;
  color?: string;
}

const IconRails = (props: Props): ReactElement => {
  const { size, color } = props;
  return (
    <SiRubyonrails
      size={size ?? 24}
      color={color ?? 'default'}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    />
  );
};

const icon = {
  name: 'Ruby on Rails',
  icon: IconRails,
};

export default icon;
