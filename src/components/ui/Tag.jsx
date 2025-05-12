import React from 'react';
import PropTypes from 'prop-types';

const Tag = ({ 
  children, 
  variant = 'default', 
  size = 'medium',
  className = '',
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-sf-pro font-medium';
  
  const variants = {
    default: 'bg-primary-gray-200 text-primary-dark',
    primary: 'bg-primary-orange text-white',
    secondary: 'bg-primary-dark text-white',
    outline: 'border border-primary-gray-300 text-primary-dark',
  };
  
  const sizes = {
    small: 'px-2 py-1 text-xs rounded',
    medium: 'px-3 py-1.5 text-sm rounded-md',
    large: 'px-4 py-2 text-base rounded-lg',
  };
  
  const tagClasses = `
    ${baseClasses} 
    ${variants[variant]} 
    ${sizes[size]} 
    ${className}
  `;
  
  return (
    <span className={tagClasses} {...props}>
      {children}
    </span>
  );
};

Tag.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['default', 'primary', 'secondary', 'outline']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  className: PropTypes.string,
};

export default Tag;