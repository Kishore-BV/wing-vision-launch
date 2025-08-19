import { useState, useEffect } from "react";
import EnquiryForm from "@/components/EnquiryForm";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Banner Section */}
      <section className="relative h-[60vh] sm:h-[70vh] md:h-screen overflow-hidden">
        <iframe 
          src='https://my.spline.design/drone-7k04A1eWZsF2RwZjhVEul3Sj/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          className="absolute inset-0 w-full h-full"
        ></iframe>
      </section>

      {/* About Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className={`container mx-auto px-4 sm:px-6 max-w-4xl transition-all duration-1000 ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`}>
          <div className="text-center">
            {/* Company Logo Text */}
            <div className="text-primary text-3xl sm:text-4xl md:text-5xl font-black tracking-wider mb-3 sm:mb-4">
              WINGSENSE
            </div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-foreground px-2">
              Wingsense Dynamics Private Limited
            </h1>
            <p className="text-base sm:text-lg md:text-xl italic mb-6 sm:mb-8 text-accent font-medium">
              Your Vision, Our Wings.
            </p>
            
            <div className="max-w-2xl mx-auto px-2">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Wingsense Dynamics is at the forefront of drone technology innovation, 
                providing cutting-edge aerial solutions for agriculture, surveillance, 
                mapping, and industrial applications. Our advanced drone systems combine 
                precision engineering with intelligent software to deliver unmatched 
                performance and reliability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-background to-muted/20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 px-2">
              Get in Touch
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground px-2">
              Ready to explore drone solutions for your business? 
              Contact us to discuss your requirements.
            </p>
          </div>
          
          <div className="flex justify-center">
            <EnquiryForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;