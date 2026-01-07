import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Wifi, Car, Users, Bed, Coffee, Bath, Refrigerator, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

// Images
import roomPreview from "@/assets/room-preview.png";
import room1_1 from "@/assets/room1-1.png";
import room1_2 from "@/assets/room1-2.png";
import room1_3 from "@/assets/room1-3.png";
import room1_4 from "@/assets/room1-4.png";
import room1_5 from "@/assets/room1-5.png";
import room1_6 from "@/assets/room1-6.png";
import room2_1 from "@/assets/room2-1.png";
import room2_2 from "@/assets/room2-2.png";
import room2_3 from "@/assets/room2-3.png";
import room2_4 from "@/assets/room2-4.png";
import room2_5 from "@/assets/room2-5.png";
import room2_6 from "@/assets/room2-6.png";
import room2_7 from "@/assets/room2-7.png";
import room2_8 from "@/assets/room2-8.png";
import room2_9 from "@/assets/room2-9.png";
import room2_10 from "@/assets/room2-10.png";
import room3_1 from "@/assets/room3-1.png";
import room3_2 from "@/assets/room3-2.png";
import room3_3 from "@/assets/room3-3.png";
import room3_4 from "@/assets/room3-4.png";
import room3_5 from "@/assets/room3-5.png";
import room3_6 from "@/assets/room3-6.png";
import room3_7 from "@/assets/room3-7.png";
import room4_1 from "@/assets/room4-1.png";
import room4_2 from "@/assets/room4-2.png";
import room4_3 from "@/assets/room4-3.png";
import room4_4 from "@/assets/room4-4.png";
import room4_5 from "@/assets/room4-5.png";
import room4_6 from "@/assets/room4-6.png";
import room4_7 from "@/assets/room4-7.png";
import room4_8 from "@/assets/room4-8.png";
import room4_9 from "@/assets/room4-9.png";
import room4_10 from "@/assets/room4-10.png";
import room5_1 from "@/assets/room5-1.png";
import room5_2 from "@/assets/room5-2.png";
import room5_3 from "@/assets/room5-3.png";
import room5_4 from "@/assets/room5-4.png";
import room5_5 from "@/assets/room5-5.png";
import room5_6 from "@/assets/room5-6.png";
import room5_7 from "@/assets/room5-7.png";
import room6_1 from "@/assets/room6-1.png";
import room6_2 from "@/assets/room6-2.png";
import room6_3 from "@/assets/room6-3.png";
import room6_4 from "@/assets/room6-4.png";
import room6_5 from "@/assets/room6-5.png";
import room6_6 from "@/assets/room6-6.png";
import room6_7 from "@/assets/room6-7.png";
import room6_8 from "@/assets/room6-8.png";
import room7_1 from "@/assets/room7-1.png";
import room7_2 from "@/assets/room7-2.png";
import room7_3 from "@/assets/room7-3.png";
import room7_4 from "@/assets/room7-4.png";
import room7_5 from "@/assets/room7-5.png";
import room7_6 from "@/assets/room7-6.png";
import room7_7 from "@/assets/room7-7.png";
import room8_1 from "@/assets/room8-1.png";
import room8_2 from "@/assets/room8-2.png";
import room8_3 from "@/assets/room8-3.png";
import room8_4 from "@/assets/room8-4.png";
import room8_5 from "@/assets/room8-5.png";
import room8_6 from "@/assets/room8-6.png";
import room8_7 from "@/assets/room8-7.png";
import room9_1 from "@/assets/room9-1.png";
import room9_2 from "@/assets/room9-2.png";
import room9_3 from "@/assets/room9-3.png";
import room9_4 from "@/assets/room9-4.png";
import room9_5 from "@/assets/room9-5.png";
import room9_6 from "@/assets/room9-6.png";
import room10_1 from "@/assets/room10-1.png";
import room10_2 from "@/assets/room10-2.png";
import room10_3 from "@/assets/room10-3.png";
import room10_4 from "@/assets/room10-4.png";
import room10_5 from "@/assets/room10-5.png";
import room11_1 from "@/assets/room11-1.png";
import room11_2 from "@/assets/room11-2.png";
import room11_3 from "@/assets/room11-3.png";
import room11_4 from "@/assets/room11-4.png";
import room11_5 from "@/assets/room11-5.png";
import room11_6 from "@/assets/room11-6.png";
import room11_7 from "@/assets/room11-7.png";
import room11_8 from "@/assets/room11-8.png";
import groomsRoom from "@/assets/grooms-room.png";

