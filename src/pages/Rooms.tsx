import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { SectionTitle } from "@/components/sections/SectionTitle";
import { RoomCard } from "@/components/sections/RoomCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import roomDetail2 from "@/assets/room-detail-2.png";
import roomDetail3 from "@/assets/room-detail-3.png";
import room1 from "@/assets/room-1.jpg";

const rooms = [
  {
    name: "Room 1",
    description: "A beautifully appointed room with elegant decor and stunning farm views. Features queen bed and en-suite bathroom.",
    image: room1,
    price: "R850",
    sleeps: 2,
  },
  {
    name: "Room 2",
    description: "Classic comfort meets modern amenities in this charming room with wooden accents and garden views.",
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
  {
    name: "Room 4",
    description: "Cozy and intimate, perfect for couples seeking a peaceful getaway with countryside charm.",
    image: room1,
    price: "R850",
    sleeps: 2,
  },
  {
    name: "Room 5",
    description: "Elegant furnishings and soft linens create a tranquil atmosphere for restful nights.",
    image: roomDetail2,
    price: "R850",
    sleeps: 2,
  },
  {
    name: "Room 6",
    description: "Wake up to birdsong and beautiful views in this comfortable, well-appointed room.",
    image: roomDetail3,
    price: "R850",
    sleeps: 2,
  },
];

const Rooms = () => {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <Hero title="Our Rooms" image={roomDetail2} />

      {/* Booking Info */}
      <section className="py-section section-beige">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto text-center md:text-left">
            <div>
              <h2 className="font-heading text-2xl text-foreground mb-4">
                Booking Policies
              </h2>
              <ul className="font-body text-muted-foreground space-y-2 text-sm">
                <li>• Deposit: 50% of total booking</li>
                <li>• Check-in: 14h00 onwards</li>
                <li>• Check-out: 10h00</li>
                <li>• Balance due on arrival</li>
              </ul>
            </div>
            <div>
              <h2 className="font-heading text-2xl text-foreground mb-4">
                What's Included
              </h2>
              <ul className="font-body text-muted-foreground space-y-2 text-sm">
                <li>• Free WiFi</li>
                <li>• Free parking</li>
                <li>• Fresh linen and towels</li>
                <li>• Tea and coffee facilities</li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-8">
            <Button variant="default" size="lg" asChild>
              <Link to="/contact">Check Availability</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Rooms Introduction */}
      <section className="py-section section-white">
        <div className="container">
          <SectionTitle
            label="Accommodation"
            title="Choose Your Perfect Room"
            subtitle="Each room at Aló has been thoughtfully designed to provide comfort and tranquility. All rooms include en-suite bathrooms, quality linens, and stunning views."
          />
        </div>
      </section>

      {/* Room Cards */}
      <section className="pb-section section-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room) => (
              <RoomCard key={room.name} {...room} />
            ))}
          </div>
        </div>
      </section>

      {/* Groom's Room Highlight */}
      <section className="py-section section-beige">
        <div className="container">
          <div className="relative rounded-lg overflow-hidden">
            <img
              src={roomDetail3}
              alt="Groom's Room"
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-accent/80 via-accent/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <span className="font-body text-sm uppercase tracking-widest text-primary-foreground/80 mb-2 block">
                Room 5
              </span>
              <h2 className="font-heading text-3xl md:text-4xl text-primary-foreground mb-4">
                Groom's Room
              </h2>
              <p className="font-body text-primary-foreground/90 max-w-xl mb-6">
                Perfect for wedding parties, our Groom's Room offers a special space 
                for the groom and his party to prepare for the big day.
              </p>
              <Button variant="hero" asChild>
                <Link to="/contact">Enquire Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-section section-white">
        <div className="container text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
            Ready to Book Your Stay?
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto mb-8">
            Contact us to check availability and secure your room at Aló Accommodation.
          </p>
          <Button size="lg" asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Rooms;
