import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const MoreInfoButton = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
    window.open(props?.to, '_blank');
  };
  return (
    <Link
      onClick={handleClick}
      className={`more-link ${props.className}`}
      {...props}
    >
      {props.text}
      <FontAwesomeIcon
        icon={['fas', 'long-arrow-alt-right']}
        className='icon'
      />
    </Link>
  );
};

export default MoreInfoButton;
