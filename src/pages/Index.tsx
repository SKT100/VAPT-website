import Navigation from "@/components/ui/navigation";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Services from "@/components/sections/services";
import Contact from "@/components/sections/contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <span className="text-2xl font-bold text-gradient-primary">
                Satts Cyber Tech
              </span>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Professional cybersecurity services protecting businesses worldwide. 
              Your digital security is our mission.
            </p>
            <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
              <span>© 2024 Satts Cyber Tech. All rights reserved.</span>
              <span>•</span>
              <span>NASSCOM Certified</span>
              <span>•</span>
              <span>ISO 27001 compliant</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;