import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Clock, AlertCircle, Shield, ClipboardCheck, Bug, Ban } from "lucide-react";

import aloeFlowers from "@/assets/aloe-flowers.jpg";

const rules = [
  {
    icon: Clock,
    title: "Check-in & Check-out",
    items: [
      "Standard check-in for all rooms is 14h00.",
      "Groom's Room check-in is from 11h00.",
      "Earlier access to any room is only guaranteed if the night before is booked and paid for.",
      "Late check-in is permitted only by prior arrangement and agreement.",
      "Groom's Room check-out is strictly 09h00.",
      "All other rooms have a strict check-out time of 10h00.",
      "Early check-out before 07h00 is permitted only by prior arrangement and agreement.",
    ],
  },
  {
    icon: Shield,
    title: "Security",
    items: [
      "Each room is fitted with a separate alarm system.",
      "Beam sensors are positioned approximately 5cm from windows and doors.",
      "Guests are requested not to lean, peer through, or interfere with windows or doors, as this may trigger the alarm and cause disruption.",
      "Guests must activate room alarms when leaving their rooms or the premises.",
      "Any unnecessary or avoidable alarm activations may be charged to the guest.",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Inventory",
    items: [
      "Guests are required to check room inventory within 30 minutes of arrival and report any discrepancies using the contact number provided.",
      "Any missing items, damages, or breakages identified during or after the stay will be charged to the guest's card upon check-out.",
      "Guests will be held liable for any costs arising from misconduct, negligence, or damage to property.",
    ],
  },
  {
    icon: Bug,
    title: "Mosquito Control",
    items: [
      "Kindly unplug the Raid Liquid Mosquito Killer when not in use to prevent damage or safety risks.",
    ],
  },
  {
    icon: Ban,
    title: "Not Permitted",
    items: [
      "No alcoholic beverages may be brought onto or consumed on the property. Any breach of this rule will result in immediate termination of the stay without refund.",
      "Smoking is strictly prohibited inside all rooms.",
      "No loud music, excessive noise, or disruptive behaviour in rooms, on porches, or anywhere on the premises.",
      "Only the number of guests booked and paid for per room may stay overnight.",
      "Children under the age of 16 may not stay in rooms without adult supervision.",
      "Pets are not permitted on the premises.",
      "Guests may not disturb or interfere with other guests.",
      "Entering another guest's room is strictly prohibited unless explicitly invited and only when the host guest is present.",
      "All property belonging to Aló Accommodation must remain in its designated areas at all times.",
      "Parking is at the guest's own risk.",
      "No drunk driving, hooting, or reckless driving on the premises.",
      "No illegal substances are permitted anywhere on the property.",
      "Guests must activate room alarms when leaving the site.",
      "No braais, fires, or open flames are permitted in or around the premises.",
      "No cooking of any kind is permitted in rooms, including the use of personal appliances such as air fryers, hot plates, gas stoves, or similar equipment.",
    ],
  },
  {
    icon: AlertCircle,
    title: "General",
    items: [
      "Aló Accommodation reserves the right to remove any person from the premises without refund if their behaviour is reckless, unlawful, disruptive, or endangers the safety, comfort, or property of others.",
    ],
  },
];

const HouseRules = () => {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <Hero title="House Rules" image={aloeFlowers} />

      {/* Quote Section */}
      <section className="py-section section-white">
        <div className="container text-center max-w-3xl mx-auto">
          <p className="font-heading text-2xl md:text-3xl text-foreground italic leading-relaxed">
            "A little consideration, a little thought for others, makes all the difference."
          </p>
          <p className="font-heading text-xl text-primary mt-4">- A. A. Milne</p>
        </div>
      </section>

      {/* Rules Section */}
      <section className="py-section section-beige">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {rules.map((rule) => (
                <div
                  key={rule.title}
                  className="bg-card p-6 rounded-lg shadow-soft"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                      <rule.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-heading text-xl text-foreground">
                      {rule.title}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {rule.items.map((item, index) => (
                      <li
                        key={index}
                        className="font-body text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <span className="text-primary mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Thank You Section */}
      <section className="py-section section-white">
        <div className="container text-center max-w-2xl mx-auto">
          <p className="font-body text-muted-foreground mb-2">
            Thank you for your co-operation.
          </p>
          <p className="font-body text-muted-foreground mb-4">
            Enjoy your stay
          </p>
          <p className="font-heading text-xl text-primary">The Aló-Team</p>

          <div className="mt-8">
            <p className="font-body text-sm text-muted-foreground uppercase tracking-widest mb-4">
              Take a look at our info page
            </p>
            <Button variant="outline" asChild>
              <Link to="/about">About Aló</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default HouseRules;
