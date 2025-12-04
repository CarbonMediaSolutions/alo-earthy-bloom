import { Link } from "react-router-dom";
import { Facebook, Instagram } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Our Rooms", path: "/rooms" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "House Rules", path: "/house-rules" },
];

export function Footer() {
  return (
    <footer className="bg-card py-16 border-t border-border">
      <div className="container">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <div className="w-20 h-20 rounded-full border-2 border-primary/30 flex items-center justify-center font-heading text-4xl text-primary mb-8">
            A
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6 md:gap-10 mb-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex gap-4 mb-8">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground/60 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground/60 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
          </div>

          {/* Copyright */}
          <p className="font-body text-sm text-muted-foreground">
            Est. 2022
          </p>
        </div>
      </div>
    </footer>
  );
}
