import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Clock, AlertCircle, Volume2, Shield, Droplets, ClipboardCheck, Bug, Ban } from "lucide-react";

import aloeFlowers from "@/assets/aloe-flowers.jpg";

const rules = [
  {
    icon: Clock,
    title: "Check-in & Check-out",
    items: [
      "Checkout: 10h00",
      "Groom's Room: Checkout 09h00",
      "Check out at 10h00 for Groom's Room as per prior arrangement, providing no wedding the following day.",
    ],
  },
  {
    icon: Ban,
    title: "Not Permitted",
    items: [
      "No smoking inside the rooms.",
      "Pets are not allowed.",
      "No children under the age of 12 should stay in rooms unsupervised.",
      "Only the number of guests allowed per room may sleep over.",
    ],
  },
  {
    icon: Volume2,
    title: "Noise Policy",
    items: [
      "No noise or loud music in the rooms or on the porch.",
    ],
  },
  {
    icon: Shield,
    title: "Security",
    items: [
      "Each room has a separate alarm system. Beam sensors are set approximately 5cm from the windows and doors.",
      "Please keep this in mind by not peeking through the windows or doors as this will set off the alarm and cause disruption.",
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
      "Please check inventory within one hour of arrival and report discrepancies to the number provided on the inventory.",
      "Any missing items/damages/breakages following check-out will be charged to your account and will be payable within 30 days of departure.",
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
