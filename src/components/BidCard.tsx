import { IndianRupee, Clock, MapPin, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface BidCardProps {
  contractorName: string;
  contractorImage: string;
  bidAmount: number;
  timeline: string;
  message: string;
  rating: number;
  verified: boolean;
}

const BidCard = ({
  contractorName,
  contractorImage,
  bidAmount,
  timeline,
  message,
  rating,
  verified,
}: BidCardProps) => {
  return (
    <Card variant="elevated" className="overflow-hidden">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <img
              src={contractorImage}
              alt={contractorName}
              className="w-12 h-12 rounded-full object-cover ring-2 ring-border"
            />
            <div>
              <CardTitle className="text-base flex items-center gap-2">
                {contractorName}
                {verified && (
                  <Badge variant="verified" className="text-xs px-2 py-0">
                    Verified
                  </Badge>
                )}
              </CardTitle>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <span>⭐ {rating}</span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-1 text-2xl font-bold text-primary">
              <IndianRupee className="w-5 h-5" />
              {bidAmount.toLocaleString("en-IN")}
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Clock className="w-3 h-3" />
              {timeline}
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0 space-y-4">
        <p className="text-sm text-muted-foreground leading-relaxed">{message}</p>
        <div className="flex gap-3">
          <Button variant="default" className="flex-1">
            Accept Bid
          </Button>
          <Button variant="outline" className="flex-1">
            Message
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BidCard;