// Room data with updated prices and multiple images
const rooms = [
  {
    name: "Room 1",
    description: "Sleeps four with one double bed and two single beds. Includes table and seating inside, kitchenette with complimentary coffee, tea and sugar, private bathroom with shower and towels, and outside seating.",
    images: [room1_1, room1_2, room1_3, room1_4, room1_5, room1_6],
    price: "R1,815",
    sleeps: 4,
    beds: "1 Double Bed + 2 Single Beds",
  },
  {
    name: "Room 2",
    description: "Sleeps two with one double bed. Includes table and seating inside, kitchenette with complimentary coffee, tea and sugar, private bathroom with shower and towels, and outside seating.",
    images: [room2_1, room2_2, room2_3, room2_4, room2_5, room2_6, room2_7, room2_8, room2_9, room2_10],
    price: "R1,210",
    sleeps: 2,
    beds: "1 Double Bed",
  },
  {
    name: "Room 3",
    description: "Sleeps two with one double bed. Includes table and seating inside, kitchenette with complimentary coffee, tea and sugar, private bathroom with shower and towels, and outside seating.",
    images: [room3_1, room3_2, room3_3, room3_4, room3_5, room3_6, room3_7],
    price: "R1,210",
    sleeps: 2,
    beds: "1 Double Bed",
  },
  {
    name: "Room 4",
    description: "Sleeps three with one double bed and one single bed. Includes table and seating inside, kitchenette with complimentary coffee, tea and sugar, private bathroom with shower and towels, and outside seating.",
    images: [room4_1, room4_2, room4_3, room4_4, room4_5, room4_6, room4_7, room4_8, room4_9, room4_10],
    price: "R1,634",
    sleeps: 3,
    beds: "1 Double Bed + 1 Single Bed",
  },
  {
    name: "Groom's Room",
    description: "Double-sized suite perfect for wedding parties. Fully equipped kitchenette, clothing rack, iron and ironing board, and space for six groomsmen to prepare.",
    images: [room5_1, room5_2, room5_3, room5_4, room5_5, room5_6, room5_7],
    price: "R1,815",
    sleeps: 2,
    beds: "1 Double Bed",
  },
  {
    name: "Room 6",
    description: "Sleeps two with one double bed. Includes table and seating inside, kitchenette with complimentary coffee, tea and sugar, private bathroom with shower and towels, and outside seating.",
    images: [room6_1, room6_2, room6_3, room6_4, room6_5, room6_6, room6_7, room6_8],
    price: "R1,210",
    sleeps: 2,
    beds: "1 Double Bed",
  },
  {
    name: "Room 7",
    description: "Sleeps two with one double bed. Includes table and seating inside, kitchenette with complimentary coffee, tea and sugar, private bathroom with shower and towels, and outside seating.",
    images: [room7_1, room7_2, room7_3, room7_4, room7_5, room7_6, room7_7],
    price: "R1,210",
    sleeps: 2,
    beds: "1 Double Bed",
  },
  {
    name: "Room 8",
    description: "Sleeps two with one double bed. Includes table and seating inside, kitchenette with complimentary coffee, tea and sugar, private bathroom with shower and towels, and outside seating.",
    images: [room8_1, room8_2, room8_3, room8_4, room8_5, room8_6, room8_7],
    price: "R1,210",
    sleeps: 2,
    beds: "1 Double Bed",
  },
  {
    name: "Room 9",
    description: "Sleeps two with one double bed. Includes table and seating inside, kitchenette with complimentary coffee, tea and sugar, private bathroom with shower and towels, and outside seating.",
    images: [room9_1, room9_2, room9_3, room9_4, room9_5, room9_6],
    price: "R1,210",
    sleeps: 2,
    beds: "1 Double Bed",
  },
  {
    name: "Room 10",
    description: "Sleeps two with one double bed. Includes table and seating inside, kitchenette with complimentary coffee, tea and sugar, private bathroom with shower and towels, and outside seating.",
    images: [room10_1, room10_2, room10_3, room10_4, room10_5],
    price: "R1,210",
    sleeps: 2,
    beds: "1 Double Bed",
  },
  {
    name: "Room 11",
    description: "Sleeps two with one double bed. Includes table and seating inside, kitchenette with complimentary coffee, tea and sugar, private bathroom with shower and towels, and outside seating.",
    images: [room11_1, room11_2, room11_3, room11_4, room11_5, room11_6, room11_7, room11_8],
    price: "R1,210",
    sleeps: 2,
    beds: "1 Double Bed",
  },
];

