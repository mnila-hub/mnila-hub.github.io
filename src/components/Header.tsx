import { Link } from "react-router-dom";
import { ShoppingCart, Search, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-primary hover:opacity-80 transition-opacity">
            bloomscape
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/shop" className="text-foreground hover:text-primary transition-colors">
              Plants
            </Link>
            <Link to="/care-tools" className="text-foreground hover:text-primary transition-colors">
              Care Tools
            </Link>
            <Link to="/gifts" className="text-foreground hover:text-primary transition-colors">
              Gifts
            </Link>
            <Link to="/learn" className="text-foreground hover:text-primary transition-colors">
              Learn
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors">
              About
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Link to="/cart">
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t animate-fade-in">
            <div className="flex flex-col gap-4">
              <Link
                to="/shop"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Plants
              </Link>
              <Link
                to="/care-tools"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Care Tools
              </Link>
              <Link
                to="/gifts"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Gifts
              </Link>
              <Link
                to="/learn"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Learn
              </Link>
              <Link
                to="/about"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
