import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Wifi, Car, Users, Bed, Coffee, Bath, UtensilsCrossed, Refrigerator } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect } from "react";

// Images
import roomPreview from "@/assets/room-preview.png";
import room1 from "@/assets/room-1.jpg";
import roomDetail1 from "@/assets/room-detail-1.png";
import roomDetail2 from "@/assets/room-detail-2.png";
import roomDetail3 from "@/assets/room-detail-3.png";
import groomsRoom from "@/assets/grooms-room.png";
import gallery1 from "@/assets/gallery-1.png";
import gallery2 from "@/assets/gallery-2.png";
import gallery3 from "@/assets/gallery-3.png";
import interiorDetail from "@/assets/interior-detail.png";

// Room data with updated prices
const rooms = [
  {
    name: "Room 1",
    description: "A spacious room with elegant decor and stunning farm views.",
    image: room1,
    price: "R1,650",
    sleeps: 2,
    beds: "1 Queen Bed",
  },
  {
    name: "Room 2",
    description: "Classic comfort with modern amenities and garden views.",
    image: roomDetail2,
    price: "R1,100",
    sleeps: 2,
    beds: "1 Queen Bed",
  },
  {
    name: "Room 3",
    description: "Light-filled retreat perfect for a peaceful getaway.",
    image: roomDetail3,
    price: "R1,100",
    sleeps: 2,
    beds: "1 Queen Bed",
  },
  {
    name: "Room 4",
    description: "Cozy and intimate with countryside charm throughout.",
    image: gallery1,
    price: "R1,485",
    sleeps: 2,
    beds: "1 King Bed",
  },
  {
    name: "Room 5",
    description: "Elegant furnishings creating a tranquil atmosphere.",
    image: roomDetail1,
    price: "R1,100",
    sleeps: 2,
    beds: "1 Queen Bed",
  },
  {
    name: "Room 6",
    description: "Wake up to birdsong and beautiful countryside views.",
    image: gallery2,
    price: "R1,100",
    sleeps: 2,
    beds: "1 Queen Bed",
  },
  {
    name: "Room 7",
    description: "Peaceful sanctuary with soft linens and warm decor.",
    image: gallery3,
    price: "R1,100",
    sleeps: 2,
    beds: "1 Queen Bed",
  },
  {
    name: "Room 8",
    description: "Comfortable space designed for rest and relaxation.",
    image: interiorDetail,
    price: "R1,100",
    sleeps: 2,
    beds: "1 Queen Bed",
  },
  {
    name: "Room 9",
    description: "Charming room with thoughtful details throughout.",
    image: roomPreview,
    price: "R1,100",
    sleeps: 2,
    beds: "1 Queen Bed",
  },
  {
    name: "Room 10",
    description: "Serene escape with views of the farm gardens.",
    image: roomDetail2,
    price: "R1,100",
    sleeps: 2,
    beds: "1 Queen Bed",
  },
  {
    name: "Room 11",
    description: "Quiet retreat perfect for unwinding after exploring.",
    image: roomDetail3,
    price: "R1,100",
    sleeps: 2,
    beds: "1 Queen Bed",
  },
];

interface RoomCardProps {
  name: string;
  description: string;
  image: string;
  price: string;
  sleeps: number;
  beds: string;
}

function RoomCard({ name, description, image, price, sleeps, beds }: RoomCardProps) {
  return (
    <div className="bg-background rounded-xl overflow-hidden card-hover group">
      {/* Image */}
      <div className="image-zoom aspect-[4/3]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
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
          <Link to="/contact">Book Now</Link>
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
                  Deposit: 50% of total booking
                </li>
                <li className="flex items-center gap-3 justify-center md:justify-start">
                  <span className="w-2 h-2 rounded-full bg-primary/50" />
                  Check-in: 14:00 onwards
                </li>
                <li className="flex items-center gap-3 justify-center md:justify-start">
                  <span className="w-2 h-2 rounded-full bg-primary/50" />
                  Check-out: 10:00
                </li>
                <li className="flex items-center gap-3 justify-center md:justify-start">
                  <span className="w-2 h-2 rounded-full bg-primary/50" />
                  Balance due on arrival
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

      {/* SECTION 5 — GROOM'S ROOM FEATURE */}
      <section className="section-spacing section-beige">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Large Image */}
            <div className="image-zoom rounded-xl overflow-hidden shadow-hover">
              <img
                src={groomsRoom}
                alt="Groom's Room at Aló Accommodation"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
            
            {/* Content */}
            <div>
              <span className="section-label">Rooms</span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
                Groom's Room
              </h2>
              <p className="font-body text-muted-foreground text-lg leading-relaxed mb-10">
                Perfect for wedding parties, our Groom's Room offers a special space for the groom 
                and his party to prepare for the big day. Featuring masculine decor, comfortable 
                seating, and all the amenities needed for a memorable getting-ready experience. 
                This premium suite provides the ideal setting for those important pre-ceremony moments.
              </p>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">Enquire Now</Link>
              </Button>
            </div>
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