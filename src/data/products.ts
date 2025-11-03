// Import images
import monsteraImg1 from "@/assets/products/monstera_deliciosa_t_16636e4f.jpg";
import monsteraImg2 from "@/assets/products/monstera_deliciosa_t_9f84d5ed.jpg";
import fiddleImg1 from "@/assets/products/fiddle_leaf_fig_tree_6d6a13a0.jpg";
import fiddleImg2 from "@/assets/products/fiddle_leaf_fig_tree_be771664.jpg";
import birdImg1 from "@/assets/products/bird_of_paradise_tro_b53c85e4.jpg";
import birdImg2 from "@/assets/products/bird_of_paradise_tro_686eb6df.jpg";
import philoImg1 from "@/assets/products/philodendron_tropica_dc09f0a2.jpg";
import philoImg2 from "@/assets/products/philodendron_tropica_5ab069a4.jpg";
import rubberImg1 from "@/assets/products/rubber_plant_ficus_e_6d4587e6.jpg";
import calatheaImg1 from "@/assets/products/calathea_prayer_plan_70117d14.jpg";
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
import succulentImg1 from "@/assets/products/succulent_collection_e474e52d.jpg";
import succulentImg2 from "@/assets/products/succulent_collection_2f0fe8ab.jpg";
import succulentImg3 from "@/assets/products/succulent_collection_d77cca7b.jpg";
import aloeImg1 from "@/assets/products/aloe_vera_succulent__1c357d93.jpg";
import aloeImg2 from "@/assets/products/aloe_vera_succulent__b4492185.jpg";
import jadeImg1 from "@/assets/products/jade_plant_crassula__8d2e6f70.jpg";
import jadeImg2 from "@/assets/products/jade_plant_crassula__c1f70fbb.jpg";
import echeveriaImg1 from "@/assets/products/echeveria_succulent__cbb7059f.jpg";
import haworthiaImg1 from "@/assets/products/haworthia_zebra_succ_587ae859.jpg";
import stringPearlsImg1 from "@/assets/products/string_of_pearls_sen_d4dab13c.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: "tropical" | "lowlight" | "succulents";
  rating: number;
  reviews: number;
  description: string;
  careLevel: string;
  light: string;
  water: string;
  petFriendly: boolean;
  size: string;
  careInstructions: {
    watering: string;
    light: string;
    humidity: string;
    temperature: string;
    fertilizing: string;
  };
}

