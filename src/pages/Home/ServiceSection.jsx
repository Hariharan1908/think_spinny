import React from 'react';
import Card from '../../components/common/Card';

const ServiceSection = () => {
  return (
    <section className="bg-primary-orange py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Left Column - Story to Scale */}
          <div className="lg:col-span-1">
            <Card 
              className="h-full flex flex-col" 
              rounded="md" 
              padding="large"
            >
              <h2 className="text-3xl font-sf-pro font-bold text-primary-dark mb-6">
                From Story to Scale: We Cover Both Sides of Growth
              </h2>
              <p className="text-sm text-primary-gray-500 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Lorem ipsum dolor sit amet, consectetur.
              </p>
              <button className="mt-auto bg-primary-dark text-white py-2 px-6 rounded-full text-sm font-semibold">
                Grow With Us
              </button>
            </Card>
          </div>

          {/* Middle Column - Your GTM Strategist */}
          <div className="lg:col-span-1 flex flex-col">
            <h2 className="text-5xl md:text-6xl font-sf-pro font-bold text-white mb-8">
              Your GTM Strategist
            </h2>
            
            {/* Branding Card */}
            <Card 
              className="h-full flex flex-col" 
              rounded="md" 
              padding="large"
            >
              <div className="mb-6">
                <img 
                  src="/images/img_image_8.png" 
                  alt="Branding" 
                  className="w-full h-40 object-cover rounded-lg"
                />
              </div>
              
              <h3 className="text-xl font-sf-pro font-bold text-primary-dark text-center mb-4">
                Branding
              </h3>
              
              <hr className="border-t border-primary-gray-300 mb-4" />
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <img src="/images/img_check.svg" alt="Check" className="w-6 h-6 mr-2 flex-shrink-0" />
                  <span className="text-base font-sf-pro font-bold text-primary-dark">Social Media Management</span>
                </li>
                <li className="flex items-start">
                  <img src="/images/img_check.svg" alt="Check" className="w-6 h-6 mr-2 flex-shrink-0" />
                  <span className="text-base font-sf-pro font-bold text-primary-dark">Website Development</span>
                </li>
                <li className="flex items-start">
                  <img src="/images/img_check.svg" alt="Check" className="w-6 h-6 mr-2 flex-shrink-0" />
                  <span className="text-base font-sf-pro font-bold text-primary-dark">Personal Branding</span>
                </li>
                <li className="flex items-start">
                  <img src="/images/img_check.svg" alt="Check" className="w-6 h-6 mr-2 flex-shrink-0" />
                  <span className="text-base font-sf-pro font-bold text-primary-dark">Content Strategy</span>
                </li>
                <li className="flex items-start">
                  <img src="/images/img_check.svg" alt="Check" className="w-6 h-6 mr-2 flex-shrink-0" />
                  <span className="text-base font-sf-pro font-bold text-primary-dark">Brand Messaging</span>
                </li>
              </ul>
              
              <div className="mt-6 bg-primary-gray-200 p-4 rounded-lg flex items-start">
                <img 
                  src="/images/img_launch_your_gtm_with_us_5.png" 
                  alt="Radhika" 
                  className="w-6 h-6 mr-3 mt-1"
                />
                <div>
                  <p className="text-sm font-sf-pro font-semibold text-primary-dark">
                    Good branding sticks. Great branding scales
                  </p>
                  <p className="text-xs font-sf-pro font-semibold text-primary-gray-400 mt-1">
                    — Radhika
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column - Demand Generation */}
          <div className="lg:col-span-1">
            <Card 
              className="h-full flex flex-col" 
              rounded="md" 
              padding="large"
            >
              <div className="mb-6">
                <img 
                  src="/images/img_image.png" 
                  alt="Demand Generation" 
                  className="w-full h-40 object-cover rounded-lg"
                />
              </div>
              
              <h3 className="text-xl font-sf-pro font-bold text-primary-dark text-center mb-4">
                Demand Generation
              </h3>
              
              <hr className="border-t border-primary-gray-300 mb-4" />
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <img src="/images/img_check.svg" alt="Check" className="w-6 h-6 mr-2 flex-shrink-0" />
                  <span className="text-base font-sf-pro font-bold text-primary-dark">Google Ads</span>
                </li>
                <li className="flex items-start">
                  <img src="/images/img_check.svg" alt="Check" className="w-6 h-6 mr-2 flex-shrink-0" />
                  <span className="text-base font-sf-pro font-bold text-primary-dark">Social Ads</span>
                </li>
                <li className="flex items-start">
                  <img src="/images/img_check.svg" alt="Check" className="w-6 h-6 mr-2 flex-shrink-0" />
                  <span className="text-base font-sf-pro font-bold text-primary-dark">SEO</span>
                </li>
                <li className="flex items-start">
                  <img src="/images/img_check.svg" alt="Check" className="w-6 h-6 mr-2 flex-shrink-0" />
                  <span className="text-base font-sf-pro font-bold text-primary-dark">Analytics and CRM Integration</span>
                </li>
                <li className="flex items-start">
                  <img src="/images/img_check.svg" alt="Check" className="w-6 h-6 mr-2 flex-shrink-0" />
                  <span className="text-base font-sf-pro font-bold text-primary-dark">ABM</span>
                </li>
                <li className="flex items-start">
                  <img src="/images/img_check.svg" alt="Check" className="w-6 h-6 mr-2 flex-shrink-0" />
                  <span className="text-base font-sf-pro font-bold text-primary-dark">Email Marketing</span>
                </li>
              </ul>
              
              <div className="mt-6 bg-primary-gray-200 p-4 rounded-lg flex items-start">
                <img 
                  src="/images/img_launch_your_gtm_with_us_5_24x25.png" 
                  alt="Akshay" 
                  className="w-6 h-6 mr-3 mt-1"
                />
                <div>
                  <p className="text-sm font-sf-pro font-semibold text-primary-dark">
                    Growth isn't luck. It's a daily optimisation game.
                  </p>
                  <p className="text-xs font-sf-pro font-semibold text-primary-gray-400 mt-1">
                    — Akshay
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;