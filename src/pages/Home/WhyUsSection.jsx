import React from 'react';
import Card from '../../components/common/Card';

const WhyUsSection = () => {
  const benefits = [
    {
      id: 1,
      title: 'Always On, Always Optimising',
      description: 'We don\'t clock out. With 24/7 optimisation and real-time adaptability, your campaigns stay sharp, no matter the hour.',
      isLarge: true,
      isOrange: false
    },
    {
      id: 2,
      title: 'Built for the Long Haul',
      description: 'We\'re not here for a quick win. As your long-term partner, we\'re invested in your success, scaling with you every step of the way.',
      isLarge: false,
      isOrange: false
    },
    {
      id: 3,
      title: '',
      description: '',
      isLarge: false,
      isOrange: true,
      image: '/images/img_https_lottiefilescom_animations_socialiconsmarketing1wba3wogti.png'
    },
    {
      id: 4,
      title: '',
      description: '',
      isLarge: false,
      isOrange: true,
      image: '/images/img_https_lottiefilescom_animations_ideawbczuht1qp.png'
    },
    {
      id: 5,
      title: 'Not Freelancers, Full-Timers for Your Brand',
      description: 'No piecemeal efforts here. We\'re a dedicated extension of your team, laser-focused on achieving your goals.',
      isLarge: false,
      isOrange: false
    },
    {
      id: 6,
      title: 'Accountability Is Our Backbone',
      description: 'We own every success, every setback, and every decision. No passing the buck—just taking full responsibility for the results you deserve.',
      isLarge: false,
      isOrange: false
    },
    {
      id: 7,
      title: 'Always On, Always Optimising',
      description: 'We don\'t clock out. With 24/7 optimisation and real-time adaptability, your campaigns stay sharp, no matter the hour.',
      isLarge: false,
      isOrange: false
    }
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bricolage font-bold text-primary-dark mb-4">
            Why Choose Us?
          </h2>
          <p className="text-xl font-sf-pro text-primary-dark max-w-3xl mx-auto">
            We're not just another option – we're the game-changer you've been looking for.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <Card 
              key={benefit.id}
              className={`
                ${benefit.isLarge ? 'row-span-2' : ''}
                ${benefit.isOrange ? 'bg-primary-orange' : 'bg-primary-gray-200'}
                p-6 rounded-2xl h-full
              `}
            >
              {benefit.isOrange ? (
                <div className="flex items-center justify-center h-full">
                  <img 
                    src={benefit.image} 
                    alt="Illustration" 
                    className="w-auto h-auto max-h-full"
                  />
                </div>
              ) : (
                <div>
                  <h3 className="text-xl font-sf-pro font-bold text-primary-orange mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-base font-sf-pro text-[#68615a]">
                    {benefit.description}
                  </p>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;