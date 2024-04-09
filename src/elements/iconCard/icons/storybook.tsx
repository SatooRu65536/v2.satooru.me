import { SiStorybook } from '@icons-pack/react-simple-icons';
import { ReactElement } from 'react';

interface Props {
  size?: 24 | 48;
  color?: string;
}

const IconStorybook = (props: Props): ReactElement => {
  const { size, color } = props;
  return (
    <SiStorybook
      size={size ?? 24}
      color={color ?? 'default'}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    />
  );
};

const icon = {
  name: 'Storybook',
  icon: IconStorybook,
};

export default icon;
