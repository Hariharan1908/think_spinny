import React, { useState } from 'react';

const TestimonialsSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      content: "We\'re not just another option – we\'re the game-changer you\'ve been looking for.",
      image: "/images/img_screenshot_20250506_at_43924pm_2.png",
      name: "Client Name",
      position: "CEO, Company"
    },
    {
      id: 2,
      content: "We\'re not just another option – we\'re the game-changer you\'ve been looking for.",
      image: "/images/img_screenshot_20250506_at_43924pm_2_475x383.png",
      name: "Another Client",
      position: "Marketing Director, Company"
    }
  ];
  
  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-primary-dark py-16 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Left side - Emoji */}
          <div className="md:col-span-3 flex justify-center md:justify-start">
            <img 
              src="/images/img_emoji_emoticon_smiley_smile_grin_happy_face_emotion_2.svg" 
              alt="Happy emoji" 
              className="w-40 h-40"
            />
          </div>
          
          {/* Middle - Testimonial */}
          <div className="md:col-span-6 relative">
            <div className="relative">
              <img 
                src="/images/img_rectangle_50.svg" 
                alt="Testimonial background" 
                className="absolute top-0 left-0 w-full h-full"
              />
              <img 
                src={testimonials[activeSlide].image} 
                alt="Client testimonial" 
                className="relative z-10 w-full h-auto rounded-2xl"
              />
            </div>
          </div>
          
          {/* Right side - CTA */}
          <div className="md:col-span-3">
            <div className="bg-primary-orange p-8 rounded-b-2xl h-full">
              <h3 className="text-4xl font-sf-pro font-medium text-white mb-6">
                Hear From Our Happy Clients
              </h3>
              <p className="text-xl font-sf-pro text-white">
                We're not just another option – we're the game-changer you've been looking for.
              </p>
            </div>
          </div>
        </div>
        
        {/* Second testimonial row */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Left side - CTA */}
          <div className="md:col-span-4 md:col-start-2">
            <div className="bg-primary-orange p-8 rounded-b-2xl h-full">
              <h3 className="text-4xl font-sf-pro font-medium text-white mb-6">
                Hear From Our Happy Clients
              </h3>
              <p className="text-xl font-sf-pro text-white">
                We're not just another option – we're the game-changer you've been looking for.
              </p>
            </div>
          </div>
          
          {/* Right side - Testimonial */}
          <div className="md:col-span-6 relative">
            <div className="relative">
              <img 
                src="/images/img_rectangle_50.svg" 
                alt="Testimonial background" 
                className="absolute top-0 left-0 w-full h-full"
              />
              <img 
                src={testimonials[(activeSlide + 1) % testimonials.length].image} 
                alt="Client testimonial" 
                className="relative z-10 w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
        
        {/* Navigation buttons */}
        <div className="flex justify-center mt-8 space-x-4">
          <button 
            onClick={prevSlide}
            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={nextSlide}
            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Decorative element */}
      <img 
        src="/images/img_spark_sparkle_26.svg" 
        alt="Sparkle decoration" 
        className="absolute right-0 bottom-0 w-60 h-60 opacity-50"
      />
    </section>
  );
};

export default TestimonialsSection;