export const products: Product[] = [
  // TROPICAL PLANTS
  {
    id: "1",
    name: "Monstera Deliciosa",
    price: 99,
    image: monsteraImg1,
    category: "tropical",
    rating: 4.8,
    reviews: 152,
    description: "The Monstera Deliciosa, also known as the Swiss Cheese Plant, is a stunning tropical plant with large, glossy leaves featuring distinctive splits and holes. Native to Central American rainforests, this plant makes a bold statement in any room with its unique fenestrated foliage. Perfect for adding a tropical vibe to your home.",
    careLevel: "Easy",
    light: "Bright indirect light",
    water: "Water when top 2 inches of soil are dry",
    petFriendly: false,
    size: "Large (3-4 feet tall)",
    careInstructions: {
      watering: "Water when the top 2 inches of soil are dry, typically once a week. Reduce watering in winter months.",
      light: "Thrives in bright, indirect light. Can tolerate some shade but growth may slow. Avoid direct sunlight.",
      humidity: "Prefers high humidity (60-80%). Mist regularly or use a humidifier for best results.",
      temperature: "Ideal temperature range is 65-85°F (18-29°C). Protect from cold drafts.",
      fertilizing: "Feed monthly during spring and summer with balanced liquid fertilizer diluted to half strength."
    }
  },
  {
    id: "2",
    name: "Swiss Cheese Plant",
    price: 89,
    image: monsteraImg2,
    category: "tropical",
    rating: 4.7,
    reviews: 128,
    description: "A beautiful Monstera variety with characteristic split leaves that develop as the plant matures. This tropical beauty is perfect for brightening up any corner with its lush, vibrant green foliage. Easy to care for and fast-growing, making it ideal for both beginners and experienced plant parents.",
    careLevel: "Easy",
    light: "Bright indirect light",
    water: "Weekly watering",
    petFriendly: false,
    size: "Medium (2-3 feet tall)",
    careInstructions: {
      watering: "Water thoroughly when top soil feels dry. Ensure good drainage to prevent root rot.",
      light: "Place near a window with filtered light. Morning sun is okay, but avoid harsh afternoon rays.",
      humidity: "Enjoys moderate to high humidity. Group with other plants to create a humid microclimate.",
      temperature: "Comfortable in normal room temperatures, ideally 65-80°F (18-27°C).",
      fertilizing: "Apply diluted balanced fertilizer every 2-3 weeks during growing season."
    }
  },
  {
    id: "3",
    name: "Fiddle Leaf Fig",
    price: 125,
    image: fiddleImg1,
    category: "tropical",
    rating: 4.6,
    reviews: 134,
    description: "The Fiddle Leaf Fig is an iconic statement plant with large, violin-shaped leaves that command attention. Native to western Africa, this tree has become a favorite among interior designers for its architectural presence. With proper care, it can grow into a stunning floor plant that transforms any space.",
    careLevel: "Moderate",
    light: "Bright indirect light",
    water: "Water when top inch is dry",
    petFriendly: false,
    size: "Large (4-6 feet tall)",
    careInstructions: {
      watering: "Water when top 1-2 inches of soil are dry. Overwatering is the most common mistake with this plant.",
      light: "Requires bright, indirect light for 6+ hours daily. Can tolerate some direct morning sun.",
      humidity: "Moderate humidity (40-60%). Wipe leaves regularly to remove dust and maintain photosynthesis.",
      temperature: "Prefers consistent temperatures between 65-75°F (18-24°C). Avoid drafts and sudden changes.",
      fertilizing: "Feed monthly during spring and summer with balanced fertilizer. Skip feeding in winter."
    }
  },
  {
    id: "4",
    name: "Fiddle Leaf Fig Large",
    price: 179,
    image: fiddleImg2,
    category: "tropical",
    rating: 4.8,
    reviews: 98,
    description: "A premium, larger specimen of the beloved Fiddle Leaf Fig with well-established growth and fuller foliage. This mature plant arrives ready to make an immediate impact in your space. Perfect for filling large corners or creating a focal point in living rooms, offices, or entryways.",
    careLevel: "Moderate",
    light: "Bright indirect light",
    water: "Weekly deep watering",
    petFriendly: false,
    size: "Extra Large (5-7 feet tall)",
    careInstructions: {
      watering: "Deep water weekly, allowing water to drain completely. Empty drainage tray after 30 minutes.",
      light: "Position near bright windows but protect from harsh midday sun. Rotate monthly for even growth.",
      humidity: "Benefits from increased humidity. Consider using a pebble tray or room humidifier.",
      temperature: "Maintain steady temperature above 60°F (15°C). Protect from heating vents and AC.",
      fertilizing: "Use slow-release fertilizer in spring, or liquid fertilizer monthly during growing season."
    }
  },
  {
    id: "5",
    name: "Bird of Paradise",
    price: 149,
    image: birdImg1,
    category: "tropical",
    rating: 4.7,
    reviews: 112,
    description: "The Bird of Paradise is a spectacular tropical plant with large, banana-like leaves that create a dramatic tropical atmosphere. While it rarely flowers indoors, its stunning foliage alone makes it a showstopper. Native to South Africa, this plant brings an exotic, vacation-like feel to any interior.",
    careLevel: "Moderate",
    light: "Bright direct light",
    water: "Keep soil moist but not soggy",
    petFriendly: false,
    size: "Large (4-5 feet tall)",
    careInstructions: {
      watering: "Keep soil consistently moist during growing season. Water less in winter but don't let it dry completely.",
      light: "Loves bright, direct sunlight. South-facing windows are ideal. More light = better growth and potential blooms.",
      humidity: "Appreciates high humidity. Mist daily or use a humidifier, especially in dry climates.",
      temperature: "Thrives in warm conditions, 65-80°F (18-27°C). Can tolerate brief periods down to 50°F.",
      fertilizing: "Feed every 2 weeks during spring and summer with balanced fertilizer. Reduce in fall and winter."
    }
  },
  {
    id: "6",
    name: "Bird of Paradise XL",
    price: 199,
    image: birdImg2,
    category: "tropical",
    rating: 4.9,
    reviews: 76,
    description: "An extra-large, mature Bird of Paradise that makes an immediate statement. This premium specimen features multiple stems with abundant, healthy foliage. Perfect for creating a tropical oasis in spacious rooms, atriums, or as a stunning focal point in commercial spaces.",
    careLevel: "Moderate",
    light: "Full sun to partial shade",
    water: "Regular watering",
    petFriendly: false,
    size: "Extra Large (6-8 feet tall)",
    careInstructions: {
      watering: "Water thoroughly 2-3 times per week in summer. Reduce to once weekly in winter.",
      light: "Requires minimum 4-6 hours of bright light daily. Can handle some direct sun.",
      humidity: "Thrives in humid environments. Mist leaves frequently and maintain 60%+ humidity if possible.",
      temperature: "Prefers warm temperatures 70-85°F (21-29°C). Protect from temperatures below 50°F.",
      fertilizing: "Heavy feeder during growing season. Apply balanced fertilizer every 2 weeks from spring to fall."
    }
  },
  {
    id: "7",
    name: "Philodendron Hope",
    price: 79,
    image: philoImg1,
    category: "tropical",
    rating: 4.8,
    reviews: 143,
    description: "Philodendron Hope features large, deeply lobed leaves that create a lush, tropical look. This self-heading variety doesn't vine, making it perfect for creating a full, bushy display. Known for its air-purifying qualities and easy-care nature, it's an excellent choice for beginners and experts alike.",
    careLevel: "Easy",
    light: "Medium to bright indirect light",
    water: "Water when top 2 inches dry",
    petFriendly: false,
    size: "Medium (2-3 feet wide)",
    careInstructions: {
      watering: "Water when top 2 inches of soil are dry. More forgiving of underwatering than overwatering.",
      light: "Adaptable to various light conditions from medium to bright indirect. Avoid direct sun.",
      humidity: "Tolerates average household humidity but prefers 50-60%. Occasional misting is beneficial.",
      temperature: "Happy in normal room temperatures 65-78°F (18-26°C). Avoid cold drafts.",
      fertilizing: "Feed monthly with half-strength balanced fertilizer during spring and summer."
    }
  },
  {
    id: "8",
    name: "Philodendron Imperial",
    price: 95,
    image: philoImg2,
    category: "tropical",
    rating: 4.7,
    reviews: 89,
    description: "The Philodendron Imperial Green is a stunning hybrid with large, glossy leaves that emerge bright green and deepen with age. Its compact growth habit makes it ideal for tabletops or floor display. This variety is prized for its vibrant color and low-maintenance care requirements.",
    careLevel: "Easy",
    light: "Medium indirect light",
    water: "Moderate watering",
    petFriendly: false,
    size: "Medium (2-3 feet tall)",
    careInstructions: {
      watering: "Allow top inch of soil to dry between waterings. Water less frequently in winter months.",
      light: "Thrives in medium indirect light. Can tolerate lower light but growth will slow.",
      humidity: "Prefers moderate humidity 50%+. Wipe leaves monthly to keep them shiny and dust-free.",
      temperature: "Ideal range 65-80°F (18-27°C). Keep away from cold windows in winter.",
      fertilizing: "Apply balanced liquid fertilizer once a month during active growing season."
    }
  },
  {
    id: "9",
    name: "Rubber Plant",
    price: 69,
    image: rubberImg1,
    category: "tropical",
    rating: 4.6,
    reviews: 167,
    description: "The Rubber Plant (Ficus elastica) is a classic houseplant with large, thick, glossy leaves in deep green. Native to Southeast Asia, it was once grown for rubber production. Today, it's beloved for its architectural form and air-purifying properties. A fast grower that can become a stunning floor plant.",
    careLevel: "Easy",
    light: "Bright indirect light",
    water: "Weekly watering",
    petFriendly: false,
    size: "Large (3-4 feet tall)",
    careInstructions: {
      watering: "Water when top inch of soil is dry. Reduce watering in winter. Yellow leaves indicate overwatering.",
      light: "Prefers bright, indirect light but can adapt to medium light. Variegated types need more light.",
      humidity: "Tolerates average humidity. Wipe leaves with damp cloth to remove dust and increase shine.",
      temperature: "Comfortable in 60-75°F (15-24°C). Protect from cold drafts and sudden temperature changes.",
      fertilizing: "Feed monthly during spring and summer with diluted balanced fertilizer."
    }
  },
  {
    id: "10",
    name: "Calathea Ornata",
    price: 59,
    image: calatheaImg1,
    category: "tropical",
    rating: 4.5,
    reviews: 124,
    description: "Calathea Ornata, also known as Pinstripe Plant, features stunning dark green leaves with delicate pink stripes. This prayer plant folds its leaves up at night, creating a lovely rustling sound. While slightly more demanding, the visual payoff is incredible with its decorative foliage.",
    careLevel: "Moderate to Challenging",
    light: "Low to medium indirect light",
    water: "Keep soil consistently moist",
    petFriendly: true,
    size: "Small to Medium (1-2 feet tall)",
    careInstructions: {
      watering: "Keep soil consistently moist but not waterlogged. Use filtered or rainwater to avoid leaf spotting.",
      light: "Prefers low to medium indirect light. Direct sun will scorch leaves. North or east-facing windows ideal.",
      humidity: "Requires high humidity 60%+. Use humidifier, pebble tray, or group with other plants.",
      temperature: "Needs consistent warmth 65-80°F (18-27°C). Avoid temperature fluctuations.",
      fertilizing: "Feed every 2 weeks with diluted, balanced fertilizer during growing season. Skip winter feeding."
    }
  },

  // LOW LIGHT PLANTS
  {
    id: "11",
    name: "Snake Plant",
    price: 45,
    image: snakeImg1,
    category: "lowlight",
    rating: 4.9,
    reviews: 203,
    description: "The Snake Plant (Sansevieria) is one of the most resilient houseplants available. With striking upright leaves featuring yellow edges, it's nearly indestructible and perfect for beginners. NASA studies show it's excellent at purifying air, removing toxins while producing oxygen at night.",
    careLevel: "Very Easy",
    light: "Low to bright indirect light",
    water: "Every 2-3 weeks",
    petFriendly: false,
    size: "Medium (1-3 feet tall)",
    careInstructions: {
      watering: "Water every 2-3 weeks, allowing soil to dry completely between waterings. Overwatering is the only way to kill this plant.",
      light: "Extremely adaptable from low to bright indirect light. Tolerates some direct sun.",
      humidity: "Thrives in normal household humidity. No special humidity requirements.",
      temperature: "Happy in wide temperature range 55-85°F (13-29°C). Very forgiving.",
      fertilizing: "Feed sparingly, once or twice during growing season with half-strength fertilizer."
    }
  },
  {
    id: "12",
    name: "Snake Plant Tall",
    price: 65,
    image: snakeImg2,
    category: "lowlight",
    rating: 4.8,
    reviews: 156,
    description: "A taller specimen of the beloved Snake Plant with impressive height and fullness. This architectural plant makes a bold statement in corners or as a floor plant. Its vertical growth habit is perfect for modern, minimalist spaces while providing excellent air purification.",
    careLevel: "Very Easy",
    light: "Low to bright light",
    water: "Infrequent watering",
    petFriendly: false,
    size: "Large (3-4 feet tall)",
    careInstructions: {
      watering: "Water deeply but infrequently, every 2-4 weeks depending on conditions. Less is more with this plant.",
      light: "Versatile lighting needs. Can survive in dimly lit corners or bright spaces.",
      humidity: "No humidity requirements. Perfect for dry environments.",
      temperature: "Tolerates wide range 50-85°F (10-29°C). One of the most adaptable plants.",
      fertilizing: "Minimal feeding needed. Optional light feeding 2-3 times per year."
    }
  },
  {
    id: "13",
    name: "Snake Plant Laurentii",
    price: 55,
    image: snakeImg3,
    category: "lowlight",
    rating: 4.9,
    reviews: 189,
    description: "The classic Snake Plant Laurentii features sword-like leaves with distinctive yellow margins. This cultivar is especially prized for its striking variegation. Known for its air-purifying abilities and extreme drought tolerance, it's the perfect plant for busy people or frequent travelers.",
    careLevel: "Very Easy",
    light: "Low to bright indirect",
    water: "Monthly watering",
    petFriendly: false,
    size: "Medium (2-3 feet tall)",
    careInstructions: {
      watering: "Water monthly or when soil is completely dry. Can tolerate neglect better than over-attention.",
      light: "Maintains variegation best in bright indirect light but adapts to low light.",
      humidity: "Zero special requirements. Thrives in any humidity level.",
      temperature: "Comfortable in 60-80°F (15-27°C). Survives brief cold snaps.",
      fertilizing: "Feed 2-3 times per year maximum. Too much fertilizer can harm the plant."
    }
  },
  {
    id: "14",
    name: "Pothos Golden",
    price: 35,
    image: pothosImg1,
    category: "lowlight",
    rating: 4.9,
    reviews: 256,
    description: "Golden Pothos is one of the easiest and most popular houseplants with heart-shaped leaves marbled in golden yellow. This trailing vine purifies air and thrives on neglect, making it perfect for beginners. It can be trained to climb or left to cascade beautifully from shelves and hanging baskets.",
    careLevel: "Very Easy",
    light: "Low to medium indirect",
    water: "Weekly watering",
    petFriendly: false,
    size: "Trailing (vines 6-10 feet)",
    careInstructions: {
      watering: "Water when top 2 inches of soil are dry, typically weekly. Tolerates occasional drought.",
      light: "Adaptable from low to bright indirect light. More light = more variegation.",
      humidity: "Tolerates dry air but appreciates occasional misting for dust removal.",
      temperature: "Happy in normal room temps 60-80°F (15-27°C). Avoid cold drafts.",
      fertilizing: "Feed monthly during growing season with balanced, diluted fertilizer."
    }
  },
  {
    id: "15",
    name: "Pothos Marble",
    price: 42,
    image: pothosImg2,
    category: "lowlight",
    rating: 4.8,
    reviews: 198,
    description: "Marble Queen Pothos features stunning white and green variegated leaves that create a marbled effect. This elegant variety adds brightness to any space while maintaining the easy-care nature of all Pothos. Perfect for hanging baskets, shelves, or training up a moss pole.",
    careLevel: "Easy",
    light: "Medium to bright indirect",
    water: "When soil dries",
    petFriendly: false,
    size: "Trailing (vines 6-8 feet)",
    careInstructions: {
      watering: "Allow top 2 inches to dry before watering. Droopy leaves indicate it needs water.",
      light: "Needs brighter light than golden variety to maintain white variegation. No direct sun.",
      humidity: "Average humidity is fine. Occasional misting keeps leaves looking their best.",
      temperature: "Prefers 65-75°F (18-24°C). Keep away from cold windows.",
      fertilizing: "Feed every 2-3 weeks during spring and summer with half-strength fertilizer."
    }
  },
  {
    id: "16",
    name: "ZZ Plant",
    price: 55,
    image: zzImg1,
    category: "lowlight",
    rating: 4.9,
    reviews: 178,
    description: "The ZZ Plant (Zamioculcas zamiifolia) is virtually indestructible with glossy, waxy leaves that shine like they've been polished. It can survive in very low light and tolerates extreme neglect. Perfect for offices, bathrooms, or any low-light area. Drought-tolerant rhizomes store water for weeks.",
    careLevel: "Very Easy",
    light: "Low to bright indirect",
    water: "Every 2-3 weeks",
    petFriendly: false,
    size: "Medium (2-3 feet tall)",
    careInstructions: {
      watering: "Water every 2-3 weeks, allowing soil to dry completely. Prefers to be under-watered than over-watered.",
      light: "Thrives in low light but grows faster in bright, indirect light. Very adaptable.",
      humidity: "No humidity requirements. Perfect for dry environments.",
      temperature: "Comfortable in 60-75°F (15-24°C). Tolerates temperature fluctuations well.",
      fertilizing: "Feed 2-3 times per year. Too much fertilizer can cause leaf discoloration."
    }
  },
  {
    id: "17",
    name: "ZZ Plant Raven",
    price: 75,
    image: zzImg2,
    category: "lowlight",
    rating: 4.8,
    reviews: 145,
    description: "The ZZ Raven is a dramatic cultivar with deep purple-black foliage that emerges lime green and darkens with age. This rare beauty has the same easy-care nature as regular ZZ Plants but with striking gothic appeal. Perfect for modern, sophisticated interiors.",
    careLevel: "Very Easy",
    light: "Medium to bright indirect",
    water: "Infrequent watering",
    petFriendly: false,
    size: "Medium (2-3 feet tall)",
    careInstructions: {
      watering: "Water every 2-4 weeks when soil is completely dry. Very drought-tolerant.",
      light: "Needs brighter light than regular ZZ to maintain dark coloring. Still low-light tolerant.",
      humidity: "Thrives in any humidity level. No special care needed.",
      temperature: "Happy in 65-75°F (18-24°C). Keep above 50°F (10°C).",
      fertilizing: "Minimal fertilizing needed. Feed 2-3 times during growing season only."
    }
  },
  {
    id: "18",
    name: "Peace Lily",
    price: 48,
    image: peaceImg1,
    category: "lowlight",
    rating: 4.7,
    reviews: 167,
    description: "The Peace Lily (Spathiphyllum) is beloved for its elegant white flowers and glossy green leaves. It's one of the few plants that blooms reliably indoors in low light. NASA's Clean Air Study found it excellent at removing toxins. The plant droops dramatically when thirsty, making watering needs obvious.",
    careLevel: "Easy",
    light: "Low to medium indirect",
    water: "Weekly watering",
    petFriendly: false,
    size: "Medium (1-3 feet tall)",
    careInstructions: {
      watering: "Water weekly or when leaves begin to droop. Prefers consistently moist (not soggy) soil.",
      light: "Tolerates low light well and still produces flowers. Brighter light = more blooms.",
      humidity: "Loves humidity. Mist regularly or use pebble tray for best flowering and leaf health.",
      temperature: "Prefers warm conditions 65-80°F (18-27°C). Sensitive to cold.",
      fertilizing: "Feed every 6 weeks during growing season with balanced fertilizer for best blooming."
    }
  },
  {
    id: "19",
    name: "Peace Lily Sensation",
    price: 68,
    image: peaceImg2,
    category: "lowlight",
    rating: 4.8,
    reviews: 132,
    description: "Peace Lily Sensation is the largest variety with impressive leaves that can reach 12-20 inches long. This dramatic cultivar makes a bold statement while maintaining the air-purifying qualities and easy care of standard Peace Lilies. Perfect for filling large, low-light spaces.",
    careLevel: "Easy",
    light: "Low to medium light",
    water: "Keep evenly moist",
    petFriendly: false,
    size: "Large (3-4 feet tall)",
    careInstructions: {
      watering: "Water when top inch of soil is dry. Drooping leaves bounce back quickly after watering.",
      light: "Adapts well to low light. More light encourages larger leaves and more flowers.",
      humidity: "High humidity preferred. Brown leaf tips indicate low humidity.",
      temperature: "Thrives in 68-85°F (20-29°C). Keep away from cold drafts and AC vents.",
      fertilizing: "Feed monthly with balanced liquid fertilizer diluted to half strength."
    }
  },
  {
    id: "20",
    name: "Cast Iron Plant",
    price: 52,
    image: castIronImg1,
    category: "lowlight",
    rating: 4.6,
    reviews: 94,
    description: "Named for its ability to withstand neglect, the Cast Iron Plant (Aspidistra elatior) is virtually indestructible. It thrives in low light, tolerates irregular watering, and ignores temperature swings. With its elegant, arching dark green leaves, it's perfect for difficult spots where other plants fail.",
    careLevel: "Very Easy",
    light: "Low to medium indirect",
    water: "Every 2 weeks",
    petFriendly: true,
    size: "Medium (2-3 feet tall)",
    careInstructions: {
      watering: "Water every 2 weeks, allowing soil to dry between waterings. Very drought tolerant.",
      light: "Thrives in low light where most plants struggle. Avoid direct sun which can scorch leaves.",
      humidity: "Tolerates any humidity level. Extremely adaptable.",
      temperature: "Survives wide range 45-85°F (7-29°C). One of the most temperature-tolerant plants.",
      fertilizing: "Feed sparingly, 2-3 times per year. Slow-growing and doesn't need much nutrition."
    }
  },

  // SUCCULENT PLANTS
  {
    id: "21",
    name: "Succulent Collection",
    price: 65,
    image: succulentImg1,
    category: "succulents",
    rating: 4.7,
    reviews: 89,
    description: "A beautiful arrangement of various succulent varieties in complementary colors and textures. This collection includes a mix of Echeveria, Sedum, and other popular succulents. Perfect for desks, windowsills, or as gifts. Low-maintenance and drought-tolerant.",
    careLevel: "Easy",
    light: "Bright indirect to direct",
    water: "Every 2-3 weeks",
    petFriendly: true,
    size: "Small (4-6 inches)",
    careInstructions: {
      watering: "Water deeply but infrequently, every 2-3 weeks. Let soil dry completely between waterings.",
      light: "Needs bright light, preferably near a sunny window. Some direct sun is beneficial.",
      humidity: "Prefers low humidity. Good air circulation prevents rot.",
      temperature: "Happy in 60-80°F (15-27°C). Most varieties can tolerate brief cold snaps.",
      fertilizing: "Feed monthly during spring and summer with diluted succulent fertilizer."
    }
  },
  {
    id: "22",
    name: "Mini Succulent Garden",
    price: 45,
    image: succulentImg2,
    category: "succulents",
    rating: 4.8,
    reviews: 112,
    description: "A charming miniature garden featuring 5-6 different succulent varieties arranged in a decorative container. Each plant is chosen for its unique color, shape, and texture. Perfect for small spaces, offices, or as a delightful gift for plant lovers.",
    careLevel: "Easy",
    light: "Bright light",
    water: "Minimal watering",
    petFriendly: true,
    size: "Small (3-5 inches)",
    careInstructions: {
      watering: "Water sparingly every 2-3 weeks. Soil should be completely dry before watering.",
      light: "Place in brightest available spot. South or west-facing windows are ideal.",
      humidity: "Low humidity preferred. Avoid humid environments like bathrooms.",
      temperature: "Thrives in 65-75°F (18-24°C). Protect from freezing temperatures.",
      fertilizing: "Feed lightly every 4-6 weeks during growing season with cactus fertilizer."
    }
  },
  {
    id: "23",
    name: "Succulent Variety Pack",
    price: 85,
    image: succulentImg3,
    category: "succulents",
    rating: 4.9,
    reviews: 156,
    description: "A premium collection of 8-10 diverse succulent varieties, each in its own pot. This variety pack lets you create your own arrangements or display them individually. Includes rare and common varieties with different colors, textures, and growth habits.",
    careLevel: "Easy",
    light: "Bright to direct light",
    water: "Drought tolerant",
    petFriendly: true,
    size: "Various (2-4 inches each)",
    careInstructions: {
      watering: "Water each plant individually when soil is bone dry, typically every 2-4 weeks.",
      light: "Provide maximum light exposure. Can handle several hours of direct sun daily.",
      humidity: "Prefers dry conditions. Excellent choice for arid climates.",
      temperature: "Comfortable in 60-85°F (15-29°C). Some varieties can tolerate light frost.",
      fertilizing: "Use specialized succulent fertilizer monthly during active growth period."
    }
  },
  {
    id: "24",
    name: "Aloe Vera",
    price: 29,
    image: aloeImg1,
    category: "succulents",
    rating: 4.8,
    reviews: 187,
    description: "The famous Aloe Vera is both beautiful and functional with thick, gel-filled leaves. This medicinal plant has been used for centuries to soothe burns and skin irritations. Easy to grow and propagate, it produces offsets (pups) that can be shared with friends and family.",
    careLevel: "Very Easy",
    light: "Bright indirect light",
    water: "Every 3 weeks",
    petFriendly: false,
    size: "Small to Medium (8-12 inches)",
    careInstructions: {
      watering: "Water deeply every 3 weeks in summer, monthly in winter. Leaves will feel thin when thirsty.",
      light: "Prefers bright, indirect light. Some morning sun is okay. Too much direct sun can brown leaves.",
      humidity: "Low humidity is ideal. Excellent for dry environments.",
      temperature: "Comfortable in 55-80°F (13-27°C). Can tolerate brief temperature drops.",
      fertilizing: "Feed sparingly, 2-3 times per year with diluted cactus fertilizer."
    }
  },
  {
    id: "25",
    name: "Aloe Vera Large",
    price: 49,
    image: aloeImg2,
    category: "succulents",
    rating: 4.7,
    reviews: 143,
    description: "A mature, larger Aloe Vera specimen with multiple established rosettes. This plant size provides plenty of healing gel for home remedies. Its architectural form makes it a striking addition to modern interiors while offering practical medicinal benefits.",
    careLevel: "Very Easy",
    light: "Bright light",
    water: "Infrequent",
    petFriendly: false,
    size: "Medium to Large (12-18 inches)",
    careInstructions: {
      watering: "Water every 3-4 weeks. Overwatering is the main cause of problems with Aloe.",
      light: "Thrives in bright light with some direct sun. Rotate for even growth.",
      humidity: "Prefers dry air. Good drainage is essential.",
      temperature: "Happy in 60-75°F (15-24°C). Bring indoors if temperatures drop below 50°F.",
      fertilizing: "Minimal fertilizing needed. Feed 1-2 times during growing season only."
    }
  },
  {
    id: "26",
    name: "Jade Plant",
    price: 39,
    image: jadeImg1,
    category: "succulents",
    rating: 4.8,
    reviews: 95,
    description: "The Jade Plant (Crassula ovata) is considered a symbol of good luck and prosperity. With its thick, woody stems and glossy, oval leaves, it resembles a miniature tree. This long-lived succulent can become a cherished heirloom, growing larger and more valuable with age.",
    careLevel: "Easy",
    light: "Bright light with some direct sun",
    water: "Every 2-3 weeks",
    petFriendly: false,
    size: "Small to Medium (6-12 inches)",
    careInstructions: {
      watering: "Water when soil is completely dry, every 2-3 weeks. Less in winter. Wrinkled leaves indicate thirst.",
      light: "Needs bright light with 4+ hours of direct sun for compact growth and possible flowering.",
      humidity: "Low humidity preferred. Excellent for dry climates.",
      temperature: "Comfortable in 65-75°F (18-24°C). Cool winter temps (50-55°F) encourage flowering.",
      fertilizing: "Feed monthly during spring and summer with diluted balanced fertilizer."
    }
  },
  {
    id: "27",
    name: "Jade Plant Variegated",
    price: 55,
    image: jadeImg2,
    category: "succulents",
    rating: 4.9,
    reviews: 78,
    description: "A stunning variegated Jade Plant featuring cream and green striped leaves often with pink edges. This rare cultivar is highly sought after by collectors. It maintains the easy-care nature of regular Jade but with enhanced visual interest and unique coloring.",
    careLevel: "Easy",
    light: "Bright indirect to direct",
    water: "Low water needs",
    petFriendly: false,
    size: "Small (6-10 inches)",
    careInstructions: {
      watering: "Water every 2-3 weeks when soil is dry. Variegated types need slightly more water than solid green.",
      light: "Needs bright light to maintain variegation. Some direct morning sun enhances pink coloring.",
      humidity: "Low to average humidity. Good air circulation important.",
      temperature: "Prefers 65-75°F (18-24°C). Protect from frost.",
      fertilizing: "Light feeding every 4-6 weeks during growing season. Don't overfeed."
    }
  },
  {
    id: "28",
    name: "Echeveria Rosette",
    price: 32,
    image: echeveriaImg1,
    category: "succulents",
    rating: 4.7,
    reviews: 124,
    description: "Echeveria forms perfect geometric rosettes in shades of blue-green, pink, and purple. These elegant succulents look like roses made of stone. Popular for wedding decorations, terrariums, and succulent arrangements. Easy to propagate from leaves.",
    careLevel: "Easy",
    light: "Bright direct light",
    water: "Every 2 weeks",
    petFriendly: true,
    size: "Small (3-6 inches)",
    careInstructions: {
      watering: "Water every 2 weeks during growing season, less in winter. Avoid water on leaves to prevent rot.",
      light: "Requires bright light with several hours of direct sun daily for compact growth and color.",
      humidity: "Low humidity essential. High humidity can cause fungal issues.",
      temperature: "Comfortable in 65-80°F (18-27°C). Bring indoors if frost threatens.",
      fertilizing: "Feed monthly during spring and summer with diluted cactus fertilizer."
    }
  },
  {
    id: "29",
    name: "Haworthia Zebra",
    price: 35,
    image: haworthiaImg1,
    category: "succulents",
    rating: 4.8,
    reviews: 102,
    description: "Haworthia fasciata, known as Zebra Plant, features distinctive white stripes on dark green leaves arranged in attractive rosettes. This small succulent is perfect for beginners and thrives in lower light than most succulents. Makes an excellent desk or shelf plant.",
    careLevel: "Very Easy",
    light: "Medium to bright indirect",
    water: "Every 2-3 weeks",
    petFriendly: true,
    size: "Small (3-5 inches)",
    careInstructions: {
      watering: "Water every 2-3 weeks when soil is dry. More tolerant of overwatering than most succulents.",
      light: "Prefers bright, indirect light. Can tolerate lower light better than other succulents.",
      humidity: "Average humidity is fine. Not as finicky as other succulents.",
      temperature: "Happy in 65-80°F (18-27°C). Protect from extreme cold.",
      fertilizing: "Feed sparingly, every 2-3 months during growing season with diluted fertilizer."
    }
  },
  {
    id: "30",
    name: "String of Pearls",
    price: 42,
    image: stringPearlsImg1,
    category: "succulents",
    rating: 4.6,
    reviews: 134,
    description: "String of Pearls (Senecio rowleyanus) features cascading stems of bead-like leaves that resemble a pearl necklace. This unique trailing succulent is perfect for hanging baskets or high shelves. Its unusual appearance makes it a conversation starter and Instagram favorite.",
    careLevel: "Moderate",
    light: "Bright indirect light",
    water: "Every 2 weeks",
    petFriendly: false,
    size: "Trailing (12-24 inches)",
    careInstructions: {
      watering: "Water every 2 weeks when pearls feel soft. Overwatering causes mushy, translucent pearls.",
      light: "Needs bright, indirect light. Some direct morning sun is beneficial. Too little light causes stretching.",
      humidity: "Low to average humidity. Good drainage essential to prevent rot.",
      temperature: "Prefers 65-75°F (18-24°C). Sensitive to cold; bring indoors below 50°F.",
      fertilizing: "Feed monthly during spring and summer with diluted liquid fertilizer for hanging plants."
    }
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find((product) => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  if (category === "all") return products;
  return products.filter((product) => product.category === category);
};
