import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'medium', 
  className = '',
  rounded = 'default',
  type = 'button',
  ...props 
}) => {
  const baseClasses = 'font-sf-pro font-semibold transition-colors duration-200 inline-flex items-center justify-center';
  
  const variants = {
    primary: 'bg-primary-orange text-white hover:bg-orange-600',
    secondary: 'bg-primary-dark text-white hover:bg-gray-800',
    outline: 'border border-primary-dark text-primary-dark hover:bg-gray-100',
    white: 'bg-white text-primary-dark border border-primary-dark hover:bg-gray-100',
  };
  
  const sizes = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg',
  };
  
  const roundedOptions = {
    default: 'rounded',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    '2xl': 'rounded-2xl',
    full: 'rounded-full',
    none: '',
  };
  
  const buttonClasses = `
    ${baseClasses} 
    ${variants[variant]} 
    ${sizes[size]} 
    ${roundedOptions[rounded]}
    ${className}
  `;
  
  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'white']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  className: PropTypes.string,
  rounded: PropTypes.oneOf(['default', 'md', 'lg', 'xl', '2xl', 'full', 'none']),
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

export default Button;