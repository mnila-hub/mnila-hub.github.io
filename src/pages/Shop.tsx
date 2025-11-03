import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";

// Tropical Plants Images
import monsteraImg1 from "@/assets/products/monstera_deliciosa_t_16636e4f.jpg";
import monsteraImg2 from "@/assets/products/monstera_deliciosa_t_9f84d5ed.jpg";
import fiddleImg1 from "@/assets/products/fiddle_leaf_fig_tree_6d6a13a0.jpg";
import fiddleImg2 from "@/assets/products/fiddle_leaf_fig_tree_be771664.jpg";
import birdImg1 from "@/assets/products/bird_of_paradise_tro_b53c85e4.jpg";
import birdImg2 from "@/assets/products/bird_of_paradise_tro_686eb6df.jpg";
import philoImg1 from "@/assets/products/philodendron_tropica_dc09f0a2.jpg";
import philoImg2 from "@/assets/products/philodendron_tropica_5ab069a4.jpg";
import rubberImg1 from "@/assets/products/rubber_plant_ficus_e_6d4587e6.jpg";
import rubberImg2 from "@/assets/products/rubber_plant_ficus_e_1c9b5fb1.jpg";
import calatheaImg1 from "@/assets/products/calathea_prayer_plan_70117d14.jpg";
import calatheaImg2 from "@/assets/products/calathea_prayer_plan_0d833785.jpg";

// Low Light Plants Images
import snakeImg1 from "@/assets/products/snake_plant_sansevie_93562f98.jpg";
import snakeImg2 from "@/assets/products/snake_plant_sansevie_0381f63d.jpg";
import snakeImg3 from "@/assets/products/snake_plant_sansevie_edf02e73.jpg";
import pothosImg1 from "@/assets/products/pothos_devil_ivy_ind_d7345729.jpg";
import pothosImg2 from "@/assets/products/pothos_devil_ivy_ind_b0d2ed18.jpg";
import zzImg1 from "@/assets/products/zz_plant_zamioculcas_8c9177af.jpg";
import zzImg2 from "@/assets/products/zz_plant_zamioculcas_0501295d.jpg";
import peaceImg1 from "@/assets/products/peace_lily_spathiphy_3b5d6e9a.jpg";
import peaceImg2 from "@/assets/products/peace_lily_spathiphy_57cab9bc.jpg";
import castIronImg1 from "@/assets/products/cast_iron_aspidistra_867c11f7.jpg";
import aglaonemaImg1 from "@/assets/products/chinese_evergreen_ag_b76d5e4d.jpg";

