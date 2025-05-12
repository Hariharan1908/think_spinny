import React from 'react';
import Card from '../../components/common/Card';

const ServicesDetailSection = () => {
  const services = [
    {
      id: 1,
      title: 'Autopilot — Only Impact',
      description:
        'We calculate every move for maximum results. Performance marketing is our DNA—constantly optimized, always delivering stronger.',
      image: '/images/img_image_219x219.png',
      background: 'bg-background-lightest',
    },
    {
      id: 2,
      title: 'Inbound That Converts',
      description:
        'From SEO to content, we attract, engage, and convert—no guesswork, just smart, scalable growth.',
      image: '/images/img_2.png',
      background: 'bg-background-lighter',
    },
    {
      id: 3,
      title: 'Competitor Analysis? We Lead',
      description:
        'We dissect competitors, spot gaps, and position your brand ahead—always two steps forward.',
      image: '/images/img_image_1.png',
      background: 'bg-background-lightest',
    },
    {
      id: 4,
      title: 'Messaging That Sticks',
      description:
        'We craft sharp, audience-first content that turns heads, drives clicks, and fuels conversions.',
      image: '/images/img_image_2.png',
      background: 'bg-background-lighter',
    },
    {
      id: 5,
      title: 'Sales + Marketing = Growth',
      description: 'Seamless lead generation and nurturing to maximize ROI and fuel your funnel.',
      image: '/images/img_image_4.png',
      background: 'bg-background-lightest',
    },
    {
      id: 6,
      title: 'Data That Delivers',
      description:
        'We turn scattered insights into a performance engine—evolving strategies, lasting results.',
      image: '/images/img_2.png',
      background: 'bg-background-lighter',
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
          {/* Left column - Vision */}
          <div className="md:col-span-5 bg-primary-dark p-12 flex items-center">
            <h2 className="text-5xl font-sf-pro font-bold text-white leading-tight">
              Turn Your
              <br />
              Vision into
              <br />
              Action
            </h2>
          </div>

          {/* Right column - WE */}
          <div className="md:col-span-7 bg-background-light p-12">
            <div className="flex flex-col md:flex-row items-start">
              <h2 className="text-[64px] sm:text-[96px] md:text-[128px] lg:text-[192px] xl:text-[256px] font-sf-pro font-semibold text-primary-orange leading-none">
                WE
              </h2>
              <div className="mt-6 md:mt-12 md:ml-8">
                <p className="text-4xl font-sf-pro font-semibold text-primary-dark leading-tight">
                  Don't Just Plan
                  <br />
                  Execute
                  <br />
                  Transform
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Services list */}
        <div className="mt-0">
          {services.map((service) => (
            <div key={service.id} className={`${service.background} py-12`}>
              <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-start">
                  <div className="md:w-7/12 pr-8">
                    <h3 className="text-3xl font-sf-pro font-semibold text-primary-dark mb-6">
                      {service.title}
                    </h3>
                    <p className="text-lg font-sf-pro text-primary-dark/60 max-w-xl">
                      {service.description}
                    </p>
                  </div>
                  <div className="md:w-5/12 mt-8 md:mt-0">
                    <Card className="p-0 border-2 border-primary-gray-300 rounded-2xl overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-56 object-cover"
                      />
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesDetailSection;
