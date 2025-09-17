import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleEmailClick = () => {
    window.location.href = 'mailto:yashlawankar@gmail.com';
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/yash-lawankar-17a752259/', '_blank');
  };

  const handleGitHubClick = () => {
    window.open('https://github.com/devloperYash', '_blank');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Name and Copyright */}
          <div className="text-center md:text-left">
            <button 
              onClick={scrollToTop}
              className="text-lg font-semibold text-foreground hover-elevate active-elevate-2 px-2 py-1 rounded-md"
              data-testid="button-footer-name"
            >
              Yash Lawankar
            </button>
            <p className="text-sm text-muted-foreground mt-1">
              Computer Science Engineering Student
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <Button 
              size="icon" 
              variant="ghost"
              onClick={handleEmailClick}
              data-testid="button-footer-email"
            >
              <Mail className="h-4 w-4" />
            </Button>
            <Button 
              size="icon" 
              variant="ghost"
              onClick={handleLinkedInClick}
              data-testid="button-footer-linkedin"
            >
              <Linkedin className="h-4 w-4" />
            </Button>
            <Button 
              size="icon" 
              variant="ghost"
              onClick={handleGitHubClick}
              data-testid="button-footer-github"
            >
              <Github className="h-4 w-4" />
            </Button>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground flex items-center gap-1 justify-center md:justify-end">
              Made with <Heart className="h-4 w-4 text-red-500" /> © {currentYear}
            </p>
            <p className="text-xs text-muted-foreground mt-1" data-testid="text-copyright">
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}