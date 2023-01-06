import ChevronRightIcon from './ChevronRightIcon';
import StarIcon from './StarIcon';
export default function Icons(props) {
  const { name, className, fill } = props;

  switch (name) {
    case 'chevron-right':
      return <ChevronRightIcon className={className} fill={fill} />;
    case 'star':
      return <StarIcon className={className} fill={fill} />;
    default:
      throw new Error('Invalid icon name');
  }
}
