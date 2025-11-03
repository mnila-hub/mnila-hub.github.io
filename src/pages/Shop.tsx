import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import succulentsImage from "@/assets/category-succulents.jpg";
import tropicalImage from "@/assets/category-tropical.jpg";
import lowlightImage from "@/assets/category-lowlight.jpg";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const products = [
    { id: "1", name: "Monstera Deliciosa", price: 99, image: tropicalImage, category: "tropical", rating: 4.8, reviews: 152 },
    { id: "2", name: "Snake Plant", price: 45, image: lowlightImage, category: "lowlight", rating: 4.9, reviews: 203 },
    { id: "3", name: "Succulent Collection", price: 65, image: succulentsImage, category: "succulents", rating: 4.7, reviews: 89 },
    { id: "4", name: "Fiddle Leaf Fig", price: 125, image: tropicalImage, category: "tropical", rating: 4.6, reviews: 134 },
    { id: "5", name: "ZZ Plant", price: 55, image: lowlightImage, category: "lowlight", rating: 4.9, reviews: 178 },
    { id: "6", name: "Jade Plant", price: 39, image: succulentsImage, category: "succulents", rating: 4.8, reviews: 95 },
    { id: "7", name: "Bird of Paradise", price: 149, image: tropicalImage, category: "tropical", rating: 4.7, reviews: 112 },
    { id: "8", name: "Pothos", price: 35, image: lowlightImage, category: "lowlight", rating: 4.9, reviews: 256 },
    { id: "9", name: "Aloe Vera", price: 29, image: succulentsImage, category: "succulents", rating: 4.8, reviews: 187 },
  ];

  const categories = [
    { id: "all", label: "All Plants" },
    { id: "tropical", label: "Tropical" },
    { id: "succulents", label: "Succulents" },
    { id: "lowlight", label: "Low Light" },
  ];

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Shop Plants</h1>
          <p className="text-muted-foreground">Find your perfect plant companion</p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-4 mb-8">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Shop;
