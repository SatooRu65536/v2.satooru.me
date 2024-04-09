import { SiCloudflare } from '@icons-pack/react-simple-icons';
import { ReactElement } from 'react';

interface Props {
  size?: 24 | 48;
  color?: string;
}

const IconCloudflare = (props: Props): ReactElement => {
  const { size, color } = props;
  return (
    <SiCloudflare
      size={size ?? 24}
      color={color ?? 'default'}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    />
  );
};

const icon = {
  name: 'Cloudflare',
  icon: IconCloudflare,
};

export default icon;
