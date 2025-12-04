import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { SectionTitle } from "@/components/sections/SectionTitle";
import { TwoColumnContent } from "@/components/sections/TwoColumnContent";
import { RoomCard } from "@/components/sections/RoomCard";
import { FacilityCard } from "@/components/sections/FacilityCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Wifi, Car, Coffee, Leaf, MapPin, Sun } from "lucide-react";

import heroMain from "@/assets/hero-main.jpg";
import roomDetail1 from "@/assets/room-detail-1.png";
import roomDetail2 from "@/assets/room-detail-2.png";
import roomDetail3 from "@/assets/room-detail-3.png";
import room1 from "@/assets/room-1.jpg";
import farmAerial from "@/assets/farm-aerial.jpg";

const facilities = [
  {
    icon: Wifi,
    title: "Free WiFi",
    description: "Stay connected with complimentary high-speed internet access.",
  },
  {
    icon: Car,
    title: "Free Parking",
    description: "Secure on-site parking available for all guests.",
  },
  {
    icon: Coffee,
    title: "Breakfast Available",
    description: "Start your day with a delicious farm-fresh breakfast.",
  },
  {
    icon: Leaf,
    title: "Garden Views",
    description: "Relax with peaceful views of our lush farm gardens.",
  },
  {
    icon: MapPin,
    title: "Great Location",
    description: "Just 30 minutes from Cape Town, perfect for exploring.",
  },
  {
    icon: Sun,
    title: "Peaceful Setting",
    description: "Escape the city and enjoy true tranquility.",
  },
];

const featuredRooms = [
  {
    name: "Room 1",
    description: "A beautifully appointed room with elegant decor and stunning views across the farm landscape.",
    image: room1,
    price: "R850",
    sleeps: 2,
  },
  {
    name: "Room 2",
    description: "Classic comfort meets modern amenities in this charming room with wooden accents.",
    image: roomDetail2,
    price: "R850",
    sleeps: 2,
  },
  {
    name: "Room 3",
    description: "Spacious and light-filled, this room offers the perfect retreat after a day of exploring.",
    image: roomDetail3,
    price: "R850",
    sleeps: 2,
  },
];

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <Hero
        title="Aló Accommodation"
        subtitle="Say Aló to loving life"
        image={heroMain}
        showCta
        ctaText="Check Availability"
        ctaLink="/rooms"
        secondaryCta="Learn More"
        secondaryCtaLink="/about"
        size="large"
      />

      {/* Intro Section */}
      <section className="py-section-lg section-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <span className="font-body text-sm uppercase tracking-widest text-primary mb-4 block">
              Welcome to Aló
            </span>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
              Accommodation Nestled in the Farmlands of Durbanville
            </h2>
            <p className="font-body text-muted-foreground text-lg leading-relaxed">
              Aló gives you the ideal location with rustic charm that comes to life on the farm.
              Experience peace, tranquility, and the beauty of the Western Cape countryside.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-section section-beige">
        <div className="container">
          <TwoColumnContent
            label="About Us"
            title="Read about Aló, our team and Lichtenburg Farm"
            description="Aló is the Irish word for 'Aloe' as well as the Spanish word for 'hello'. As you drive into Lichtenburg farm you'll immediately notice the rows of Aloe's welcoming you. The Aloe plant is widely known for its beauty and it represents good fortune, good health and ever-lasting friendship."
            image={roomDetail1}
            imageAlt="Elegant farm decor at Aló Accommodation"
            ctaText="Find Out More"
            ctaLink="/about"
          />
        </div>
      </section>

      {/* Our Rooms Preview */}
      <section className="py-section section-white">
        <div className="container">
          <TwoColumnContent
            label="Our Rooms"
            title="At Aló we have 11 rooms for you to pick from"
            description="Each of our rooms has been thoughtfully designed to provide comfort and tranquility. From the elegant furnishings to the stunning views, every detail has been considered to ensure your stay is truly memorable."
            image={roomDetail2}
            imageAlt="Comfortable bedroom at Aló"
            ctaText="View All Rooms"
            ctaLink="/rooms"
            reverse
          />
        </div>
      </section>

      {/* Groom's Room Highlight */}
      <section className="py-section section-beige">
        <div className="container">
          <TwoColumnContent
            label="Take a Look At"
            title="Our Groom's Room"
            description="Perfect for wedding parties, our Groom's Room offers a special space for the groom and his party to prepare for the big day. Featuring masculine decor, comfortable seating, and all the amenities needed for a memorable getting-ready experience."
            image={roomDetail3}
            imageAlt="Groom's Room at Aló Accommodation"
            ctaText="Find Out More"
            ctaLink="/rooms"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="relative py-section-lg overflow-hidden"
        style={{ backgroundImage: `url(${farmAerial})` }}
      >
        <div className="absolute inset-0 bg-accent/60" />
        <div className="relative z-10 container text-center">
          <h2 className="font-heading text-4xl md:text-5xl text-primary-foreground mb-6">
            Ready to Experience Aló?
          </h2>
          <p className="font-body text-primary-foreground/90 text-lg max-w-2xl mx-auto mb-8">
            Book your stay and discover the peace and tranquility of farm life in Durbanville.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>

      {/* Property Facilities */}
      <section className="py-section-lg section-white">
        <div className="container">
          <SectionTitle
            label="Amenities"
            title="Property Facilities"
            subtitle="Everything you need for a comfortable and memorable stay"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility) => (
              <FacilityCard key={facility.title} {...facility} />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-section section-beige">
        <div className="container">
          <SectionTitle title="Gallery" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="image-zoom rounded-lg overflow-hidden aspect-square md:aspect-[4/3]">
              <img src={room1} alt="Room interior" className="w-full h-full object-cover" />
            </div>
            <div className="image-zoom rounded-lg overflow-hidden aspect-square md:aspect-[4/3]">
              <img src={roomDetail1} alt="Farm decor" className="w-full h-full object-cover" />
            </div>
            <div className="image-zoom rounded-lg overflow-hidden aspect-square md:aspect-[4/3]">
              <img src={roomDetail2} alt="Bedroom view" className="w-full h-full object-cover" />
            </div>
            <div className="image-zoom rounded-lg overflow-hidden aspect-square md:aspect-[4/3]">
              <img src={roomDetail3} alt="Sitting area" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Index;
