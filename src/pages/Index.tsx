import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContractorCard from "@/components/ContractorCard";
import {
  Search,
  Shield,
  Users,
  IndianRupee,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Star,
  Home,
  PaintBucket,
  Wrench,
  Zap,
  Building2,
  Hammer,
} from "lucide-react";
import heroImage from "@/assets/hero-contractor.jpg";
import contractor1 from "@/assets/contractor-1.jpg";
import contractor2 from "@/assets/contractor-2.jpg";
import contractor3 from "@/assets/contractor-3.jpg";

const services = [
  { icon: Home, label: "Home Construction", count: "2,450+" },
  { icon: PaintBucket, label: "Painting", count: "1,230+" },
  { icon: Wrench, label: "Plumbing", count: "890+" },
  { icon: Zap, label: "Electrical Work", count: "1,100+" },
  { icon: Building2, label: "Renovation", count: "1,780+" },
  { icon: Hammer, label: "Carpentry", count: "650+" },
];

const howItWorks = [
  {
    step: "01",
    title: "Post Your Project",
    description: "Describe your construction or renovation needs with budget and timeline",
  },
  {
    step: "02",
    title: "Receive Bids",
    description: "Get competitive quotes from verified local contractors in your area",
  },
  {
    step: "03",
    title: "Compare & Choose",
    description: "Review profiles, ratings, and past work to select the best thekedar",
  },
  {
    step: "04",
    title: "Get Work Done",
    description: "Work with your chosen contractor and track progress seamlessly",
  },
];

const stats = [
  { value: "10,000+", label: "Verified Thekedars" },
  { value: "50,000+", label: "Projects Completed" },
  { value: "100+", label: "Cities Covered" },
  { value: "4.8/5", label: "Average Rating" },
];

const featuredContractors = [
  {
    name: "Rajesh Kumar",
    specialty: "Civil Contractor",
    rating: 4.9,
    reviews: 127,
    location: "Delhi NCR",
    experience: "12 years",
    verified: true,
    imageUrl: contractor1,
    completedProjects: 245,
  },
  {
    name: "Vikram Singh",
    specialty: "Renovation Expert",
    rating: 4.8,
    reviews: 98,
    location: "Mumbai",
    experience: "8 years",
    verified: true,
    imageUrl: contractor2,
    completedProjects: 189,
  },
  {
    name: "Priya Sharma",
    specialty: "Interior Designer",
    rating: 4.9,
    reviews: 156,
    location: "Bangalore",
    experience: "10 years",
    verified: true,
    imageUrl: contractor3,
    completedProjects: 203,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-16 overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNDBMNDAgNDBIMHoiLz48cGF0aCBkPSJNMjAgMjBtLTEgMGExIDEgMCAxIDAgMiAwYTEgMSAwIDEgMCAtMiAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiLz48L2c+PC9zdmc+')] opacity-30" />
        
        <div className="relative container mx-auto px-4 py-20 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 text-center lg:text-left">
              <Badge variant="secondary" className="bg-primary-foreground/15 text-primary-foreground border-0 px-4 py-1.5">
                🏗️ India's #1 Contractor Discovery Platform
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight animate-fade-up">
                Find Trusted <span className="text-accent">Thekedars</span> for Your Dream Project
              </h1>
              
              <p className="text-lg md:text-xl text-primary-foreground/80 max-w-xl mx-auto lg:mx-0 animate-fade-up stagger-1">
                Connect with verified local contractors, compare bids, and get your construction or renovation done with confidence.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up stagger-2">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/customer-dashboard">
                    Post Your Project
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="hero-outline" size="xl" asChild>
                  <Link to="/find-thekedars">
                    <Search className="w-5 h-5" />
                    Find Thekedars
                  </Link>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-4 text-primary-foreground/70 animate-fade-up stagger-3">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-accent" />
                  <span className="text-sm">Verified Contractors</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-accent" />
                  <span className="text-sm">4.8★ Average Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  <span className="text-sm">50K+ Projects Done</span>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="hidden lg:block relative animate-fade-up stagger-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={heroImage}
                  alt="Professional contractor"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              
              {/* Floating Card */}
              <Card className="absolute -bottom-6 -left-6 bg-card shadow-xl animate-float">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-success/15 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-success" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">1,234 Projects</p>
                    <p className="text-sm text-muted-foreground">Completed this month</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</p>
                <p className="text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="secondary" className="mb-4">Our Services</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Find Experts for Every Need
            </h2>
            <p className="text-muted-foreground">
              From home construction to renovations, we have verified thekedars for all your requirements.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {services.map((service, idx) => (
              <Card
                key={idx}
                variant="interactive"
                className="p-6 text-center group"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="font-medium text-foreground mb-1">{service.label}</h3>
                <p className="text-sm text-muted-foreground">{service.count} Thekedars</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="secondary" className="mb-4">How It Works</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Get Your Project Done in 4 Simple Steps
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((item, idx) => (
              <Card key={idx} variant="elevated" className="relative p-6">
                <span className="text-6xl font-bold text-primary/10 absolute top-4 right-4">
                  {item.step}
                </span>
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-bold mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Contractors */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-4">
            <div>
              <Badge variant="secondary" className="mb-4">Top Rated</Badge>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                Featured Thekedars
              </h2>
              <p className="text-muted-foreground mt-2">
                Highly rated and trusted contractors ready to help
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link to="/find-thekedars">
                View All Thekedars
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredContractors.map((contractor, idx) => (
              <ContractorCard key={idx} {...contractor} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNDBMNDAgNDBIMHoiLz48cGF0aCBkPSJNMjAgMjBtLTEgMGExIDEgMCAxIDAgMiAwYTEgMSAwIDEgMCAtMiAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiLz48L2c+PC9zdmc+')] opacity-30" />
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Join thousands of happy homeowners who found their perfect contractor through ThekedarHub
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/customer-dashboard">
                Post Your Project Free
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <Link to="/contractor-dashboard">
                Join as Contractor
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
