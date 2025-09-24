import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "security@sattscybertech.com",
      subtitle: "Get in touch for inquiries"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      subtitle: "24/7 Emergency Response"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "123 Cyber Security Blvd",
      subtitle: "New York, NY 10001"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Get in </span>
            <span className="text-gradient-primary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to secure your business? Contact our cybersecurity experts for a consultation.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="service-card text-center">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    index === 0 
                      ? 'bg-primary/10 text-primary' 
                      : index === 1
                      ? 'bg-secondary/10 text-secondary'
                      : 'bg-destructive/10 text-destructive'
                  }`}>
                    <info.icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-bold text-xl mb-2">{info.title}</h3>
                  <p className="text-foreground font-semibold text-lg mb-1">{info.details}</p>
                  <p className="text-muted-foreground">{info.subtitle}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Emergency Contact - Full Width */}
          <Card className="service-card bg-gradient-to-r from-red-500/10 to-orange-500/10 border-red-500/20 mt-8">
            <CardContent className="p-8 text-center">
              <h3 className="font-bold text-2xl text-red-400 mb-3">Security Emergency?</h3>
              <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto">
                For immediate security incidents, call our 24/7 emergency response team
              </p>
              <Button variant="destructive" size="lg" className="text-lg px-8 py-6">
                Emergency Hotline: +1 (555) 911-CYBER
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;