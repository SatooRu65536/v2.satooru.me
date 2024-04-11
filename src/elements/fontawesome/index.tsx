import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

const IconsMap = {
  faUpRightFromSquare,
} as const;

export type AwesomeIconKey = keyof typeof IconsMap;

interface Props extends Omit<FontAwesomeIconProps, 'icon'> {
  iconKey: AwesomeIconKey;
}

const Fontawesome = (props: Props) => {
  const { iconKey, ...rest } = props;
  const icon = IconsMap[iconKey];

  return <FontAwesomeIcon {...rest} icon={icon} />;
};

export default Fontawesome;
