import React, { useEffect } from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import ServiceSection from './ServiceSection';
import PodcastSection from './PodcastSection';
import ServicesDetailSection from './ServicesDetailSection';
import CtaSection from './CtaSection';
import WhyUsSection from './WhyUsSection';
import TestimonialsSection from './TestimonialsSection';

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Think Growth - Marketing Agency';
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-white py-12 sm:py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 text-center">
            <h1 className="text-[100px] sm:text-[150px] md:text-[200px] lg:text-[300px] xl:text-[400px] font-bricolage font-extralight uppercase text-black leading-none tracking-tight">
              THINK.
            </h1>

            <div className="flex flex-col md:flex-row justify-center gap-4 mt-4">
              <div className="bg-primary-orange rounded-lg py-4 px-8">
                <span className="text-4xl md:text-6xl font-sf-pro font-medium uppercase text-white">
                  LOUD
                </span>
              </div>

              <div className="bg-primary-orange rounded-lg py-4 px-8">
                <span className="text-4xl md:text-6xl font-sf-pro font-medium uppercase text-white">
                  FAST
                </span>
              </div>

              <div className="bg-primary-orange rounded-lg py-4 px-8">
                <span className="text-4xl md:text-6xl font-sf-pro font-medium uppercase text-white">
                  GROWTH
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Banner */}
        <section className="bg-primary-dark py-8">
          <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
            <div>
              <h2 className="text-xl md:text-2xl font-open-sans font-semibold text-white">
                25+ Brands Launched Right—with Our GTM
              </h2>
              <p className="text-lg md:text-xl font-sf-pro font-light text-white mt-1">
                Your go-to-market partner for launches that dominate.
              </p>
            </div>

            <button
              className="mt-4 md:mt-0 bg-white text-primary-dark rounded-full py-3 px-6 font-sf-pro font-semibold"
              onClick={() => {
                // Scroll to contact form or open modal
                console.log('Launch GTM clicked');
              }}
            >
              Launch Your GTM With Us →
            </button>
          </div>
        </section>

        {/* Services Section */}
        <ServiceSection />

        {/* Podcast Section */}
        <PodcastSection />

        {/* Services Detail Section */}
        <ServicesDetailSection />

        {/* CTA Section */}
        <CtaSection />

        {/* Why Us Section */}
        <WhyUsSection />

        {/* Testimonials Section */}
        <TestimonialsSection />
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