// Succulent Plants Images
import succulentImg1 from "@/assets/products/succulent_collection_e474e52d.jpg";
import succulentImg2 from "@/assets/products/succulent_collection_2f0fe8ab.jpg";
import succulentImg3 from "@/assets/products/succulent_collection_d77cca7b.jpg";
import aloeImg1 from "@/assets/products/aloe_vera_succulent__1c357d93.jpg";
import aloeImg2 from "@/assets/products/aloe_vera_succulent__b4492185.jpg";
import jadeImg1 from "@/assets/products/jade_plant_crassula__8d2e6f70.jpg";
import jadeImg2 from "@/assets/products/jade_plant_crassula__c1f70fbb.jpg";
import echeveriaImg1 from "@/assets/products/echeveria_succulent__cbb7059f.jpg";
import echeveriaImg2 from "@/assets/products/echeveria_succulent__5b46874b.jpg";
import haworthiaImg1 from "@/assets/products/haworthia_zebra_succ_587ae859.jpg";
import stringPearlsImg1 from "@/assets/products/string_of_pearls_sen_d4dab13c.jpg";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const products = [
    // TROPICAL PLANTS (10 items)
    { id: "1", name: "Monstera Deliciosa", price: 99, image: monsteraImg1, category: "tropical", rating: 4.8, reviews: 152 },
    { id: "2", name: "Swiss Cheese Plant", price: 89, image: monsteraImg2, category: "tropical", rating: 4.7, reviews: 128 },
    { id: "3", name: "Fiddle Leaf Fig", price: 125, image: fiddleImg1, category: "tropical", rating: 4.6, reviews: 134 },
    { id: "4", name: "Fiddle Leaf Fig Large", price: 179, image: fiddleImg2, category: "tropical", rating: 4.8, reviews: 98 },
    { id: "5", name: "Bird of Paradise", price: 149, image: birdImg1, category: "tropical", rating: 4.7, reviews: 112 },
    { id: "6", name: "Bird of Paradise XL", price: 199, image: birdImg2, category: "tropical", rating: 4.9, reviews: 76 },
    { id: "7", name: "Philodendron Hope", price: 79, image: philoImg1, category: "tropical", rating: 4.8, reviews: 143 },
    { id: "8", name: "Philodendron Imperial", price: 95, image: philoImg2, category: "tropical", rating: 4.7, reviews: 89 },
    { id: "9", name: "Rubber Plant", price: 69, image: rubberImg1, category: "tropical", rating: 4.6, reviews: 167 },
    { id: "10", name: "Calathea Ornata", price: 59, image: calatheaImg1, category: "tropical", rating: 4.5, reviews: 124 },

    // LOW LIGHT PLANTS (10 items)
    { id: "11", name: "Snake Plant", price: 45, image: snakeImg1, category: "lowlight", rating: 4.9, reviews: 203 },
    { id: "12", name: "Snake Plant Tall", price: 65, image: snakeImg2, category: "lowlight", rating: 4.8, reviews: 156 },
    { id: "13", name: "Snake Plant Laurentii", price: 55, image: snakeImg3, category: "lowlight", rating: 4.9, reviews: 189 },
    { id: "14", name: "Pothos Golden", price: 35, image: pothosImg1, category: "lowlight", rating: 4.9, reviews: 256 },
    { id: "15", name: "Pothos Marble", price: 42, image: pothosImg2, category: "lowlight", rating: 4.8, reviews: 198 },
    { id: "16", name: "ZZ Plant", price: 55, image: zzImg1, category: "lowlight", rating: 4.9, reviews: 178 },
    { id: "17", name: "ZZ Plant Raven", price: 75, image: zzImg2, category: "lowlight", rating: 4.8, reviews: 145 },
    { id: "18", name: "Peace Lily", price: 48, image: peaceImg1, category: "lowlight", rating: 4.7, reviews: 167 },
    { id: "19", name: "Peace Lily Sensation", price: 68, image: peaceImg2, category: "lowlight", rating: 4.8, reviews: 132 },
    { id: "20", name: "Cast Iron Plant", price: 52, image: castIronImg1, category: "lowlight", rating: 4.6, reviews: 94 },

    // SUCCULENT PLANTS (10 items)
    { id: "21", name: "Succulent Collection", price: 65, image: succulentImg1, category: "succulents", rating: 4.7, reviews: 89 },
    { id: "22", name: "Mini Succulent Garden", price: 45, image: succulentImg2, category: "succulents", rating: 4.8, reviews: 112 },
    { id: "23", name: "Succulent Variety Pack", price: 85, image: succulentImg3, category: "succulents", rating: 4.9, reviews: 156 },
    { id: "24", name: "Aloe Vera", price: 29, image: aloeImg1, category: "succulents", rating: 4.8, reviews: 187 },
    { id: "25", name: "Aloe Vera Large", price: 49, image: aloeImg2, category: "succulents", rating: 4.7, reviews: 143 },
    { id: "26", name: "Jade Plant", price: 39, image: jadeImg1, category: "succulents", rating: 4.8, reviews: 95 },
    { id: "27", name: "Jade Plant Variegated", price: 55, image: jadeImg2, category: "succulents", rating: 4.9, reviews: 78 },
    { id: "28", name: "Echeveria Rosette", price: 32, image: echeveriaImg1, category: "succulents", rating: 4.7, reviews: 124 },
    { id: "29", name: "Haworthia Zebra", price: 35, image: haworthiaImg1, category: "succulents", rating: 4.8, reviews: 102 },
    { id: "30", name: "String of Pearls", price: 42, image: stringPearlsImg1, category: "succulents", rating: 4.6, reviews: 134 },
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
