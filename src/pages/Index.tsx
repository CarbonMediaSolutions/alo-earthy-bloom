import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { GalleryCarousel } from "@/components/sections/GalleryCarousel";
import { Wifi, Car, Leaf, MapPin, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

// Images
import heroFarm from "@/assets/hero-farm.png";
import interiorDetail from "@/assets/interior-detail.png";
import roomPreview from "@/assets/room-preview.png";
import groomsRoom from "@/assets/grooms-room.png";
import ctaBackground from "@/assets/cta-background.png";
import aloLogo from "@/assets/alo-logo.png";
import gallery1 from "@/assets/gallery-1.png";
import gallery2 from "@/assets/gallery-2.png";
import gallery3 from "@/assets/gallery-3.png";
import gallery4 from "@/assets/gallery-4.png";
import gallery5 from "@/assets/gallery-5.png";

const facilities = [
  {
    icon: Wifi,
    title: "Free WiFi",
    description: "Stay connected with high-speed internet access",
  },
  {
    icon: Car,
    title: "Free Parking",
    description: "Secure on-site parking for all guests",
  },
  {
    icon: Leaf,
    title: "Garden Views",
    description: "Relax with views of our lush gardens",
  },
  {
    icon: MapPin,
    title: "Great Location",
    description: "Just 30 minutes from Cape Town",
  },
  {
    icon: Sun,
    title: "Peaceful Setting",
    description: "Escape the city and enjoy tranquility",
  },
];

const galleryImages = [
  { src: gallery1, alt: "Aló Accommodation interior" },
  { src: gallery2, alt: "Farm landscape view" },
  { src: gallery3, alt: "Comfortable room" },
  { src: gallery4, alt: "Garden setting" },
  { src: gallery5, alt: "Peaceful surroundings" },
];

interface TwoColumnSectionProps {
  label: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  ctaText: string;
  ctaLink: string;
  reverse?: boolean;
  bgClass?: string;
}

function TwoColumnSection({
  label,
  title,
  description,
  image,
  imageAlt,
  ctaText,
  ctaLink,
  reverse = false,
  bgClass = "section-white",
}: TwoColumnSectionProps) {
  return (
    <section className={cn("section-spacing", bgClass)}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Image - Cinematic 3:2 aspect ratio */}
          <div
            className={cn(
              "image-zoom rounded-xl overflow-hidden shadow-hover",
              reverse && "lg:order-2"
            )}
          >
            <img
              src={image}
              alt={imageAlt}
              className="w-full aspect-[3/2] object-cover"
            />
          </div>

          {/* Content */}
          <div className={cn("lg:pr-8", reverse && "lg:order-1 lg:pl-8 lg:pr-0")}>
            <span className="section-label">{label}</span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight text-balance">
              {title}
            </h2>
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-10">
              {description}
            </p>
            <Button variant="outline" size="lg" asChild>
              <Link to={ctaLink}>{ctaText}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

interface FacilityCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

function FacilityCard({ icon: Icon, title, description }: FacilityCardProps) {
  return (
    <div className="bg-background p-10 rounded-xl card-hover text-center group">
      {/* Larger icon container with stronger visual weight */}
      <div className="w-20 h-20 rounded-full bg-secondary/80 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
        <Icon 
          className="w-9 h-9 text-primary group-hover:text-primary-foreground transition-colors duration-300" 
          strokeWidth={1.5}
        />
      </div>
      <h3 className="font-heading text-xl text-foreground mb-3">{title}</h3>
      <p className="font-body text-muted-foreground text-sm leading-relaxed">{description}</p>
    </div>
  );
}

const Index = () => {
  return (
    <main className="min-h-screen">
      <Helmet>
        <title>Aló Accommodation | Farm Stay in Durbanville, Western Cape</title>
        <meta name="description" content="Nestled in the Farmlands of Durbanville. Aló Accommodation offers a tranquil stay in the heart of the Western Cape countryside. Book your farm stay today." />
        <link rel="canonical" href="https://aloaccommodation.com/" />
        <meta property="og:title" content="Aló Accommodation | Farm Stay in Durbanville, Western Cape" />
        <meta property="og:description" content="Nestled in the Farmlands of Durbanville. Aló Accommodation offers a tranquil stay in the heart of the Western Cape countryside." />
        <meta property="og:url" content="https://aloaccommodation.com/" />
        <meta name="twitter:title" content="Aló Accommodation | Farm Stay in Durbanville, Western Cape" />
        <meta name="twitter:description" content="Nestled in the Farmlands of Durbanville. Aló Accommodation offers a tranquil stay in the heart of the Western Cape countryside." />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LodgingBusiness",
          "name": "Aló Accommodation",
          "description": "Tranquil farm stay accommodation nestled in the farmlands of Durbanville, Western Cape.",
          "url": "https://aloaccommodation.com",
          "telephone": "+27845063119",
          "email": "reservations@aloaccommodation.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Lichtenburg Farm, K11, R302, Klipheuwel Road",
            "addressLocality": "Durbanville",
            "addressRegion": "Western Cape",
            "addressCountry": "ZA"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": -33.8312,
            "longitude": 18.6448
          },
          "priceRange": "$$",
          "numberOfRooms": 11,
          "image": "https://aloaccommodation.com/favicon.png"
        })}</script>
      </Helmet>
      <Navbar />

      {/* SECTION 1 — HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{ backgroundImage: `url(${heroFarm})` }}
        />
        
        {/* Stronger Overlay */}
        <div className="hero-overlay" />

        {/* Content with text shadow */}
        <div className="relative z-10 container text-center px-4">
          <img 
            src={aloLogo} 
            alt="Aló Accommodation" 
            className="h-32 md:h-40 lg:h-48 w-auto mx-auto mb-6 animate-fade-up opacity-0"
          />
          <h1 className="sr-only">Aló Accommodation – Farm Stay in Durbanville, Western Cape</h1>
          <p className="font-body text-primary-foreground text-xl md:text-2xl mb-12 animate-fade-up opacity-0 delay-200 tracking-wide hero-text-shadow">
            Nestled in the farmlands of Durbanville
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up opacity-0 delay-300">
            <Button variant="hero" size="lg" asChild>
              <Link to="/rooms">Check Availability</Link>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 2 — WELCOME (White) */}
      <section className="section-spacing section-white section-divider">
        <div className="container">
          <div className="text-center content-narrow">
            <span className="section-label">Welcome to Aló Accommodation</span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-8 leading-tight text-balance">
              Nestled in the Farmlands of Durbanville
            </h2>
            <p className="font-body text-muted-foreground text-lg md:text-xl leading-relaxed">
              Aló Accommodation offers a tranquil stay, in the heart of the beautiful Western Cape countryside. 
              Ideally positioned on the Lichtenburg Farm, it is located close to wedding venues and nearby farms, 
              allowing easy access to explore the farm and nearby attractions.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 — ABOUT SNIPPET (Beige) */}
      <TwoColumnSection
        label="About Us"
        title="Read about Aló Accommodation, our team and Lichtenburg Farm"
        description="Aló is the Spanish word for 'hello' and this warm greeting is the inspiration which guides our friendly and comfortable hospitality offering. Here we welcome you to our farm stay, surrounded by nature and the rolling Durbanville hills."
        image={interiorDetail}
        imageAlt="Elegant interior at Aló Accommodation"
        ctaText="Find Out More"
        ctaLink="/about"
        bgClass="section-beige"
      />

      {/* SECTION 4 — OUR ROOMS PREVIEW (White) */}
      <TwoColumnSection
        label="Our Rooms"
        title="We have 11 rooms to choose from, allowing something for everyone"
        description="Each of our rooms has been thoughtfully designed to create a comfortable and welcoming stay. Relax outside and enjoy the view of the rolling hills and open skies, or head down for a good night's sleep in our comfortable beds."
        image={roomPreview}
        imageAlt="Comfortable room at Aló"
        ctaText="View All Rooms"
        ctaLink="/rooms"
        reverse
        bgClass="section-white"
      />

      {/* SECTION 5 — GROOM'S ROOM (Deeper Beige for contrast) */}
      <TwoColumnSection
        label="Take a Look At"
        title="Our Groom's Room"
        description="Perfect for wedding parties, our Groom's Room offers a special space for the groom and his party to prepare for the big day. A double sized suite, it features masculine decor, comfortable seating, and all the amenities needed for a memorable experience getting ready."
        image={groomsRoom}
        imageAlt="Groom's Room at Aló Accommodation"
        ctaText="Find Out More"
        ctaLink="/rooms"
        bgClass="section-beige-deep"
      />

      {/* SECTION 6 — BIG CTA SECTION */}
      <section
        className="relative py-36 md:py-48 overflow-hidden"
      >
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${ctaBackground})` }} />
        <div className="absolute inset-0 bg-accent/55" />
        <div className="relative z-10 container text-center">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-6 text-balance hero-text-shadow">
            Ready to Experience Aló?
          </h2>
          <p className="font-body text-primary-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 hero-text-shadow">
            Book your stay and discover the peace and tranquility of farm life in Durbanville.
          </p>
          {/* Larger, more prominent CTA button */}
          <Button 
            variant="hero" 
            className="h-16 px-12 text-lg font-semibold tracking-wider shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300" 
            asChild
          >
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>

      {/* SECTION 7 — PROPERTY FACILITIES (Dove Blue) */}
      <section className="section-spacing section-dove section-divider">
        <div className="container">
          <div className="text-center mb-20">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              Property Facilities
            </h2>
            <p className="font-body text-muted-foreground text-lg">
              Everything you need for a comfortable and memorable stay
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 content-wide">
            {facilities.map((facility) => (
              <FacilityCard key={facility.title} {...facility} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 — GALLERY (Beige with more spacing) */}
      <section className="py-28 md:py-40 section-beige">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground">
              Gallery
            </h2>
          </div>
          
          <div className="px-12 md:px-20">
            <GalleryCarousel images={galleryImages} />
          </div>
        </div>
      </section>

      {/* SECTION 9 — FOOTER */}
      <Footer />
    </main>
  );
};

export default Index;