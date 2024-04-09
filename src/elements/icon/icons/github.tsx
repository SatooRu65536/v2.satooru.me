import { SiGithub } from '@icons-pack/react-simple-icons';
import { ReactElement } from 'react';

interface Props {
  size?: 24 | 48;
  color?: string;
}

const IconGitHub = (props: Props): ReactElement => {
  const { size, color } = props;
  return (
    <SiGithub
      size={size ?? 24}
      color={color ?? 'default'}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    />
  );
};

const icon = {
  name: 'GitHub',
  icon: IconGitHub,
};

export default icon;
