import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import succulentsImage from "@/assets/category-succulents.jpg";

const CareTools = () => {
  const careProducts = [
    { id: "tool-1", name: "Plant Mister", price: 18, image: succulentsImage, rating: 4.7, reviews: 89 },
    { id: "tool-2", name: "Pruning Shears", price: 24, image: succulentsImage, rating: 4.8, reviews: 134 },
    { id: "tool-3", name: "Watering Can", price: 32, image: succulentsImage, rating: 4.6, reviews: 76 },
    { id: "tool-4", name: "Potting Mix", price: 15, image: succulentsImage, rating: 4.9, reviews: 203 },
    { id: "tool-5", name: "Plant Food", price: 22, image: succulentsImage, rating: 4.8, reviews: 156 },
    { id: "tool-6", name: "Humidity Meter", price: 28, image: succulentsImage, rating: 4.7, reviews: 98 },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Care Tools</h1>
          <p className="text-muted-foreground">Everything you need to keep your plants thriving</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {careProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CareTools;
