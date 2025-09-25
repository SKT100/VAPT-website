import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Users, Clock, Globe } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, label: "Clients Secured", value: "500+", color: "primary" },
    { icon: Clock, label: "Years Experience", value: "10+", color: "secondary" },
    { icon: Award, label: "Security Audits", value: "1000+", color: "primary" },
    { icon: Globe, label: "Countries Served", value: "25+", color: "secondary" }
  ];

  const certifications = [
    "NASSCOM Member",
    "ISO 27001 Certified",
    "SOC 2 Type II",
    "GDPR Compliant",
    "OWASP Member",
    "CEH Certified Team",
    "JustDial 5 Star Rating",
    "Recognized by Silicon India",
    "Startup India Registered"
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                <span className="text-foreground">About </span>
                <span className="text-gradient-primary">Satts Cyber Tech</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Leading cybersecurity firm specializing in comprehensive security solutions for enterprises worldwide. 
                With over a decade of experience, we've secured hundreds of organizations across 25+ countries.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gradient-secondary">Our Mission</h3>
                <p className="text-muted-foreground">
                  To provide world-class cybersecurity services that protect businesses from evolving digital threats, 
                  enabling them to operate securely in the digital age.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-gradient-primary">Our Expertise</h3>
                <p className="text-muted-foreground">
                  Our team of certified security professionals brings extensive experience in penetration testing, 
                  security monitoring, incident response, and compliance management across diverse industries.
                </p>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Certifications & Memberships</h3>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert, index) => (
                  <Badge key={index} variant="secondary" className="px-3 py-1">
                    {cert}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="service-card text-center">
                <CardHeader className="pb-2">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mx-auto mb-2 ${
                    stat.color === 'primary' 
                      ? 'bg-primary/10 text-primary' 
                      : 'bg-secondary/10 text-secondary'
                  }`}>
                    <stat.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className={`text-3xl font-bold ${
                    stat.color === 'primary' ? 'text-gradient-primary' : 'text-gradient-secondary'
                  }`}>
                    {stat.value}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="font-medium">
                    {stat.label}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-12">
            <span className="text-foreground">Why Choose </span>
            <span className="text-gradient-primary">Satts Cyber Tech?</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold">Expert Team</h4>
              <p className="text-muted-foreground">
                Certified cybersecurity professionals with proven industry experience
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                <Clock className="h-8 w-8 text-secondary" />
              </div>
              <h4 className="text-xl font-semibold">24/7 Support</h4>
              <p className="text-muted-foreground">
                Round-the-clock monitoring and incident response capabilities
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold">Global Reach</h4>
              <p className="text-muted-foreground">
                Serving clients across 25+ countries with local expertise
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;