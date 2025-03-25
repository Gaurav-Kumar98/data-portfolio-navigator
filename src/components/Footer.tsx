import { Github, Linkedin, Twitter, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Social media and contact URLs - matching Hero component
  const github = "https://github.com/Gaurav-Kumar98";
  const linkedin = "https://www.linkedin.com/in/gauravkumar98/";
  const email = "gk0415439@gmail.com";
  const phone = "+917014938338";

  return (
    <footer className="py-12 bg-secondary/50 border-t border-border/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-6">Gaurav Kumar</h2>
          
          <div className="flex items-center gap-6 mb-8">
            <a href={github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github size={20} />
            </a>
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin size={20} />
            </a>
            <a href={`mailto:${email}`} className="text-muted-foreground hover:text-primary transition-colors">
              <Mail size={20} />
            </a>
            <a href={`tel:${phone}`} className="text-muted-foreground hover:text-primary transition-colors">
              <Phone size={20} />
            </a>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-8">
            <a href="#home" className="text-sm text-muted-foreground hover:text-primary transition-colors">Home</a>
            <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About</a>
            <a href="#experience" className="text-sm text-muted-foreground hover:text-primary transition-colors">Experience</a>
            <a href="#projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">Projects</a>
            <a href="#testimonials" className="text-sm text-muted-foreground hover:text-primary transition-colors">Testimonials</a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</a>
          </div>
          
          <div className="text-sm text-muted-foreground text-center">
            <p>© {currentYear} Gaurav Kumar. All rights reserved.</p>
            <p className="mt-1">Data Engineer Portfolio</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
