import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Home, Bed, Mail } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="min-h-screen">
      <Helmet>
        <title>Page Not Found | Aló Accommodation</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <Navbar />

      <section className="pt-32 pb-24 section-white">
        <div className="container text-center max-w-2xl mx-auto px-4">
          <h1 className="font-heading text-6xl md:text-7xl text-primary mb-4">404</h1>
          <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-6">
            Page Not Found
          </h2>
          <p className="font-body text-muted-foreground text-lg leading-relaxed mb-12">
            Sorry, the page you're looking for doesn't exist or may have been moved.
            Let us help you find your way back.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg" asChild>
              <Link to="/">
                <Home className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/rooms">
                <Bed className="w-4 h-4 mr-2" />
                View Rooms
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">
                <Mail className="w-4 h-4 mr-2" />
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default NotFound;
