import { PropTypes } from 'prop-types';

const SocialLinkItem = ({link, children}) => {
    return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="mr-3 text-xl sm:text-2xl text-dimIcon hover:text-cyan-800"
    >
      {children}
    </a>
    )
}

SocialLinkItem.protoTypes = {
    children: protoTypes.component.isRequired,
    link: PropTypes.string.isRequired, 
}

export default SocialLinkItem;
