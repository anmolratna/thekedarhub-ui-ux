import { Star, Shield, MapPin, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ContractorCardProps {
  name: string;
  specialty: string;
  rating: number;
  reviews: number;
  location: string;
  experience: string;
  verified: boolean;
  imageUrl: string;
  completedProjects: number;
}

const ContractorCard = ({
  name,
  specialty,
  rating,
  reviews,
  location,
  experience,
  verified,
  imageUrl,
  completedProjects,
}: ContractorCardProps) => {
  return (
    <Card variant="interactive" className="overflow-hidden">
      <div className="relative">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-48 object-cover"
        />
        {verified && (
          <Badge variant="verified" className="absolute top-3 right-3">
            <Shield className="w-3 h-3" />
            Verified
          </Badge>
        )}
      </div>
      <CardContent className="p-5 space-y-4">
        <div>
          <h3 className="font-semibold text-lg text-foreground">{name}</h3>
          <p className="text-sm text-muted-foreground">{specialty}</p>
        </div>

        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-accent text-accent" />
            <span className="font-medium">{rating}</span>
            <span className="text-muted-foreground">({reviews})</span>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <MapPin className="w-4 h-4" />
            {location}
          </div>
        </div>

        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Briefcase className="w-4 h-4" />
            {experience} exp
          </div>
          <div>
            {completedProjects} projects
          </div>
        </div>

        <Button variant="default" className="w-full">
          View Profile
        </Button>
      </CardContent>
    </Card>
  );
};

export default ContractorCard;
