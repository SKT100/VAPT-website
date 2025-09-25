import { Button } from "@/components/ui/button";
import { Shield, Lock, Eye, Zap } from "lucide-react";

const Hero = () => {
  const backgroundImageUrl = "/icons/bg-pattern.webp";

  return (
    <section className="hero-section min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 relative overflow-hidden">
      {/* Background Image Layer */}
      <div className="absolute inset-0 -z-20">
        <img 
          src={backgroundImageUrl}
          alt="Cybersecurity background design"
          className="w-full h-full object-cover object-center"
        />
        {/* Optional overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Pattern Overlay on top of image */}
      <div className="absolute inset-0 -z-10">
        {/* Subtle tech pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(90deg, transparent 49%, rgba(59, 130, 246, 0.3) 49%, rgba(59, 130, 246, 0.3) 51%, transparent 51%),
              linear-gradient(transparent 49%, rgba(59, 130, 246, 0.3) 49%, rgba(59, 130, 246, 0.3) 51%, transparent 51%)
            `,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        {/* Circuit-like pattern */}
        <div className="absolute inset-0 opacity-3">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 20% 20%, rgba(34, 197, 94, 0.4) 1px, transparent 1px),
              radial-gradient(circle at 80% 40%, rgba(59, 130, 246, 0.4) 1px, transparent 1px),
              radial-gradient(circle at 60% 80%, rgba(168, 85, 247, 0.4) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px, 120px 120px, 100px 100px'
          }}></div>
        </div>
      </div>
      
      <div className="container mx-auto relative z-10">
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
              <div className="absolute -top-8 -right-8 w-20 h-20 bg-primary/30 rounded-full animate-pulse glow-primary"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-secondary/30 rounded-full animate-pulse delay-1000 glow-secondary"></div>
              <div className="absolute top-1/2 -right-4 w-12 h-12 bg-accent/20 rounded-full animate-pulse delay-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;