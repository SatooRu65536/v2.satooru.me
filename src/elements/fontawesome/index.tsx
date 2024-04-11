import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IconsMap = {
  faUpRightFromSquare,
} as const;

export type AwesomeIconKey = keyof typeof IconsMap;

interface Props {
  iconKey: AwesomeIconKey;
}

const Fontawesome = (props: Props) => {
  const { iconKey } = props;
  const icon = IconsMap[iconKey];

  return <FontAwesomeIcon icon={icon} />;
};

export default Fontawesome;
