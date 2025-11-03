import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  rating?: number;
  reviews?: number;
}

const ProductCard = ({ id, name, price, image, rating = 4.5, reviews = 20 }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart({ id, name, price, image });
  };

  return (
    <Card className="group overflow-hidden border-border hover:shadow-lg transition-all duration-300">
      <Link to={`/product/${id}`}>
        <div className="aspect-square overflow-hidden bg-muted">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>
      <CardContent className="p-4">
        <Link to={`/product/${id}`}>
          <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
            {name}
          </h3>
        </Link>
        <div className="flex items-center justify-between mb-3">
          <span className="text-2xl font-bold text-primary">${price}</span>
          <div className="flex items-center text-sm text-muted-foreground">
            <span className="mr-1">⭐</span>
            <span>{rating}</span>
            <span className="ml-1">({reviews})</span>
          </div>
        </div>
        <Button className="w-full" variant="default" onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
