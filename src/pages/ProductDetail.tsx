import { useParams, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft } from "lucide-react";
import { getProductById } from "@/data/products";
import { useCart } from "@/contexts/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const product = getProductById(id || "");

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-8">
          <div className="text-center py-16">
            <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
            <p className="text-muted-foreground mb-6">The product you're looking for doesn't exist.</p>
            <Link to="/shop">
              <Button>Back to Shop</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({ id: product.id, name: product.name, price: product.price, image: product.image }, quantity);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <Link to="/shop" className="inline-flex items-center text-muted-foreground hover:text-primary mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Shop
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Image */}
          <div className="aspect-square overflow-hidden rounded-lg bg-muted">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            
            <div className="flex items-center mb-4">
              <div className="flex items-center text-lg">
                <span className="mr-1">⭐</span>
                <span className="font-semibold">{product.rating}</span>
                <span className="text-muted-foreground ml-2">({product.reviews} reviews)</span>
              </div>
            </div>

            <div className="text-4xl font-bold text-primary mb-6">${product.price}</div>

            <p className="text-muted-foreground mb-6">{product.description}</p>

            <Card className="mb-6">
              <CardContent className="p-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Care Level</p>
                    <p className="font-semibold">{product.careLevel}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Size</p>
                    <p className="font-semibold">{product.size}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Light</p>
                    <p className="font-semibold">{product.light}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Pet Friendly</p>
                    <p className="font-semibold">{product.petFriendly ? "Yes" : "No"}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center border rounded-md">
                <Button
                  variant="ghost"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4"
                >
                  -
                </Button>
                <span className="px-4 font-semibold">{quantity}</span>
                <Button
                  variant="ghost"
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4"
                >
                  +
                </Button>
              </div>
              <Button size="lg" className="flex-1" onClick={handleAddToCart}>
                Add to Cart
              </Button>
            </div>

            <div className="text-sm text-muted-foreground">
              <p>✓ Free shipping on orders over $125</p>
              <p>✓ 30-day healthy plant guarantee</p>
              <p>✓ Care guide included with every order</p>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <Tabs defaultValue="care" className="mb-12">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="care">Care Instructions</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="shipping">Shipping</TabsTrigger>
          </TabsList>
          
          <TabsContent value="care" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">How to Care for Your {product.name}</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Watering</h4>
                    <p className="text-muted-foreground">{product.careInstructions.watering}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Light</h4>
                    <p className="text-muted-foreground">{product.careInstructions.light}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Humidity</h4>
                    <p className="text-muted-foreground">{product.careInstructions.humidity}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Temperature</h4>
                    <p className="text-muted-foreground">{product.careInstructions.temperature}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Fertilizing</h4>
                    <p className="text-muted-foreground">{product.careInstructions.fertilizing}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="reviews" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Customer Reviews</h3>
                <p className="text-muted-foreground">Reviews coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="shipping" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Shipping Information</h3>
                <p className="text-muted-foreground mb-4">
                  We ship all plants with care to ensure they arrive healthy and beautiful. Standard shipping takes 3-5 business days.
                </p>
                <p className="text-muted-foreground">
                  Free shipping on orders over $125. Each plant is carefully packaged and includes care instructions.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
