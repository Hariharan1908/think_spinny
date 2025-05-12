import React from 'react';
import Button from '../../components/ui/Button';

const PodcastSection = () => {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-sf-pro font-bold text-primary-dark text-center mb-8 sm:mb-10 lg:mb-12">
          ThinkGrowth: The No-Nonsense Marketing Podcast
          <br />
          <span className="font-normal text-base sm:text-lg lg:text-xl">
            Real insights. No fluff. Just what's working
          </span>
        </h2>

        <div className="bg-primary-gray-100 rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="bg-primary-orange inline-block px-3 py-1 sm:px-4 rounded-xl mb-3 sm:mb-4">
                <span className="text-xs sm:text-sm font-sf-pro font-bold text-white">Eps. 1</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-sf-pro font-bold text-primary-dark mb-4 sm:mb-6">
                Thinking of becoming an Analytics expert?
              </h3>

              <p className="text-sm sm:text-base text-primary-gray-500 mb-5 sm:mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.
                Lorem ipsum dolor sit amet, consectetur.
              </p>

              <Button variant="secondary" size="medium" rounded="full">
                Watch Now
              </Button>

              <div className="mt-8 sm:mt-10 lg:mt-12">
                <img
                  src="/images/img_frame_1000011503.svg"
                  alt="Podcast graphic"
                  className="w-32 sm:w-40 lg:w-48 h-auto"
                />
              </div>
            </div>

            <div className="relative min-h-[250px] sm:min-h-[300px] md:min-h-0">
              <img
                src="/images/img_image_3.png"
                alt="Podcast host"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 flex flex-wrap justify-center gap-6 sm:gap-8">
          <img src="/images/img_rectangle_36.png" alt="Client logo" className="h-10 sm:h-12" />
          <img src="/images/img_rectangle_44.png" alt="Client logo" className="h-8 sm:h-9" />
          <img src="/images/img_rectangle_38.png" alt="Client logo" className="h-9 sm:h-10" />
          <img src="/images/img_rectangle_45.png" alt="Client logo" className="h-10 sm:h-12" />
          <img src="/images/img_rectangle_43.png" alt="Client logo" className="h-10 sm:h-12" />
          <img src="/images/img_rectangle_41.png" alt="Client logo" className="h-9 sm:h-10" />
        </div>
      </div>
    </section>
  );
};

export default PodcastSection;
