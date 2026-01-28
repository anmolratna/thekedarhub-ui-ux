import { IndianRupee, MapPin, Calendar, Eye, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  category: string;
  budget: { min: number; max: number };
  location: string;
  postedDate: string;
  description: string;
  bidsCount: number;
  status: "open" | "in-progress" | "completed";
  isContractorView?: boolean;
}

const ProjectCard = ({
  title,
  category,
  budget,
  location,
  postedDate,
  description,
  bidsCount,
  status,
  isContractorView = false,
}: ProjectCardProps) => {
  const statusVariant = {
    open: "success",
    "in-progress": "warning",
    completed: "secondary",
  } as const;

  const statusLabel = {
    open: "Open for Bids",
    "in-progress": "In Progress",
    completed: "Completed",
  };

  return (
    <Card variant="interactive">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1">
            <Badge variant="secondary" className="mb-2">
              {category}
            </Badge>
            <CardTitle className="text-lg">{title}</CardTitle>
          </div>
          <Badge variant={statusVariant[status]}>{statusLabel[status]}</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>

        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <IndianRupee className="w-4 h-4 text-primary" />
            <span>
              ₹{budget.min.toLocaleString("en-IN")} - ₹{budget.max.toLocaleString("en-IN")}
            </span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4 text-primary" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="w-4 h-4 text-primary" />
            <span>{postedDate}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Users className="w-4 h-4 text-primary" />
            <span>{bidsCount} bids</span>
          </div>
        </div>

        <div className="flex gap-3 pt-2">
          {isContractorView ? (
            <Button variant="accent" className="flex-1">
              Submit Bid
            </Button>
          ) : (
            <>
              <Button variant="default" className="flex-1">
                <Eye className="w-4 h-4" />
                View Bids
              </Button>
              <Button variant="outline" className="flex-1">
                Edit Project
              </Button>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
