import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import CategoryCard from "@/components/CategoryCard";
import heroImage from "@/assets/hero-plant.jpg";
import succulentsImage from "@/assets/category-succulents.jpg";
import tropicalImage from "@/assets/category-tropical.jpg";
import lowlightImage from "@/assets/category-lowlight.jpg";

const Index = () => {
  const featuredProducts = [
    { id: "1", name: "Monstera Deliciosa", price: 99, image: tropicalImage, rating: 4.8, reviews: 152 },
    { id: "2", name: "Snake Plant", price: 45, image: lowlightImage, rating: 4.9, reviews: 203 },
    { id: "3", name: "Succulent Collection", price: 65, image: succulentsImage, rating: 4.7, reviews: 89 },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[600px] overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Beautiful indoor plants"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
          </div>
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl text-white animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                Bring Nature Home
              </h1>
              <p className="text-xl mb-8 text-white/90">
                Discover our collection of beautiful, healthy plants delivered right to your door
              </p>
              <Link to="/shop">
                <Button size="lg" className="text-lg px-8">
                  Shop Plants
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-slide-up">
            <CategoryCard
              title="Tropical Plants"
              image={tropicalImage}
              link="/shop?category=tropical"
              description="Bold, lush foliage"
            />
            <CategoryCard
              title="Succulents"
              image={succulentsImage}
              link="/shop?category=succulents"
              description="Low maintenance beauty"
            />
            <CategoryCard
              title="Low Light Plants"
              image={lowlightImage}
              link="/shop?category=lowlight"
              description="Perfect for any room"
            />
          </div>
        </section>

        {/* Featured Products */}
        <section className="container mx-auto px-4 py-16 bg-secondary/30">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Best Sellers</h2>
            <Link to="/shop">
              <Button variant="outline">View All</Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-slide-up">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-slide-up">
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
              <p className="text-muted-foreground">On orders over $125</p>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-semibold mb-2">30-Day Guarantee</h3>
              <p className="text-muted-foreground">Healthy plants or your money back</p>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="text-4xl mb-4">💚</div>
              <h3 className="text-xl font-semibold mb-2">Expert Care Tips</h3>
              <p className="text-muted-foreground">Guidance for every plant</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