interface RoomCardProps {
  name: string;
  description: string;
  images: string[];
  price: string;
  sleeps: number;
  beds: string;
}

function RoomCard({ name, description, images, price, sleeps, beds }: RoomCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const hasMultipleImages = images.length > 1;

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="bg-background rounded-xl overflow-hidden card-hover group">
      {/* Image Carousel - All images preloaded for instant transitions */}
      <div className="relative aspect-[3/4] overflow-hidden">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${name} - Image ${index + 1}`}
            className={cn(
              "absolute inset-0 w-full h-full object-cover transition-opacity duration-150",
              index === currentIndex ? "opacity-100" : "opacity-0"
            )}
          />
        ))}
        
        {/* Navigation arrows - only show if multiple images */}
        {hasMultipleImages && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
              aria-label="Previous image"
            >
              <ChevronLeft size={18} className="text-foreground" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
              aria-label="Next image"
            >
              <ChevronRight size={18} className="text-foreground" />
            </button>
          </>
        )}
        
        {/* Dots indicator */}
        {hasMultipleImages && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all",
                  index === currentIndex
                    ? "bg-background w-4"
                    : "bg-background/60 hover:bg-background/80"
                )}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-heading text-xl text-foreground">{name}</h3>
          <span className="font-heading text-lg text-primary font-medium">{price}</span>
        </div>
        
        {/* Room details */}
        <div className="flex items-center gap-4 mb-4 text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Users size={16} strokeWidth={1.5} />
            <span className="text-sm">Sleeps {sleeps}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Bed size={16} strokeWidth={1.5} />
            <span className="text-sm">{beds}</span>
          </div>
        </div>
        
        {/* Feature icons */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center" title="Free WiFi">
            <Wifi size={14} className="text-primary" strokeWidth={1.5} />
          </div>
          <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center" title="Free Parking">
            <Car size={14} className="text-primary" strokeWidth={1.5} />
          </div>
          <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center" title="En-suite Bathroom">
            <Bath size={14} className="text-primary" strokeWidth={1.5} />
          </div>
        </div>
        
        <p className="font-body text-muted-foreground text-sm mb-5 leading-relaxed">
          {description}
        </p>
        
        <Button variant="outline" size="default" className="w-full" asChild>
          <a href="#booking">Book Now</a>
        </Button>
      </div>
    </div>
  );
}

// Declare the custom element for TypeScript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'rr-resnova': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        'widget-id': string;
        'api-url': string;
      }, HTMLElement>;
    }
  }
}

const Rooms = () => {
  // Ensure the ResNova widget renders properly
  useEffect(() => {
    // Trigger any custom element upgrade if needed
    if (typeof window !== 'undefined' && window.customElements) {
      window.customElements.whenDefined('rr-resnova').catch(() => {
        // Widget not defined yet, script will handle it
      });
    }
  }, []);

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* SECTION 1 — HERO */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${roomPreview})` }}
        />
        <div className="hero-overlay" />
        
        <div className="relative z-10 container text-center px-4">
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-primary-foreground mb-4 hero-text-shadow">
            Our Rooms
          </h1>
          <p className="font-body text-primary-foreground text-xl md:text-2xl mb-10 tracking-wide hero-text-shadow">
            Comfort, tranquility, and a peaceful farm setting.
          </p>
          <Button variant="hero" size="lg" asChild>
            <a href="#booking">Check Availability</a>
          </Button>
        </div>
      </section>

      {/* SECTION 2 — QUICK INFO ROW */}
      <section className="section-spacing section-beige" id="booking">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 max-w-5xl mx-auto mb-16">
            {/* Booking Policies */}
            <div className="text-center md:text-left">
              <h2 className="font-heading text-2xl text-foreground mb-6">
                Booking Policies
              </h2>
              <ul className="font-body text-muted-foreground space-y-3">
                <li className="flex items-center gap-3 justify-center md:justify-start">
                  <span className="w-2 h-2 rounded-full bg-primary/50" />
                  100% payment upon booking
                </li>
                <li className="flex items-center gap-3 justify-center md:justify-start">
                  <span className="w-2 h-2 rounded-full bg-primary/50" />
                  All rooms check-in at 14:00
                </li>
                <li className="flex items-center gap-3 justify-center md:justify-start">
                  <span className="w-2 h-2 rounded-full bg-primary/50" />
                  Early or late check-in only by prior arrangement
                </li>
                <li className="flex items-center gap-3 justify-center md:justify-start">
                  <span className="w-2 h-2 rounded-full bg-primary/50" />
                  Check-out: 10:00
                </li>
                <li className="flex items-center gap-3 justify-center md:justify-start">
                  <span className="w-2 h-2 rounded-full bg-primary/50" />
                  Early or late check-out only by prior arrangement
                </li>
              </ul>
            </div>
            
            {/* What's Included */}
            <div className="text-center md:text-left">
              <h2 className="font-heading text-2xl text-foreground mb-6">
                What's Included
              </h2>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Wifi size={16} className="text-primary" strokeWidth={1.5} />
                  <span className="text-sm">Free WiFi</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Car size={16} className="text-primary" strokeWidth={1.5} />
                  <span className="text-sm">Free Parking</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Bed size={16} className="text-primary" strokeWidth={1.5} />
                  <span className="text-sm">Fresh Linen & Towels</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Coffee size={16} className="text-primary" strokeWidth={1.5} />
                  <span className="text-sm">Tea & Coffee</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Refrigerator size={16} className="text-primary" strokeWidth={1.5} />
                  <span className="text-sm">Kitchenette</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Bath size={16} className="text-primary" strokeWidth={1.5} />
                  <span className="text-sm">Private Bathroom</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Centered CTA & Booking Widget */}
          <div className="text-center">
            <Button variant="default" size="lg" className="mb-10" asChild>
              <Link to="/contact">Check Availability</Link>
            </Button>
            
            {/* ResNova Booking Widget Placeholder */}
            <div className="max-w-4xl mx-auto bg-background rounded-xl p-8 shadow-card">
              <h3 className="font-heading text-xl text-foreground mb-4">Online Booking</h3>
              <div className="min-h-[300px] flex items-center justify-center">
                <rr-resnova 
                  widget-id="a05ce6fd-8241-4d18-9979-555e57b0ebcc" 
                  api-url="https://resnova.resrequest.com/api/"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — INTRO */}
      <section className="section-spacing section-white section-divider">
        <div className="container">
          <div className="text-center content-narrow">
            <span className="section-label">Accommodation</span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-8 leading-tight text-balance">
              Choose Your Perfect Room
            </h2>
            <p className="font-body text-muted-foreground text-lg md:text-xl leading-relaxed">
              All rooms include en-suite bathrooms, comfortable bedding, and serene farm surroundings. 
              Each space has been carefully prepared to ensure a peaceful and memorable visit.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4 — ROOMS GRID */}
      <section className="pb-24 md:pb-32 section-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room) => (
              <RoomCard key={room.name} {...room} />
            ))}
          </div>
        </div>
      </section>


      {/* SECTION 6 — FINAL CTA */}
      <section className="section-spacing section-white section-divider">
        <div className="container">
          <div className="text-center content-narrow">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 text-balance">
              Ready to Book Your Stay?
            </h2>
            <p className="font-body text-muted-foreground text-lg md:text-xl leading-relaxed mb-10">
              Contact us to check availability and secure your stay at Aló Accommodation.
            </p>
            <Button 
              variant="default" 
              className="h-14 px-10 text-base" 
              asChild
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Rooms;