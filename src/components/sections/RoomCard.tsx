import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Bed, Users, Wifi, Car } from "lucide-react";

interface RoomCardProps {
  name: string;
  description: string;
  image: string;
  price: string;
  features?: string[];
  sleeps?: number;
}

export function RoomCard({
  name,
  description,
  image,
  price,
  features = [],
  sleeps = 2,
}: RoomCardProps) {
  return (
    <div className="bg-card rounded-lg overflow-hidden shadow-soft card-hover">
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
        <h3 className="font-heading text-2xl text-foreground mb-2">{name}</h3>
        <p className="font-body text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Users size={16} />
            <span>Sleeps {sleeps}</span>
          </div>
          <div className="flex items-center gap-1">
            <Wifi size={16} />
            <span>WiFi</span>
          </div>
          <div className="flex items-center gap-1">
            <Car size={16} />
            <span>Parking</span>
          </div>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div>
            <span className="font-heading text-xl text-primary">{price}</span>
            <span className="text-muted-foreground text-sm"> / night</span>
          </div>
          <Button size="sm" asChild>
            <Link to="/contact">Book Now</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
