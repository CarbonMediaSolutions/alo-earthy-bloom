import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Heart, Leaf, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

import aloeFlowers from "@/assets/aloe-flowers.jpg";
import farmAerial from "@/assets/farm-aerial.jpg";
import heroMain from "@/assets/hero-main.jpg";
import interiorDetail from "@/assets/interior-detail.png";
import roomDetail1 from "@/assets/room-detail-1.png";
import gallery4 from "@/assets/gallery-4.png";

const values = [
  {
    icon: Heart,
    title: "Warm Hospitality",
    description: "Every guest is welcomed like a friend – with care, kindness and attention.",
  },
  {
    icon: Leaf,
    title: "Tranquility",
    description: "We've created a peaceful retreat where you can pause, rest and reconnect.",
  },
  {
    icon: Sparkles,
    title: "Attention to Detail",
    description: "From the bedding to the breakfast, every detail is considered with you in mind.",
  },
];

const About = () => {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* SECTION 1 – HERO */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${aloeFlowers})` }}
        />
        <div className="hero-overlay" />
        
        <div className="relative z-10 container text-center px-4">
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-primary-foreground mb-6 hero-text-shadow animate-fade-up">
            About Aló
          </h1>
          <p className="font-body text-primary-foreground/90 text-xl md:text-2xl max-w-2xl mx-auto tracking-wide hero-text-shadow animate-fade-up delay-100">
            A peaceful farm stay where simplicity, comfort and warm hospitality come together.
          </p>
        </div>
      </section>

      {/* SECTION 2 – QUOTE */}
      <section className="section-spacing section-white">
        <div className="container text-center content-narrow">
          <span className="text-6xl md:text-7xl text-clay/60 font-heading leading-none">"</span>
          <blockquote className="space-y-2 -mt-6">
            <p className="font-heading text-2xl md:text-3xl lg:text-4xl text-primary italic leading-relaxed">
              Happiness is a choice
            </p>
            <p className="font-heading text-2xl md:text-3xl lg:text-4xl text-primary italic leading-relaxed">
              Peace is a state of mind
            </p>
            <p className="font-heading text-2xl md:text-3xl lg:text-4xl text-primary italic leading-relaxed">
              Both are free
            </p>
          </blockquote>
          <div className="w-16 h-0.5 bg-clay mx-auto mt-8 mb-4" />
          <p className="font-body text-muted-foreground tracking-widest text-sm uppercase">
            Aló Philosophy
          </p>
        </div>
      </section>

      {/* SECTION 3 – OUR STORY */}
      <section className="section-spacing section-beige section-divider">
        <div className="container">
          <div className="text-center content-narrow">
            <span className="section-label">Our Story</span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-10 leading-tight">
              How Aló Came to Life
            </h2>
            <div className="space-y-6 font-body text-muted-foreground text-lg leading-relaxed">
              <p>
                Aló Accommodation began as a family dream – a small idea to share the peace 
                and beauty of Lichtenburg Farm with others.
              </p>
              <p>
                We wanted to create a place where guests could slow down, breathe deeply and 
                feel at home, surrounded by open fields and quiet mornings.
              </p>
              <p>
                Today, Aló is a calm, welcoming farm stay in Durbanville's countryside, offering 
                carefully prepared rooms, thoughtful touches and the kind of hospitality that 
                makes you want to return.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 – IMAGE GRID */}
      <section className="section-spacing section-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Large main image */}
            <div className="md:row-span-2 rounded-2xl overflow-hidden shadow-hover">
              <img
                src={heroMain}
                alt="Aló Accommodation cottages"
                className="w-full h-full object-cover min-h-[300px] md:min-h-full"
              />
            </div>
            {/* Top right image */}
            <div className="rounded-2xl overflow-hidden shadow-hover">
              <img
                src={interiorDetail}
                alt="Interior details at Aló"
                className="w-full h-[250px] object-cover"
              />
            </div>
            {/* Bottom right image */}
            <div className="rounded-2xl overflow-hidden shadow-hover">
              <img
                src={roomDetail1}
                alt="Cozy room decor"
                className="w-full h-[250px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 – ABOUT ALÓ & OUR TEAM */}
      <section className="section-spacing section-beige section-divider">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 max-w-5xl mx-auto">
            {/* About Aló */}
            <div className="text-center lg:text-left">
              <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
                About Aló
              </h2>
              <div className="space-y-4 font-body text-foreground leading-relaxed">
                <p>
                  "Aló" is inspired by the word for "hello" and the aloe plant – a symbol of 
                  health, resilience and quiet strength.
                </p>
                <p>
                  At Aló Accommodation, we combine the simplicity of farm life with the comfort 
                  of modern amenities. Our rooms are thoughtfully styled, our surroundings are 
                  intentionally calm, and our wish is that every guest leaves feeling rested 
                  and refreshed.
                </p>
              </div>
            </div>

            {/* Our Team */}
            <div className="text-center lg:text-left">
              <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
                Our Team
              </h2>
              <div className="space-y-4 font-body text-foreground leading-relaxed">
                <p>
                  Aló is run by a close-knit group of family and friends who love hosting and 
                  creating beautiful spaces.
                </p>
                <p>
                  With genuine care, attention to detail and a hands-on approach, we look after 
                  every part of your stay – from your first enquiry to the moment you drive away.
                </p>
                <p>
                  We hope you feel a sense of ease, belonging and home when you visit us.
                </p>
              </div>

              {/* Social Links */}
              <div className="flex justify-center lg:justify-start gap-4 mt-8">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-dove/20 flex items-center justify-center text-dove hover:bg-dove hover:text-dove-foreground transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-dove/20 flex items-center justify-center text-dove hover:bg-dove hover:text-dove-foreground transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 – OUR VALUES (Dove Blue background) */}
      <section className="section-spacing section-dove section-divider">
        <div className="container">
          <div className="text-center mb-16">
            <span className="section-label">What Matters to Us</span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight">
              Our Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="bg-background rounded-2xl p-8 text-center card-hover border border-dove/20"
              >
                <div className="w-16 h-16 rounded-full bg-dove/20 flex items-center justify-center mx-auto mb-6">
                  <value.icon size={28} className="text-dove" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading text-xl text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 – LICHTENBURG FARM FEATURE */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${farmAerial})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/50" />
        
        <div className="relative z-10 container py-24">
          <div className="text-center content-narrow">
            <span className="inline-block px-4 py-1.5 bg-primary-foreground/10 backdrop-blur-sm rounded-full text-primary-foreground text-sm tracking-widest uppercase mb-6">
              Lichtenburg Farm
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-6 hero-text-shadow">
              More About Lichtenburg Farm
            </h2>
            <p className="font-body text-primary-foreground/90 text-lg md:text-xl leading-relaxed mb-10">
              Lichtenburg Farm is a working farm in the heart of Durbanville, surrounded by open 
              fields and big skies. Guests love the early morning bird calls, golden sunsets and 
              the sense of space that's hard to find in the city.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-12 text-primary-foreground/80">
              <div className="flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary-foreground/60" />
                <span className="font-body">Scenic walks and quiet corners</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary-foreground/60" />
                <span className="font-body">Close to wedding and event venues</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 – FINAL CTA */}
      <section className="section-spacing section-white">
        <div className="container">
          <div className="text-center content-narrow">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 text-balance">
              Come and Experience Aló for Yourself
            </h2>
            <p className="font-body text-muted-foreground text-lg md:text-xl leading-relaxed mb-10">
              We'd be honoured to host you at Aló Accommodation. Choose your room, plan your 
              stay and let us take care of the rest.
            </p>
            <Button 
              variant="default" 
              className="h-14 px-10 text-base" 
              asChild
            >
              <Link to="/rooms">Check Availability</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;