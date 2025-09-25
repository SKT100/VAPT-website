import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Eye, Globe, Smartphone, Server, AlertTriangle, Cloud } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Services = () => {
  const { toast } = useToast();
  
  const handleLearnMore = (serviceName: string) => {
    toast({
      title: "Learn More",
      description: `Contact us to learn more about our ${serviceName} services.`,
    });
    
    // Scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCustomSolution = () => {
    toast({
      title: "Custom Security Solution",
      description: "Let's discuss your specific security needs. Redirecting to contact form...",
    });
    
    // Scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const services = [
    {
      icon: Shield,
      title: "VAPT Services",
      description: "Comprehensive security testing to identify and remediate vulnerabilities in your systems before attackers can exploit.",
      features: ["Network Security Testing", "Web Application Testing", "Mobile App Security", "API Security Assessment"],
      color: "primary"
    },
    // {
    //   icon: Eye,
    //   title: "Security Operations Center (SOC)",
    //   description: "24/7 monitoring and incident response services to detect, analyze, and respond to security threats in real-time.",
    //   features: ["Real-time Monitoring", "Threat Intelligence", "Incident Response", "Compliance Reporting"],
    //   color: "secondary"
    // },
    {
      icon: Globe,
      title: "Web Application Security",
      description: "Protect your web applications from OWASP Top 10 vulnerabilities and advanced cyber threats.",
      features: ["OWASP Testing", "SQL Injection Protection", "XSS Prevention", "Security Code Review"],
      color: "primary"
    },
    {
      icon: Smartphone,
      title: "Mobile Application Security",
      description: "Comprehensive security testing for iOS and Android applications to ensure data protection and user privacy.",
      features: ["Static Code Analysis", "Dynamic Testing", "Binary Analysis", "Privacy Assessment"],
      color: "secondary"
    },
    {
      icon: Server,
      title: "Infrastructure Security",
      description: "Secure your IT infrastructure with comprehensive assessment and hardening services.",
      features: ["Network Architecture", "Server Hardening", "Cloud Security", "Access Control"],
      color: "primary"
    },
    {
      icon: AlertTriangle,
      title: "Incident Response & Forensics",
      description: "Rapid response to security incidents with detailed forensic analysis and recovery planning.",
      features: ["Emergency Response", "Digital Forensics", "Malware Analysis", "Recovery Planning"],
      color: "secondary"
    },
    {
      icon: Cloud,
      title: "Cloud Security",
      description: "Comprehensive cloud security solutions to protect your data, applications, and infrastructure in the cloud.",
      features: ["AWS/Azure/GCP Security", "Cloud Compliance", "Container Security", "DevSecOps Integration"],
      color: "primary"
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Our </span>
            <span className="text-gradient-primary">Cybersecurity</span>
            <span className="text-foreground"> Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive security solutions designed to protect your business from evolving cyber threats
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="service-card group h-full">
              <CardHeader className="pb-4">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${
                  service.color === 'primary' 
                    ? 'bg-primary/10 text-primary group-hover:bg-primary/20' 
                    : 'bg-secondary/10 text-secondary group-hover:bg-secondary/20'
                } transition-colors duration-300`}>
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className={`w-1.5 h-1.5 rounded-full mr-3 ${
                        service.color === 'primary' ? 'bg-primary' : 'bg-secondary'
                      }`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant={service.color === 'primary' ? 'hero' : 'cyber'} 
                  className="w-full mt-6"
                  onClick={() => handleLearnMore(service.title)}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="professional" 
            className="px-8"
            onClick={handleCustomSolution}
          >
            Request Custom Security Solution
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;