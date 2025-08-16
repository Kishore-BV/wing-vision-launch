import { useState, useEffect } from "react";
import EnquiryForm from "@/components/EnquiryForm";
import heroBackground from "@/assets/hero-background.jpg";
import { Button } from "@/components/ui/button";
import { ArrowDown, Zap, Eye, Shield, Cpu } from "lucide-react";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToForm = () => {
    document.getElementById('enquiry-form')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-overlay"></div>
        
        {/* Content */}
        <div className={`relative z-10 text-center text-white px-4 max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`}>
          {/* Logo Text */}
          <div className="mb-8 animate-float">
            <div className="text-primary text-3xl md:text-4xl font-black tracking-wider drop-shadow-lg">
              WINGSENSE
            </div>
          </div>

          {/* Company Name */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-wide">
            WINGSENSE
          </h1>
          <p className="text-xl md:text-2xl font-light mb-2 tracking-wider">
            DYNAMICS PRIVATE LIMITED
          </p>
          
          {/* Tagline */}
          <p className="text-lg md:text-xl italic mb-8 text-accent font-medium">
            Your Vision, Our Wings.
          </p>

          {/* Coming Soon */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-sky">
              Coming Soon
            </h2>
            <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Revolutionary drone solutions for agriculture, surveillance, mapping, and beyond. 
              Preparing to launch cutting-edge technology that will transform how you see the world.
            </p>
          </div>

          {/* CTA Button */}
          <Button 
            onClick={scrollToForm}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg font-semibold shadow-glow hover:shadow-glow/80 transition-all duration-300 animate-slideUp"
          >
            Get Early Access
            <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
          </Button>
        </div>
      </section>

      {/* Features Preview Section */}
      <section className="py-20 bg-gradient-to-br from-sky/10 to-accent/10">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What's Coming
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <Eye className="h-8 w-8" />,
                title: "Precision Agriculture",
                description: "Advanced crop monitoring and yield optimization"
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Security Solutions", 
                description: "Intelligent surveillance and perimeter monitoring"
              },
              {
                icon: <Zap className="h-8 w-8" />,
                title: "Real-time Analytics",
                description: "Instant data processing and actionable insights"
              },
              {
                icon: <Cpu className="h-8 w-8" />,
                title: "AI-Powered Flight",
                description: "Autonomous navigation and smart obstacle avoidance"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:shadow-soft transition-all duration-300"
              >
                <div className="flex justify-center mb-4 text-primary">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Form Section */}
      <section id="enquiry-form" className="py-20 bg-gradient-to-br from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Soar?
            </h3>
            <p className="text-lg text-muted-foreground">
              Be among the first to experience the future of drone technology. 
              Drop us your details and we'll keep you updated on our launch.
            </p>
          </div>
          
          <div className="flex justify-center">
            <EnquiryForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="text-white text-xl font-black tracking-wider mb-4">
            WINGSENSE
          </div>
          <p className="text-lg font-medium mb-2">Wingsense Dynamics Private Limited</p>
          <p className="text-sm opacity-90">Your Vision, Our Wings.</p>
          <p className="text-xs opacity-75 mt-4">© 2024 Wingsense Dynamics. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;