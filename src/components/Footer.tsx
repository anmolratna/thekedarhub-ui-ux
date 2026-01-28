import { Link } from "react-router-dom";
import { Hammer, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-primary-foreground flex items-center justify-center">
                <Hammer className="w-5 h-5 text-foreground" />
              </div>
              <span className="font-display text-xl font-bold">
                Thekedar<span className="text-accent">Hub</span>
              </span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Connecting homeowners with verified local contractors for all construction and renovation needs.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {["How It Works", "Find Thekedars", "Post a Project", "For Contractors"].map((link) => (
                <li key={link}>
                  <Link
                    to="#"
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2.5">
              {["Home Construction", "Renovation", "Interior Design", "Plumbing", "Electrical Work", "Painting"].map(
                (service) => (
                  <li key={service}>
                    <Link
                      to="#"
                      className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                    >
                      {service}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-accent" />
                <span className="text-sm text-primary-foreground/70">
                  123 Business Park, Sector 62, Noida, UP 201301
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent" />
                <span className="text-sm text-primary-foreground/70">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent" />
                <span className="text-sm text-primary-foreground/70">support@thekedarhub.com</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-8 border-primary-foreground/10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/50">
          <p>© 2024 ThekedarHub. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="#" className="hover:text-primary-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="hover:text-primary-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
