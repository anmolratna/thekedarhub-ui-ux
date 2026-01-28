import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Briefcase,
  Shield,
  Clock,
  IndianRupee,
  TrendingUp,
  Bell,
  Settings,
  User,
  LogOut,
  CheckCircle2,
  AlertCircle,
  FileText,
  Upload,
  Star,
  MapPin,
} from "lucide-react";
import contractor1 from "@/assets/contractor-1.jpg";

const availableProjects = [
  {
    title: "Villa Construction - 4BHK",
    category: "Home Construction",
    budget: { min: 5000000, max: 7000000 },
    location: "Gurgaon, Haryana",
    postedDate: "1 hour ago",
    description: "Looking for experienced contractor to build a 4BHK villa with modern amenities including swimming pool and landscaping.",
    bidsCount: 3,
    status: "open" as const,
  },
  {
    title: "Office Renovation - 2000 sqft",
    category: "Renovation",
    budget: { min: 800000, max: 1200000 },
    location: "Noida Sector 18",
    postedDate: "3 hours ago",
    description: "Complete renovation of commercial office space including false ceiling, flooring, and partition work.",
    bidsCount: 7,
    status: "open" as const,
  },
  {
    title: "Apartment Painting - 2BHK",
    category: "Painting",
    budget: { min: 40000, max: 60000 },
    location: "Delhi - Dwarka",
    postedDate: "5 hours ago",
    description: "Interior painting of 2BHK apartment with premium quality Asian Paints. Includes wall preparation and minor repairs.",
    bidsCount: 12,
    status: "open" as const,
  },
];

const myBids = [
  {
    projectTitle: "Farmhouse Construction",
    bidAmount: 4500000,
    status: "pending",
    submittedDate: "2 days ago",
  },
  {
    projectTitle: "Kitchen Modular Work",
    bidAmount: 185000,
    status: "accepted",
    submittedDate: "5 days ago",
  },
  {
    projectTitle: "Bathroom Renovation",
    bidAmount: 75000,
    status: "rejected",
    submittedDate: "1 week ago",
  },
];

const stats = [
  { label: "Active Bids", value: "5", icon: Briefcase, color: "text-primary" },
  { label: "Projects Won", value: "23", icon: TrendingUp, color: "text-success" },
  { label: "Total Earnings", value: "₹42.5L", icon: IndianRupee, color: "text-accent" },
  { label: "Rating", value: "4.9★", icon: Star, color: "text-warning" },
];

