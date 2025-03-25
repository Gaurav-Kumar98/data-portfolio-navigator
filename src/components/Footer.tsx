
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-secondary/50 border-t border-border/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-6">Your Name</h2>
          
          <div className="flex items-center gap-6 mb-8">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter size={20} />
            </a>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-8">
            <a href="#home" className="text-sm text-muted-foreground hover:text-primary transition-colors">Home</a>
            <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About</a>
            <a href="#experience" className="text-sm text-muted-foreground hover:text-primary transition-colors">Experience</a>
            <a href="#projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">Projects</a>
            <a href="#skills" className="text-sm text-muted-foreground hover:text-primary transition-colors">Skills</a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</a>
          </div>
          
          <div className="text-sm text-muted-foreground text-center">
            <p>© {currentYear} Your Name. All rights reserved.</p>
            <p className="mt-1">Data Engineer Portfolio</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
