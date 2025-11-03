import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Trash2 } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const Cart = () => {
  const { items: cartItems, updateQuantity, removeFromCart } = useCart();

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 125 ? 0 : 15;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-xl text-muted-foreground mb-6">Your cart is empty</p>
            <Link to="/shop">
              <Button size="lg">Continue Shopping</Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <Card key={item.id}>
                  <CardContent className="p-4">
                    <div className="flex gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded-md"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
                        <p className="text-muted-foreground mb-2">${item.price}</p>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center border rounded-md">
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="px-3"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              -
                            </Button>
                            <span className="px-3">{item.quantity}</span>
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="px-3"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              +
                            </Button>
                          </div>
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => removeFromCart(item.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-lg">${item.price * item.quantity}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Order Summary */}
            <div>
              <Card className="sticky top-24">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="font-semibold">${subtotal}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Shipping</span>
                      <span className="font-semibold">
                        {shipping === 0 ? "FREE" : `$${shipping}`}
                      </span>
                    </div>
                    {subtotal < 125 && (
                      <p className="text-sm text-muted-foreground">
                        Add ${125 - subtotal} more for free shipping!
                      </p>
                    )}
                    <div className="border-t pt-4">
                      <div className="flex justify-between text-lg">
                        <span className="font-semibold">Total</span>
                        <span className="font-bold text-primary">${total}</span>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full mb-4" size="lg">
                    Proceed to Checkout
                  </Button>
                  
                  <Link to="/shop">
                    <Button variant="outline" className="w-full">
                      Continue Shopping
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Cart;
