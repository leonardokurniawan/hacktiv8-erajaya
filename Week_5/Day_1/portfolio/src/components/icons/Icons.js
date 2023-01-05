import GitHubIcon from './GithubIcon';
import LinkedInIcon from './LinkedInIcon';
import CheckIcon from './CheckIcon';
import CheckShieldIcon from './CheckShieldIcon';

export default function Icons(props) {
  const { name, className, fill } = props;

  switch (name) {
    case 'github':
      return <GitHubIcon className={className} fill={fill} />;
    case 'linkedin':
      return <LinkedInIcon className={className} fill={fill} />;
    case 'check':
      return <CheckIcon className={className} fill={fill} />;
    case 'checkshield':
      return <CheckShieldIcon className={className} fill={fill} />;
    default:
      throw new Error('Invalid icon name');
  }
}
