import { Link } from "react-router-dom";
import { Facebook, Instagram, Download } from "lucide-react";
import aloLogo from "@/assets/alo-logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Rooms", path: "/rooms" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "House Rules", path: "/house-rules" },
  { name: "Terms & Conditions", path: "/terms-and-conditions" },
];

export function Footer() {
  return (
    <footer className="bg-background py-20 border-t border-border">
      <div className="container">
        <div className="flex flex-col items-center">
          {/* Centered Circle Logo */}
          <div className="w-24 h-24 rounded-full border-2 border-primary flex items-center justify-center mb-10 overflow-hidden p-2">
            <img src={aloLogo} alt="Aló" className="h-full w-auto object-contain" />
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-8 md:gap-12 mb-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="font-body text-sm text-primary hover:text-accent transition-colors duration-300 uppercase tracking-widest"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Download Links */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <a
              href="/documents/Alo-Terms-and-Conditions.pdf"
              download="Alo-Terms-and-Conditions.pdf"
              className="inline-flex items-center gap-2 font-body text-sm text-primary/80 hover:text-accent transition-colors duration-300 border border-primary/30 rounded-full px-5 py-2"
            >
              <Download size={16} />
              Download Terms & Conditions (PDF)
            </a>
            <a
              href="/documents/House-Rules.pdf"
              download="House-Rules.pdf"
              className="inline-flex items-center gap-2 font-body text-sm text-primary/80 hover:text-accent transition-colors duration-300 border border-primary/30 rounded-full px-5 py-2"
            >
              <Download size={16} />
              Download House Rules (PDF)
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mb-10">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border border-primary/30 flex items-center justify-center text-primary hover:bg-dove hover:border-dove hover:text-dove-foreground transition-all duration-300"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border border-primary/30 flex items-center justify-center text-primary hover:bg-dove hover:border-dove hover:text-dove-foreground transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
          </div>

          {/* Established - Dove Blue accent */}
          <p className="font-body text-sm text-dove tracking-widest">
            Est. 2022
          </p>
        </div>
      </div>
    </footer>
  );
}