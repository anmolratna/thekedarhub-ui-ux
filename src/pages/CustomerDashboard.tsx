import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import BidCard from "@/components/BidCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Plus,
  FolderOpen,
  Clock,
  CheckCircle2,
  IndianRupee,
  TrendingUp,
  Bell,
  Settings,
  User,
  LogOut,
} from "lucide-react";
import contractor1 from "@/assets/contractor-1.jpg";
import contractor2 from "@/assets/contractor-2.jpg";

const myProjects = [
  {
    title: "3BHK Flat Renovation",
    category: "Renovation",
    budget: { min: 200000, max: 350000 },
    location: "Noida Sector 62",
    postedDate: "2 days ago",
    description: "Complete renovation of a 3BHK flat including flooring, painting, and modular kitchen installation.",
    bidsCount: 8,
    status: "open" as const,
  },
  {
    title: "Bathroom Waterproofing",
    category: "Plumbing",
    budget: { min: 25000, max: 40000 },
    location: "Greater Noida",
    postedDate: "5 days ago",
    description: "Waterproofing of 2 bathrooms with tile replacement and new fittings.",
    bidsCount: 5,
    status: "in-progress" as const,
  },
  {
    title: "House Painting",
    category: "Painting",
    budget: { min: 50000, max: 80000 },
    location: "Ghaziabad",
    postedDate: "1 week ago",
    description: "Interior and exterior painting of a 2-storey independent house.",
    bidsCount: 12,
    status: "completed" as const,
  },
];

const sampleBids = [
  {
    contractorName: "Rajesh Kumar",
    contractorImage: contractor1,
    bidAmount: 275000,
    timeline: "45 days",
    message: "I have 12 years of experience in renovation projects. I can start within a week and ensure high-quality materials are used. Happy to discuss the details further.",
    rating: 4.9,
    verified: true,
  },
  {
    contractorName: "Vikram Singh",
    contractorImage: contractor2,
    bidAmount: 295000,
    timeline: "40 days",
    message: "I specialize in premium renovations with imported fittings. My team of 15 workers can complete this project efficiently with a 2-year warranty.",
    rating: 4.8,
    verified: true,
  },
];

const stats = [
  { label: "Active Projects", value: "2", icon: FolderOpen, color: "text-primary" },
  { label: "Total Bids Received", value: "25", icon: TrendingUp, color: "text-accent" },
  { label: "Completed Projects", value: "8", icon: CheckCircle2, color: "text-success" },
  { label: "Total Spent", value: "₹12.5L", icon: IndianRupee, color: "text-primary" },
];

const CustomerDashboard = () => {
  const [activeTab, setActiveTab] = useState<"all" | "open" | "in-progress" | "completed">("all");
  const [showNewProject, setShowNewProject] = useState(false);

  const filteredProjects = activeTab === "all" 
    ? myProjects 
    : myProjects.filter(p => p.status === activeTab);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                Welcome back, Amit! 👋
              </h1>
              <p className="text-muted-foreground mt-1">
                Manage your projects and find the best contractors
              </p>
            </div>
            <Dialog open={showNewProject} onOpenChange={setShowNewProject}>
              <DialogTrigger asChild>
                <Button variant="accent" size="lg">
                  <Plus className="w-5 h-5" />
                  Post New Project
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-lg">
                <DialogHeader>
                  <DialogTitle>Post a New Project</DialogTitle>
                  <DialogDescription>
                    Describe your project to receive competitive bids from verified contractors.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 mt-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">
                      Project Title
                    </label>
                    <Input placeholder="e.g., Kitchen Renovation" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">
                      Category
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="construction">Home Construction</SelectItem>
                        <SelectItem value="renovation">Renovation</SelectItem>
                        <SelectItem value="painting">Painting</SelectItem>
                        <SelectItem value="plumbing">Plumbing</SelectItem>
                        <SelectItem value="electrical">Electrical</SelectItem>
                        <SelectItem value="interior">Interior Design</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">
                        Min Budget (₹)
                      </label>
                      <Input type="number" placeholder="50,000" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">
                        Max Budget (₹)
                      </label>
                      <Input type="number" placeholder="1,00,000" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">
                      Location
                    </label>
                    <Input placeholder="e.g., Noida Sector 62" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">
                      Project Description
                    </label>
                    <Textarea 
                      placeholder="Describe your project requirements in detail..."
                      rows={4}
                    />
                  </div>
                  <Button variant="accent" className="w-full" size="lg">
                    Post Project
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

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
            {/* Projects Section */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle>My Projects</CardTitle>
                    <div className="flex gap-2">
                      {(["all", "open", "in-progress", "completed"] as const).map((tab) => (
                        <button
                          key={tab}
                          onClick={() => setActiveTab(tab)}
                          className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${
                            activeTab === tab
                              ? "bg-primary text-primary-foreground"
                              : "text-muted-foreground hover:bg-muted"
                          }`}
                        >
                          {tab.charAt(0).toUpperCase() + tab.slice(1).replace("-", " ")}
                        </button>
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {filteredProjects.map((project, idx) => (
                    <ProjectCard key={idx} {...project} />
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Recent Bids */}
              <Card>
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg">Recent Bids</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {sampleBids.map((bid, idx) => (
                    <BidCard key={idx} {...bid} />
                  ))}
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
                    <Badge variant="destructive" className="ml-auto">3</Badge>
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

export default CustomerDashboard;
