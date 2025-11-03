import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">bloomscape</h3>
            <p className="text-sm text-muted-foreground">
              Bringing the beauty of nature into your home, one plant at a time.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/shop" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  All Plants
                </Link>
              </li>
              <li>
                <Link to="/shop?category=bestsellers" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Best Sellers
                </Link>
              </li>
              <li>
                <Link to="/shop?category=new" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link to="/gifts" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Gift Sets
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Learn</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/learn" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Plant Care Guides
                </Link>
              </li>
              <li>
                <Link to="/learn#tips" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Care Tips
                </Link>
              </li>
              <li>
                <Link to="/learn#faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Bloomscape. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