const ContractorDashboard = () => {
  const [selectedProject, setSelectedProject] = useState<typeof availableProjects[0] | null>(null);
  const isVerified = true;
  const verificationProgress = 100;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-4">
              <img
                src={contractor1}
                alt="Profile"
                className="w-16 h-16 rounded-full object-cover ring-4 ring-border"
              />
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                    Rajesh Kumar
                  </h1>
                  {isVerified ? (
                    <Badge variant="verified">
                      <Shield className="w-3 h-3" />
                      Verified
                    </Badge>
                  ) : (
                    <Badge variant="pending">
                      <AlertCircle className="w-3 h-3" />
                      Pending Verification
                    </Badge>
                  )}
                </div>
                <p className="text-muted-foreground mt-0.5 flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Civil Contractor • Delhi NCR
                </p>
              </div>
            </div>
            <Button variant="outline">
              <Settings className="w-4 h-4" />
              Edit Profile
            </Button>
          </div>

          {/* Verification Banner */}
          {!isVerified && (
            <Card className="mb-8 border-warning bg-warning/5">
              <CardContent className="p-5">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-warning/15 flex items-center justify-center">
                      <AlertCircle className="w-6 h-6 text-warning" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Complete Your Verification</h3>
                      <p className="text-sm text-muted-foreground">
                        Get verified to access more projects and build trust with customers
                      </p>
                    </div>
                  </div>
                  <div className="w-full md:w-48">
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-medium">{verificationProgress}%</span>
                    </div>
                    <Progress value={verificationProgress} className="h-2" />
                  </div>
                  <Button variant="accent">Complete Verification</Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, idx) => (
              <Card key={idx} variant="elevated">
                <CardContent className="p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                      <p className={`text-2xl font-bold mt-1 ${stat.color}`}>{stat.value}</p>
                    </div>
                    <div className={`w-12 h-12 rounded-xl bg-secondary flex items-center justify-center ${stat.color}`}>
                      <stat.icon className="w-6 h-6" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Available Projects */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Available Projects</CardTitle>
                      <CardDescription className="mt-1">
                        Projects matching your skills and location
                      </CardDescription>
                    </div>
                    <Badge variant="secondary">{availableProjects.length} New</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {availableProjects.map((project, idx) => (
                    <Dialog key={idx}>
                      <DialogTrigger asChild>
                        <div onClick={() => setSelectedProject(project)}>
                          <ProjectCard {...project} isContractorView />
                        </div>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-lg">
                        <DialogHeader>
                          <DialogTitle>Submit Your Bid</DialogTitle>
                          <DialogDescription>
                            {project.title} • {project.location}
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4 mt-4">
                          <div className="p-4 bg-muted rounded-lg">
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-muted-foreground">Customer Budget</span>
                              <span className="font-medium">
                                ₹{project.budget.min.toLocaleString("en-IN")} - ₹{project.budget.max.toLocaleString("en-IN")}
                              </span>
                            </div>
                          </div>
                          <div>
                            <label className="text-sm font-medium text-foreground mb-1.5 block">
                              Your Bid Amount (₹)
                            </label>
                            <Input type="number" placeholder="Enter your bid amount" />
                          </div>
                          <div>
                            <label className="text-sm font-medium text-foreground mb-1.5 block">
                              Timeline (Days)
                            </label>
                            <Input type="number" placeholder="e.g., 45" />
                          </div>
                          <div>
                            <label className="text-sm font-medium text-foreground mb-1.5 block">
                              Message to Customer
                            </label>
                            <Textarea 
                              placeholder="Explain why you're the right fit for this project..."
                              rows={4}
                            />
                          </div>
                          <Button variant="accent" className="w-full" size="lg">
                            Submit Bid
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* My Bids */}
              <Card>
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg">My Recent Bids</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {myBids.map((bid, idx) => (
                    <div key={idx} className="p-4 rounded-lg bg-muted/50 space-y-2">
                      <div className="flex items-start justify-between">
                        <h4 className="font-medium text-foreground text-sm">{bid.projectTitle}</h4>
                        <Badge 
                          variant={
                            bid.status === "accepted" ? "success" : 
                            bid.status === "rejected" ? "destructive" : "secondary"
                          }
                          className="text-xs"
                        >
                          {bid.status}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>₹{bid.bidAmount.toLocaleString("en-IN")}</span>
                        <span>{bid.submittedDate}</span>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Documents */}
              <Card>
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg">Documents</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-primary" />
                      <span className="text-sm">Aadhaar Card</span>
                    </div>
                    <CheckCircle2 className="w-5 h-5 text-success" />
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-primary" />
                      <span className="text-sm">PAN Card</span>
                    </div>
                    <CheckCircle2 className="w-5 h-5 text-success" />
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-primary" />
                      <span className="text-sm">Business License</span>
                    </div>
                    <CheckCircle2 className="w-5 h-5 text-success" />
                  </div>
                  <Button variant="outline" className="w-full mt-2">
                    <Upload className="w-4 h-4" />
                    Upload More
                  </Button>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start">
                    <Bell className="w-4 h-4 mr-3" />
                    Notifications
                    <Badge variant="destructive" className="ml-auto">2</Badge>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <User className="w-4 h-4 mr-3" />
                    Edit Profile
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Settings className="w-4 h-4 mr-3" />
                    Settings
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-destructive hover:text-destructive">
                    <LogOut className="w-4 h-4 mr-3" />
                    Logout
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContractorDashboard;
