import React from 'react';
import Button from '../../components/ui/Button';

const CtaSection = () => {
  return (
    <section className="bg-primary-dark py-16">
      <div className="container mx-auto px-4 text-center">
        <div className="overflow-hidden">
          <div className="text-5xl font-hanken font-light text-white uppercase tracking-[7px] opacity-80 whitespace-nowrap">
            We don't follow trends. We break them. We don't follow trends. We break them. We don't follow trends. We break them. We don't follow trends. We break them. We don't follow trends. We break them. We don't follow trends. We break them. We don't follow trends. We break them.
          </div>
        </div>
        
        <div className="mt-8 mb-16">
          <h2 className="text-4xl font-bricolage font-medium text-white mb-8">
            No one else does it like we do.<br />
            Ready to transform your brand?
          </h2>
          
          <Button 
            variant="white" 
            size="large" 
            rounded="full"
            className="mt-4"
          >
            Let's build your growth plan today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;