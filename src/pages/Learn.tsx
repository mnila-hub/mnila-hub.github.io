import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Learn = () => {
  const guides = [
    {
      title: "Watering 101",
      description: "Learn the fundamentals of proper watering techniques for different plant types.",
      content: "Most houseplants prefer to dry out slightly between waterings. Check the soil moisture by inserting your finger about 2 inches deep."
    },
    {
      title: "Light Requirements",
      description: "Understanding your plant's light needs for optimal growth.",
      content: "Different plants have varying light requirements. Bright indirect light is ideal for most tropical plants, while succulents prefer direct sunlight."
    },
    {
      title: "Humidity & Temperature",
      description: "Creating the perfect environment for your plants.",
      content: "Tropical plants typically prefer humidity levels of 40-60%. You can increase humidity with a mister or humidity tray."
    },
    {
      title: "Fertilizing Guide",
      description: "When and how to feed your plants for healthy growth.",
      content: "Feed your plants during their growing season (spring and summer) with a balanced fertilizer diluted to half strength every 2-4 weeks."
    },
  ];

  const faqs = [
    {
      question: "How often should I water my plants?",
      answer: "It depends on the plant type, but most houseplants need watering when the top inch of soil feels dry. Succulents need less frequent watering than tropical plants."
    },
    {
      question: "What if my plant's leaves are turning yellow?",
      answer: "Yellow leaves can indicate overwatering, underwatering, or nutrient deficiency. Check soil moisture and adjust your watering schedule accordingly."
    },
    {
      question: "Do I need to repot my plant?",
      answer: "Most plants need repotting every 1-2 years when they become root-bound or the soil depletes. Spring is the best time to repot."
    },
    {
      question: "How do I deal with pests?",
      answer: "Common pests include spider mites, mealybugs, and aphids. Isolate affected plants and treat with insecticidal soap or neem oil."
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Plant Care Guides</h1>
          <p className="text-muted-foreground">Everything you need to know to keep your plants happy and healthy</p>
        </div>

        {/* Care Guides */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Essential Care Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {guides.map((guide, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{guide.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{guide.description}</p>
                  <p className="text-sm">{guide.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Tips Section */}
        <section id="tips" className="bg-accent/10 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6">Quick Care Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-lg mb-2">💧 Water Wisely</h3>
              <p className="text-sm text-muted-foreground">
                Check soil moisture before watering. When in doubt, it's better to underwater than overwater.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">☀️ Find the Light</h3>
              <p className="text-sm text-muted-foreground">
                Observe how light moves through your space throughout the day to find the perfect spot.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">🌿 Be Patient</h3>
              <p className="text-sm text-muted-foreground">
                Plants take time to adjust to new environments. Give them a few weeks to settle in.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Learn;
