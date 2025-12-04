import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Our Rooms", path: "/rooms" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "House Rules", path: "/house-rules" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-card/95 backdrop-blur-sm shadow-soft py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className={cn(
            "w-12 h-12 rounded-full border-2 flex items-center justify-center font-heading text-2xl transition-colors duration-300",
            isScrolled 
              ? "border-primary text-primary" 
              : "border-primary-foreground text-primary-foreground"
          )}>
            A
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "link-underline font-body text-sm tracking-wide transition-colors duration-300",
                location.pathname === link.path
                  ? isScrolled ? "text-primary" : "text-primary-foreground"
                  : isScrolled 
                    ? "text-foreground/70 hover:text-primary" 
                    : "text-primary-foreground/80 hover:text-primary-foreground"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button 
            variant={isScrolled ? "default" : "hero"} 
            size="sm"
            asChild
          >
            <Link to="/rooms">Check Availability</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={cn(
            "md:hidden p-2 transition-colors",
            isScrolled ? "text-foreground" : "text-primary-foreground"
          )}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 right-0 bg-card shadow-card transition-all duration-300 overflow-hidden",
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="container py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "font-body text-lg py-2 transition-colors",
                location.pathname === link.path
                  ? "text-primary"
                  : "text-foreground/70 hover:text-primary"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button className="mt-4" asChild>
            <Link to="/rooms">Check Availability</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
