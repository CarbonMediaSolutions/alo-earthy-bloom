import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ContactForm } from "@/components/sections/ContactForm";
import { Mail, Phone, MapPin, Clock, Facebook, Instagram } from "lucide-react";

import roomDetail1 from "@/assets/room-detail-1.png";

const Contact = () => {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <Hero title="Contact Us" image={roomDetail1} />

      {/* Contact Content */}
      <section className="py-section section-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div>
              <h2 className="font-heading text-3xl text-foreground mb-8">
                You can find us at
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                <div>
                    <span className="font-body text-sm uppercase tracking-widest text-muted-foreground block mb-1">
                      Email
                    </span>
                    <a
                      href="mailto:reservations@aloaccommodation.com"
                      className="font-body text-foreground hover:text-primary transition-colors"
                    >
                      reservations@aloaccommodation.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="font-body text-sm uppercase tracking-widest text-muted-foreground block mb-1">
                      Office Hours
                    </span>
                    <p className="font-body text-foreground">
                      Mondays - Fridays (08h00 - 17h00)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="font-body text-sm uppercase tracking-widest text-muted-foreground block mb-1">
                      Phone Numbers
                    </span>
                    <p className="font-body text-foreground">
                      Bookings: (+27) 84 506 3119
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="font-body text-sm uppercase tracking-widest text-muted-foreground block mb-1">
                      Location
                    </span>
                    <p className="font-body text-foreground">
                      Lichtenburg Farm, K11, R302, Klipheuwel Road,
                      <br />
                      Durbanville, Western Cape
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="font-heading text-3xl text-foreground mb-8">
                Let's get in touch
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="pb-section section-white">
        <div className="container">
          <div className="flex justify-center gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-dove/20 flex items-center justify-center text-dove hover:bg-dove hover:text-dove-foreground transition-all duration-300"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-dove/20 flex items-center justify-center text-dove hover:bg-dove hover:text-dove-foreground transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-section section-beige">
        <div className="container">
          <div className="rounded-lg overflow-hidden shadow-card">
            <iframe
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Aló+Accommodation,Durbanville,Cape+Town,South+Africa&zoom=14"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Aló Accommodation"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;
