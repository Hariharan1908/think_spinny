import React from 'react';
import PropTypes from 'prop-types';
import Button from '../ui/Button';

const HeroSection = ({ 
  title, 
  subtitle, 
  ctaText, 
  ctaLink, 
  backgroundImage,
  backgroundOverlay = false,
  textColor = 'dark',
  size = 'large',
  className = '',
}) => {
  const baseClasses = 'w-full flex flex-col items-center justify-center text-center px-4';
  
  const sizeOptions = {
    small: 'py-16',
    medium: 'py-24',
    large: 'py-32',
    xlarge: 'py-40',
  };
  
  const textColorOptions = {
    dark: 'text-primary-dark',
    light: 'text-white',
    orange: 'text-primary-orange',
  };
  
  const sectionClasses = `
    ${baseClasses}
    ${sizeOptions[size]}
    ${textColorOptions[textColor]}
    ${className}
    relative
  `;
  
  const backgroundStyle = backgroundImage ? {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  } : {};
  
  return (
    <section className={sectionClasses} style={backgroundStyle}>
      {backgroundOverlay && (
        <div className="absolute inset-0 bg-black/50 z-0"></div>
      )}
      
      <div className="container mx-auto relative z-10">
        {title && (
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">{title}</h1>
        )}
        
        {subtitle && (
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">{subtitle}</p>
        )}
        
        {ctaText && (
          <Button 
            variant={textColor === 'light' ? 'primary' : 'secondary'} 
            size="large" 
            rounded="lg"
            onClick={() => window.location.href = ctaLink}
          >
            {ctaText}
          </Button>
        )}
      </div>
    </section>
  );
};

HeroSection.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  ctaText: PropTypes.string,
  ctaLink: PropTypes.string,
  backgroundImage: PropTypes.string,
  backgroundOverlay: PropTypes.bool,
  textColor: PropTypes.oneOf(['dark', 'light', 'orange']),
  size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']),
  className: PropTypes.string,
};

export default HeroSection;