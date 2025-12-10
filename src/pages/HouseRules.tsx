import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Clock, AlertCircle, Shield, Droplets, ClipboardCheck, Bug, Ban } from "lucide-react";

import aloeFlowers from "@/assets/aloe-flowers.jpg";

const rules = [
  {
    icon: Clock,
    title: "Check-in & Check-out",
    items: [
      "All rooms check-in at 14h00",
      "Earlier access to any room requires booking the night before",
      "Late check-in only by prior arrangement",
      "Check-out: 10h00",
      "Early check-out only by prior arrangement",
    ],
  },
  {
    icon: Ban,
    title: "Not Permitted",
    items: [
      "No alcoholic beverages may be brought onto and into the property, immediate termination of stay without refund will be applicable if found.",
      "No smoking inside the rooms.",
      "No noise or loud music in rooms or on the porch.",
      "Only the number of guests allowed per room may sleep over.",
      "No children under 12 may stay in rooms unsupervised.",
      "Pets are not allowed.",
      "No disturbing other guests.",
      "No entering rooms of other parties' guests, without invitation to do so, then only when they are present.",
      "All property of Aló Accommodation remains in their designated areas.",
      "Parking at own risk.",
      "No drunk driving or hooting on premises.",
      "No illegal substances allowed.",
      "Guests to set room alarms if they are leaving the site.",
      "No braai or fires in or around the premises.",
    ],
  },
  {
    icon: Shield,
    title: "Security",
    items: [
      "Each room has a separate alarm system. Beam sensors are set approximately 5cm from the windows and doors.",
      "Please keep this in mind by not peeking through the windows or doors as this will set off the alarm and cause disruption.",
      "Room alarms to be set when guests leave their rooms.",
    ],
  },
  {
    icon: Droplets,
    title: "Water",
    items: [
      "Aló make use of borehole water. Use water at own risk.",
      "Bottled water are provided in the rooms.",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Inventory",
    items: [
      "Please check room inventory within 30 minutes of arrival and report discrepancies via the number provided.",
      "Any missing items, damages, or breakages after check-out will be charged to the guest via card payment upon check out.",
      "The Guest will be responsible for any fees incurred through Misconduct or damages to property.",
    ],
  },
  {
    icon: Bug,
    title: "Mosquito Control",
    items: [
      "Kindly unplug the Raid Liquid Mosquito killer when not in use.",
    ],
  },
  {
    icon: AlertCircle,
    title: "General",
    items: [
      "Aló Accommodation reserves the right to remove any person from the premises whose reckless behavior endangers others.",
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
