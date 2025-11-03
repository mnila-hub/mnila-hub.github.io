import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import succulentsImage from "@/assets/category-succulents.jpg";
import tropicalImage from "@/assets/category-tropical.jpg";

const Gifts = () => {
  const giftProducts = [
    { id: "gift-1", name: "Starter Plant Kit", price: 75, image: succulentsImage, rating: 4.9, reviews: 167 },
    { id: "gift-2", name: "Luxury Plant Gift Set", price: 149, image: tropicalImage, rating: 4.8, reviews: 89 },
    { id: "gift-3", name: "Succulent Trio", price: 59, image: succulentsImage, rating: 4.7, reviews: 134 },
    { id: "gift-4", name: "Plant Lover's Bundle", price: 199, image: tropicalImage, rating: 4.9, reviews: 76 },
    { id: "gift-5", name: "Mini Garden Kit", price: 45, image: succulentsImage, rating: 4.8, reviews: 203 },
    { id: "gift-6", name: "Premium Care Package", price: 89, image: tropicalImage, rating: 4.7, reviews: 112 },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Gift Collections</h1>
          <p className="text-muted-foreground">Perfect gifts for plant lovers</p>
        </div>

        <div className="bg-accent/10 rounded-lg p-8 mb-12 text-center">
          <h2 className="text-2xl font-bold mb-2">Give the Gift of Green</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our curated gift collections make it easy to share the joy of plants with friends and family. 
            Each gift comes beautifully packaged with care instructions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {giftProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Gifts;
