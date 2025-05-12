import React from 'react';
import PropTypes from 'prop-types';

const Card = ({
  children,
  className = '',
  variant = 'default',
  padding = 'default',
  shadow = false,
  border = false,
  borderColor = 'gray',
  rounded = 'default',
  ...props
}) => {
  const baseClasses = 'bg-white';
  
  const variants = {
    default: 'bg-white',
    primary: 'bg-primary-orange',
    secondary: 'bg-primary-dark',
    light: 'bg-primary-gray-100',
    lighter: 'bg-primary-gray-200',
  };
  
  const paddingOptions = {
    none: '',
    small: 'p-3',
    default: 'p-6',
    large: 'p-8',
  };
  
  const roundedOptions = {
    none: '',
    default: 'rounded-lg',
    md: 'rounded-xl',
    lg: 'rounded-2xl',
    full: 'rounded-full',
  };
  
  const borderOptions = {
    gray: 'border border-primary-gray-300',
    dark: 'border border-primary-dark',
    orange: 'border border-primary-orange',
    'orange-light': 'border border-primary-orange/20',
  };
  
  const cardClasses = `
    ${baseClasses}
    ${variants[variant]}
    ${paddingOptions[padding]}
    ${rounded ? roundedOptions[rounded] : ''}
    ${shadow ? 'shadow-md' : ''}
    ${border ? borderOptions[borderColor] : ''}
    ${className}
  `;
  
  return (
    <div className={cardClasses} {...props}>
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'primary', 'secondary', 'light', 'lighter']),
  padding: PropTypes.oneOf(['none', 'small', 'default', 'large']),
  shadow: PropTypes.bool,
  border: PropTypes.bool,
  borderColor: PropTypes.oneOf(['gray', 'dark', 'orange', 'orange-light']),
  rounded: PropTypes.oneOf(['none', 'default', 'md', 'lg', 'full']),
};

export default Card;