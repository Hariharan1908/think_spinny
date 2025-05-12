import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white pt-10 pb-0">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-start">
          <div className="mb-8">
            <h2 className="text-[48px] sm:text-[72px] md:text-[96px] lg:text-[120px] xl:text-[136px] font-sf-pro font-medium text-primary-dark leading-tight">
              Think Growth
            </h2>
            <div className="flex flex-wrap mt-4 text-primary-dark/80 text-xl tracking-[3px]">
              <span className="mr-2">Chandigarh</span>
              <span className="mx-2">|</span>
              <span className="mx-2">Puducherry</span>
              <span className="mx-2">|</span>
              <span className="ml-2">Dubai</span>
            </div>
          </div>

          <div className="flex justify-end w-full">
            <div className="flex flex-wrap gap-4">
              <img
                src="/images/img_launch_your_gtm_with_us_1.png"
                alt="Team member"
                className="w-[85px] h-[90px] rounded-full object-cover"
              />
              <img
                src="/images/img_launch_your_gtm_with_us_5_24x25.png"
                alt="Team member"
                className="w-[85px] h-[90px] rounded-full object-cover"
              />
              <img
                src="/images/img_launch_your_gtm_with_us_5.png"
                alt="Team member"
                className="w-[85px] h-[90px] rounded-full object-cover"
              />
              <img
                src="/images/img_launch_your_gtm_with_us_2.png"
                alt="Team member"
                className="w-[85px] h-[90px] rounded-full object-cover"
              />
              <img
                src="/images/img_launch_your_gtm_with_us_3.png"
                alt="Team member"
                className="w-[85px] h-[90px] rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary-dark mt-10">
        <div className="container mx-auto px-4 py-4 flex flex-wrap justify-between items-center">
          <div className="flex space-x-2">
            <a href="#" className="w-8 h-8 bg-white/10 rounded flex items-center justify-center">
              <img src="/images/img_vector.svg" alt="Social icon" className="w-3 h-3" />
            </a>
            <a href="#" className="w-8 h-8 bg-white/10 rounded flex items-center justify-center">
              <img src="/images/img_vector_12x12.svg" alt="Social icon" className="w-3 h-3" />
            </a>
            <a href="#" className="w-8 h-8 bg-white/10 rounded flex items-center justify-center">
              <img src="/images/img_vector_11x12.svg" alt="Social icon" className="w-3 h-3" />
            </a>
            <a href="#" className="w-8 h-8 bg-white/10 rounded flex items-center justify-center">
              <img src="/images/img_vector_1.svg" alt="Social icon" className="w-3 h-3" />
            </a>
          </div>

          <div className="flex text-white/80 text-sm space-x-2">
            <Link to="/privacy">Privacy policy</Link>
            <span>|</span>
            <Link to="/terms">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
