import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img src="/images/img_group_15.svg" alt="Think Growth Logo" className="h-9 w-9" />
            <img src="/images/img_group_635.svg" alt="Think Growth" className="h-7 ml-2" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/about" className="text-sm font-sf-pro font-semibold text-primary-dark hover:text-primary-orange transition-colors">
            About us
          </Link>
          <Link to="/services" className="text-sm font-sf-pro font-semibold text-primary-dark hover:text-primary-orange transition-colors">
            Services
          </Link>
          <Link to="/use-cases" className="text-sm font-sf-pro font-semibold text-primary-dark hover:text-primary-orange transition-colors">
            Use Cases
          </Link>
          <Link to="/pricing" className="text-sm font-sf-pro font-semibold text-primary-dark hover:text-primary-orange transition-colors">
            Pricing
          </Link>
          <Link to="/blog" className="text-sm font-sf-pro font-semibold text-primary-dark hover:text-primary-orange transition-colors">
            Blog
          </Link>
          <Button 
            variant="outline" 
            size="small" 
            rounded="full" 
            className="ml-4 border border-primary-dark text-primary-dark"
          >
            Request a quote
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-md text-primary-dark"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden z-50">
            <div className="flex flex-col p-4 space-y-4">
              <Link to="/about" className="text-sm font-sf-pro font-semibold text-primary-dark hover:text-primary-orange transition-colors">
                About us
              </Link>
              <Link to="/services" className="text-sm font-sf-pro font-semibold text-primary-dark hover:text-primary-orange transition-colors">
                Services
              </Link>
              <Link to="/use-cases" className="text-sm font-sf-pro font-semibold text-primary-dark hover:text-primary-orange transition-colors">
                Use Cases
              </Link>
              <Link to="/pricing" className="text-sm font-sf-pro font-semibold text-primary-dark hover:text-primary-orange transition-colors">
                Pricing
              </Link>
              <Link to="/blog" className="text-sm font-sf-pro font-semibold text-primary-dark hover:text-primary-orange transition-colors">
                Blog
              </Link>
              <Button 
                variant="outline" 
                size="small" 
                rounded="full" 
                className="border border-primary-dark text-primary-dark"
              >
                Request a quote
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;