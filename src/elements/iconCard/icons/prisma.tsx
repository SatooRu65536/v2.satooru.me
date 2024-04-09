import { SiPrisma } from '@icons-pack/react-simple-icons';
import { ReactElement } from 'react';

interface Props {
  size?: 24 | 48;
  color?: string;
}

const IconPrisma = (props: Props): ReactElement => {
  const { size, color } = props;
  return (
    <SiPrisma
      size={size ?? 24}
      color={color ?? 'default'}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    />
  );
};

const icon = {
  name: 'Prisma',
  icon: IconPrisma,
};

export default icon;
