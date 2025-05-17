
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300", 
        isScrolled 
          ? "bg-background/80 backdrop-blur-md shadow-sm py-3" 
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-2xl font-bold text-primary font-heading">
            Portfolio
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-sm font-medium rounded-md hover:bg-secondary hover:text-foreground"
              >
                {link.name}
              </a>
            ))}
            <Button size="sm">Resume</Button>
          </nav>
          
          {/* Mobile Navigation Toggle */}
          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className={cn(
                "block h-0.5 bg-foreground transition-transform duration-300",
                mobileMenuOpen && "rotate-45 translate-y-2"
              )}></span>
              <span className={cn(
                "block h-0.5 bg-foreground transition-opacity duration-300",
                mobileMenuOpen && "opacity-0"
              )}></span>
              <span className={cn(
                "block h-0.5 bg-foreground transition-transform duration-300",
                mobileMenuOpen && "-rotate-45 -translate-y-2"
              )}></span>
            </div>
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div className={cn(
        "md:hidden overflow-hidden transition-all duration-300 max-h-0",
        mobileMenuOpen && "max-h-60"
      )}>
        <div className="px-4 py-2 bg-background/90 backdrop-blur-md shadow-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block py-2 font-medium hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button size="sm" className="mt-2 w-full">Resume</Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
