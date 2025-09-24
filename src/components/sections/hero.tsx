import { Button } from "@/components/ui/button";
import { Shield, Lock, Eye, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="hero-section min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground">Secure Your</span>{" "}
                <span className="text-gradient-primary">Digital Future</span>{" "}
                <span className="text-foreground">with</span>{" "}
                <span className="text-gradient-secondary">Expert Cybersecurity</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Professional cybersecurity services including VAPT, SOC monitoring, 
                web & application security. Protect your business with industry-leading expertise.
              </p>
            </div>

            {/* Service Highlights */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex items-center space-x-2 text-sm">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">VAPT Services</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Eye className="h-5 w-5 text-secondary" />
                <span className="text-muted-foreground">SOC Monitoring</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Lock className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">Web Security</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Zap className="h-5 w-5 text-secondary" />
                <span className="text-muted-foreground">24/7 Support</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="hero" className="text-lg px-8 py-6">
                Get Security Assessment
              </Button>
              <Button size="lg" variant="professional" className="text-lg px-8 py-6">
                Learn More
              </Button>
            </div>

            {/* Certifications */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Certified by:</span> NASSCOM, ISO 27001
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              <div className="cyber-border rounded-2xl p-8 bg-gradient-to-br from-card/50 to-muted/30 backdrop-blur-sm">
                <div className="space-y-6">
                  <div className="text-center">
                    <Shield className="h-20 w-20 text-primary mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gradient-primary">
                      Enterprise Security
                    </h3>
                    <p className="text-muted-foreground mt-2">
                      Comprehensive protection for your digital assets
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                      <span className="text-sm">Threat Detection</span>
                      <span className="text-secondary font-semibold">99.9%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                      <span className="text-sm">Response Time</span>
                      <span className="text-primary font-semibold">&lt; 5min</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                      <span className="text-sm">Uptime SLA</span>
                      <span className="text-secondary font-semibold">99.99%</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-primary/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-secondary/20 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;