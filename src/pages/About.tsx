import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { SectionTitle } from "@/components/sections/SectionTitle";
import { Facebook, Instagram } from "lucide-react";

import aloeFlowers from "@/assets/aloe-flowers.jpg";
import farmAerial from "@/assets/farm-aerial.jpg";
import heroMain from "@/assets/hero-main.jpg";

const About = () => {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <Hero title="About Aló" image={aloeFlowers} />

      {/* Quote Section */}
      <section className="py-section section-white">
        <div className="container text-center max-w-3xl mx-auto">
          <p className="font-heading text-2xl md:text-3xl text-primary italic leading-relaxed">
            Happiness is a choice
          </p>
          <p className="font-heading text-2xl md:text-3xl text-primary italic leading-relaxed">
            Peace is a state of mind
          </p>
          <p className="font-heading text-2xl md:text-3xl text-primary italic leading-relaxed">
            Both are free
          </p>
        </div>
      </section>

      {/* Property Image */}
      <section className="py-section section-beige">
        <div className="container">
          <div className="rounded-lg overflow-hidden shadow-card">
            <img
              src={heroMain}
              alt="Aló Accommodation property view"
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-section section-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            {/* About Aló */}
            <div className="text-center">
              <h2 className="font-heading text-3xl text-foreground mb-6">About Aló</h2>
              <p className="font-body text-muted-foreground leading-relaxed">
                Aló is the Irish word for "Aloe" as well as the Spanish word for "hello". 
                As you drive into Lichtenburg farm you'll immediately notice the rows of 
                Aloe's welcoming you. The Aloe plant is widely known for its beauty and 
                it represents good fortune, good health and ever-lasting friendship. The 
                plant has a blooming phase of only 3-4 months per year, making it a symbol 
                of patience and endurance.
              </p>
            </div>

            {/* Our Team */}
            <div className="text-center">
              <h2 className="font-heading text-3xl text-foreground mb-6">Our Team</h2>
              <p className="font-body text-muted-foreground leading-relaxed">
                We are a passionate group of family and friends who came together to 
                create Aló. With hard work, dedication and love, we strive to create 
                the ultimate experience for our customers. It is our hope that you 
                experience a sense of belonging and home when you visit us.
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mt-12">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-foreground/60 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-foreground/60 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Lichtenburg Farm Section */}
      <section
        className="relative py-section-lg overflow-hidden"
        style={{ backgroundImage: `url(${farmAerial})` }}
      >
        <div className="absolute inset-0 bg-accent/50" />
        <div className="relative z-10 container text-center">
          <h2 className="font-heading text-4xl md:text-5xl text-primary-foreground mb-6">
            More about Lichtenburg Farm
          </h2>
          <p className="font-body text-primary-foreground/90 text-lg max-w-2xl mx-auto">
            Lichtenburg Farm is a working farm in the heart of Durbanville, offering 
            stunning views of the surrounding countryside and the perfect escape from 
            city life.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
