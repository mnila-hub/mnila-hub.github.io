import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-plant.jpg";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[400px] overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="About Bloomscape"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white text-center">
              About Bloomscape
            </h1>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16">
          {/* Mission Section */}
          <section className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-6">
              At Bloomscape, we believe that everyone deserves to experience the joy and benefits of 
              living with plants. Our mission is to make plant parenthood accessible, enjoyable, and 
              successful for everyone, regardless of experience level.
            </p>
            <p className="text-lg text-muted-foreground">
              We carefully select and nurture each plant in our greenhouse, ensuring they arrive at 
              your door healthy and ready to thrive in your home. Every plant comes with detailed care 
              instructions and our expert support team is always here to help.
            </p>
          </section>

          {/* Values Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🌱</div>
                <h3 className="text-xl font-semibold mb-2">Quality First</h3>
                <p className="text-muted-foreground">
                  We hand-select every plant and ensure they meet our high standards before shipping.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">💚</div>
                <h3 className="text-xl font-semibold mb-2">Customer Care</h3>
                <p className="text-muted-foreground">
                  Our team of plant experts is here to support you every step of your plant journey.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
                <p className="text-muted-foreground">
                  We're committed to eco-friendly practices in everything we do, from packaging to shipping.
                </p>
              </div>
            </div>
          </section>

          {/* Story Section */}
          <section className="max-w-3xl mx-auto bg-secondary/30 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-muted-foreground mb-4">
              Bloomscape was founded with a simple idea: to make it easy for anyone to enjoy the 
              beauty and benefits of houseplants. We started in a small greenhouse, hand-picking and 
              caring for each plant with love and attention.
            </p>
            <p className="text-muted-foreground mb-4">
              Today, we've grown into a trusted source for plant lovers across the country, but our 
              commitment to quality and customer care remains the same. Every plant that leaves our 
              greenhouse is treated with the same care and attention as those first plants we shipped.
            </p>
            <p className="text-muted-foreground">
              We're proud to have helped thousands of people discover the joy of plant parenthood, 
              and we look forward to helping you find your perfect plant companion.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
