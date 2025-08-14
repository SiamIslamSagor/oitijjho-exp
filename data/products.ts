export interface Product {
  id: number;
  name: string;
  category: string;
  basePrice: number;
  price: number; // For backward compatibility with existing products page
  image: string;
  images?: string[];
  featured: boolean;
  slug: string;
  description?: string;
  specifications?: Record<string, string>;
  features?: string[];
  quantityPricing?: Array<{
    min: number;
    max: number;
    price: number;
    discount: number;
  }>;
  minOrder?: number;
  stock?: number;
  leadTime?: string;
  shipping?: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Hand-woven Jamdani Saree",
    category: "weaves-and-textiles",
    basePrice: 249.99,
    price: 249.99,
    image: "/jamdani.jpg",
    images: [
      "/jamdani.jpg",
      "/jamdani-2.jpg",
      "/jamdani-3.jpg",
      "/jamdani-4.jpg",
    ],
    featured: true,
    slug: "jamdani",
    description: "Exquisite hand-woven Jamdani saree crafted by master artisans using traditional techniques passed down through generations. Each piece is a unique work of art featuring intricate floral and geometric patterns.",
    specifications: {
      "Material": "Pure Silk",
      "Weave Type": "Hand-woven Jamdani",
      "Length": "5.5 meters",
      "Width": "1.2 meters",
      "Weight": "250-300 grams",
      "Origin": "Dhaka, Bangladesh",
      "GI Status": "Geographical Indication Certified",
      "Care Instructions": "Dry clean only"
    },
    features: [
      "Hand-woven by master artisans",
      "Traditional Jamdani technique",
      "Pure silk material",
      "Intricate floral patterns",
      "GI certified authenticity",
      "Unique piece - no two alike"
    ],
    quantityPricing: [
      { min: 1, max: 4, price: 249.99, discount: 0 },
      { min: 5, max: 9, price: 239.99, discount: 4 },
      { min: 10, max: 24, price: 229.99, discount: 8 },
      { min: 25, max: 49, price: 219.99, discount: 12 },
      { min: 50, max: 99, price: 209.99, discount: 16 },
      { min: 100, max: 999, price: 199.99, discount: 20 }
    ],
    minOrder: 1,
    stock: 150,
    leadTime: "7-14 days",
    shipping: "Free shipping on orders over $500"
  },
  {
    id: 2,
    name: "Brass Decorative Plate",
    category: "handcrafted-heritage",
    basePrice: 79.99,
    price: 79.99,
    image: "/brass-plate.jpg",
    images: [
      "/brass-plate.jpg",
      "/brass-plate-2.jpg",
      "/brass-plate-3.jpg",
    ],
    featured: true,
    slug: "brass-plate",
    description: "Beautifully crafted brass decorative plate featuring traditional Bengali motifs. Each plate is handcrafted by skilled artisans using age-old techniques.",
    specifications: {
      "Material": "Pure Brass",
      "Diameter": "12 inches",
      "Weight": "800 grams",
      "Finish": "Antique brass",
      "Origin": "Dhaka, Bangladesh",
      "Care Instructions": "Polish with brass cleaner"
    },
    features: [
      "Handcrafted brass",
      "Traditional motifs",
      "Antique finish",
      "Perfect for wall decoration",
      "Cultural significance"
    ],
    quantityPricing: [
      { min: 1, max: 4, price: 79.99, discount: 0 },
      { min: 5, max: 9, price: 74.99, discount: 6 },
      { min: 10, max: 24, price: 69.99, discount: 12 },
      { min: 25, max: 49, price: 64.99, discount: 19 },
      { min: 50, max: 99, price: 59.99, discount: 25 },
      { min: 100, max: 999, price: 54.99, discount: 31 }
    ],
    minOrder: 1,
    stock: 200,
    leadTime: "5-10 days",
    shipping: "Free shipping on orders over $300"
  },
 
  {
    id: 4,
    name: "Natural Silk Scarf",
    category: "weaves-and-textiles",
    basePrice: 59.99,
    price: 59.99,
    image: "/silk-scarf.jpg",
    images: [
      "/silk-scarf.jpg",
      "/silk-scarf-2.jpg",
      "/silk-scarf-3.jpg",
    ],
    featured: false,
    slug: "silk-scarf",
    description: "Luxurious natural silk scarf with traditional Bengali embroidery. Made from the finest mulberry silk with hand-stitched decorative patterns.",
    specifications: {
      "Material": "100% Mulberry Silk",
      "Dimensions": "180cm x 45cm",
      "Weight": "80 grams",
      "Origin": "Dhaka, Bangladesh",
      "Care Instructions": "Dry clean only"
    },
    features: [
      "Pure mulberry silk",
      "Hand embroidery",
      "Traditional patterns",
      "Lightweight and soft",
      "Versatile accessory"
    ],
    quantityPricing: [
      { min: 1, max: 4, price: 59.99, discount: 0 },
      { min: 5, max: 9, price: 54.99, discount: 8 },
      { min: 10, max: 24, price: 49.99, discount: 17 },
      { min: 25, max: 49, price: 44.99, discount: 25 },
      { min: 50, max: 99, price: 39.99, discount: 33 },
      { min: 100, max: 999, price: 34.99, discount: 42 }
    ],
    minOrder: 1,
    stock: 300,
    leadTime: "5-8 days",
    shipping: "Free shipping on orders over $200"
  },
  {
    id: 5,
    name: "Terracotta Tea Set",
    category: "handcrafted-heritage",
    basePrice: 89.99,
    price: 89.99,
    image: "/tea-set.jpg",
    images: [
      "/tea-set.jpg",
      "/tea-set-2.jpg",
      "/tea-set-3.jpg",
    ],
    featured: true,
    slug: "tea-set",
    description: "Traditional terracotta tea set handcrafted by skilled potters. Each piece is made from natural clay and fired using traditional methods.",
    specifications: {
      "Material": "Natural Terracotta Clay",
      "Set Contents": "6 cups, 1 teapot, 1 sugar bowl",
      "Finish": "Natural terracotta with traditional glaze",
      "Origin": "Dhaka, Bangladesh",
      "Care Instructions": "Hand wash only"
    },
    features: [
      "Natural terracotta clay",
      "Traditional pottery techniques",
      "Complete tea set",
      "Eco-friendly material",
      "Perfect for traditional tea ceremonies"
    ],
    quantityPricing: [
      { min: 1, max: 4, price: 89.99, discount: 0 },
      { min: 5, max: 9, price: 84.99, discount: 6 },
      { min: 10, max: 24, price: 79.99, discount: 11 },
      { min: 25, max: 49, price: 74.99, discount: 17 },
      { min: 50, max: 99, price: 69.99, discount: 22 },
      { min: 100, max: 999, price: 64.99, discount: 28 }
    ],
    minOrder: 1,
    stock: 120,
    leadTime: "7-12 days",
    shipping: "Free shipping on orders over $350"
  },
  {
    id: 6,
    name: "Embroidered Wall Hanging",
    category: "weaves-and-textiles",
    basePrice: 119.99,
    price: 119.99,
    image: "/wall-hanging.jpg",
    images: [
      "/wall-hanging.jpg",
      "/wall-hanging-2.jpg",
      "/wall-hanging-3.jpg",
    ],
    featured: false,
    slug: "wall-hanging",
    description: "Beautiful embroidered wall hanging featuring traditional Bengali folk art motifs. Each piece is hand-embroidered on natural cotton fabric.",
    specifications: {
      "Material": "Natural Cotton with Silk Thread",
      "Dimensions": "60cm x 90cm",
      "Weight": "500 grams",
      "Origin": "Dhaka, Bangladesh",
      "Care Instructions": "Dry clean only"
    },
    features: [
      "Hand embroidery",
      "Traditional folk art",
      "Natural materials",
      "Perfect wall decoration",
      "Cultural significance"
    ],
    quantityPricing: [
      { min: 1, max: 4, price: 119.99, discount: 0 },
      { min: 5, max: 9, price: 109.99, discount: 8 },
      { min: 10, max: 24, price: 99.99, discount: 17 },
      { min: 25, max: 49, price: 89.99, discount: 25 },
      { min: 50, max: 99, price: 79.99, discount: 33 },
      { min: 100, max: 999, price: 69.99, discount: 42 }
    ],
    minOrder: 1,
    stock: 80,
    leadTime: "8-12 days",
    shipping: "Free shipping on orders over $250"
  },
  {
    id: 7,
    name: "Kantha Stitch Cushion Cover",
    category: "weaves-and-textiles",
    basePrice: 39.99,
    price: 39.99,
    image: "/cushion-cover.jpg",
    images: [
      "/cushion-cover.jpg",
      "/cushion-cover-2.jpg",
    ],
    featured: false,
    slug: "cushion-cover",
    description: "Traditional Kantha stitch cushion cover made from recycled cotton saris. Each piece features unique hand-stitched patterns.",
    specifications: {
      "Material": "Recycled Cotton Sari",
      "Size": "18\" x 18\"",
      "Weight": "200 grams",
      "Origin": "Dhaka, Bangladesh",
      "Care Instructions": "Hand wash cold"
    },
    features: [
      "Recycled materials",
      "Traditional Kantha stitch",
      "Unique patterns",
      "Eco-friendly",
      "Soft and comfortable"
    ],
    quantityPricing: [
      { min: 1, max: 4, price: 39.99, discount: 0 },
      { min: 5, max: 9, price: 36.99, discount: 8 },
      { min: 10, max: 24, price: 33.99, discount: 15 },
      { min: 25, max: 49, price: 30.99, discount: 23 },
      { min: 50, max: 99, price: 27.99, discount: 30 },
      { min: 100, max: 999, price: 24.99, discount: 38 }
    ],
    minOrder: 1,
    stock: 400,
    leadTime: "3-7 days",
    shipping: "Free shipping on orders over $150"
  },
  {
    id: 8,
    name: "Bamboo Handicraft Basket",
    category: "handcrafted-heritage",
    basePrice: 49.99,
    price: 49.99,
    image: "/basket.jpg",
    images: [
      "/basket.jpg",
      "/basket-2.jpg",
      "/basket-3.jpg",
    ],
    featured: false,
    slug: "basket",
    description: "Hand-woven bamboo basket crafted by skilled artisans using traditional techniques. Perfect for storage and decoration.",
    specifications: {
      "Material": "Natural Bamboo",
      "Dimensions": "30cm x 20cm x 15cm",
      "Weight": "800 grams",
      "Origin": "Dhaka, Bangladesh",
      "Care Instructions": "Wipe with damp cloth"
    },
    features: [
      "Natural bamboo",
      "Hand-woven",
      "Traditional technique",
      "Versatile storage",
      "Eco-friendly"
    ],
    quantityPricing: [
      { min: 1, max: 4, price: 49.99, discount: 0 },
      { min: 5, max: 9, price: 44.99, discount: 10 },
      { min: 10, max: 24, price: 39.99, discount: 20 },
      { min: 25, max: 49, price: 34.99, discount: 30 },
      { min: 50, max: 99, price: 29.99, discount: 40 },
      { min: 100, max: 999, price: 24.99, discount: 50 }
    ],
    minOrder: 1,
    stock: 250,
    leadTime: "5-10 days",
    shipping: "Free shipping on orders over $200"
  },
  {
    id: 9,
    name: "Mango Pickle",
    category: "fruits-and-flavors",
    basePrice: 12.99,
    price: 12.99,
    image: "/mango-pickle.jpg",
    images: [
      "/mango-pickle.jpg",
      "/mango-pickle-2.jpg",
    ],
    featured: true,
    slug: "mango-pickle",
    description: "Traditional Bengali mango pickle made from the finest Rajshahi mangoes. This authentic recipe has been passed down through generations, offering a perfect balance of sweet, sour, and spicy flavors.",
    specifications: {
      "Ingredients": "Mango, mustard oil, spices, salt",
      "Weight": "500 grams",
      "Shelf Life": "12 months",
      "Origin": "Rajshahi, Bangladesh",
      "GI Status": "Geographical Indication Certified",
      "Storage": "Store in cool, dry place"
    },
    features: [
      "Made from Rajshahi mangoes",
      "Traditional recipe",
      "No artificial preservatives",
      "GI certified",
      "Perfect with rice and curry"
    ],
    quantityPricing: [
      { min: 1, max: 4, price: 12.99, discount: 0 },
      { min: 5, max: 9, price: 11.99, discount: 8 },
      { min: 10, max: 24, price: 10.99, discount: 15 },
      { min: 25, max: 49, price: 9.99, discount: 23 },
      { min: 50, max: 99, price: 8.99, discount: 31 },
      { min: 100, max: 999, price: 7.99, discount: 38 }
    ],
    minOrder: 1,
    stock: 500,
    leadTime: "3-5 days",
    shipping: "Free shipping on orders over $100"
  },
  {
    id: 10,
    name: "Tamarind Chutney",
    category: "fruits-and-flavors",
    basePrice: 8.99,
    price: 8.99,
    image: "/tamarind-chutney.jpg",
    images: [
      "/tamarind-chutney.jpg",
      "/tamarind-chutney-2.jpg",
    ],
    featured: false,
    slug: "tamarind-chutney",
    description: "Authentic tamarind chutney made from ripe tamarind and traditional spices. Perfect accompaniment to Bengali meals and snacks.",
    specifications: {
      "Ingredients": "Tamarind, jaggery, spices, salt",
      "Weight": "300 grams",
      "Shelf Life": "8 months",
      "Origin": "Dhaka, Bangladesh",
      "Storage": "Store in cool, dry place"
    },
    features: [
      "Natural tamarind",
      "Traditional spices",
      "No artificial colors",
      "Perfect condiment",
      "Authentic taste"
    ],
    quantityPricing: [
      { min: 1, max: 4, price: 8.99, discount: 0 },
      { min: 5, max: 9, price: 8.49, discount: 6 },
      { min: 10, max: 24, price: 7.99, discount: 11 },
      { min: 25, max: 49, price: 7.49, discount: 17 },
      { min: 50, max: 99, price: 6.99, discount: 22 },
      { min: 100, max: 999, price: 6.49, discount: 28 }
    ],
    minOrder: 1,
    stock: 600,
    leadTime: "2-4 days",
    shipping: "Free shipping on orders over $80"
  },
  {
    id: 11,
    name: "Bogurar Doi",
    category:"fruits-and-flavors",
    basePrice: 15.99,
    price: 15.99,
    image: "https://i.ibb.co.com/RTqDcgP5/bogurar-doi-4167c500.jpg",
    images: [
      "https://i.ibb.co.com/RTqDcgP5/bogurar-doi-4167c500.jpg",
      "https://i.ibb.co.com/RTqDcgP5/bogurar-doi-4167c500.jpg",
      // "https://i.ibb.co.com/1GnMNWgD/doi.jpg",
    ],
    featured: true,
    slug: "bogurar-doi",
    description: "Authentic Bogurar Doi (yogurt) from Bogura district, known for its unique taste and texture. Made using traditional methods with pure cow's milk and natural cultures.",
    specifications: {
      "Ingredients": "Pure cow's milk, natural cultures",
      "Weight": "1 kilogram",
      "Shelf Life": "7 days refrigerated",
      "Origin": "Bogura, Bangladesh",
      "GI Status": "Geographical Indication Certified",
      "Storage": "Keep refrigerated"
    },
    features: [
      "Traditional Bogura recipe",
      "Pure cow's milk",
      "Natural fermentation",
      "GI certified",
      "Creamy texture"
    ],
    quantityPricing: [
      { min: 1, max: 4, price: 15.99, discount: 0 },
      { min: 5, max: 9, price: 14.99, discount: 6 },
      { min: 10, max: 24, price: 13.99, discount: 12 },
      { min: 25, max: 49, price: 12.99, discount: 19 },
      { min: 50, max: 99, price: 11.99, discount: 25 },
      { min: 100, max: 999, price: 10.99, discount: 31 }
    ],
    minOrder: 1,
    stock: 300,
    leadTime: "2-3 days",
    shipping: "Free shipping on orders over $150"
  },
  {
    id: 12,
    name: "Dhaka Muslin",
    category: "regional-specialties",
    basePrice: 299.99,
    price: 299.99,
    image: "/dhaka-muslin.jpg",
    images: [
      "/dhaka-muslin.jpg",
      "/dhaka-muslin-2.jpg",
      "/dhaka-muslin-3.jpg",
    ],
    featured: true,
    slug: "dhaka-muslin",
    description: "Legendary Dhaka Muslin, the finest cotton fabric in the world. Woven with such delicacy that it was once called 'woven air'. Each piece is a masterpiece of traditional craftsmanship.",
    specifications: {
      "Material": "Pure Cotton Muslin",
      "Dimensions": "6 meters x 1.2 meters",
      "Weight": "150-200 grams",
      "Origin": "Dhaka, Bangladesh",
      "GI Status": "Geographical Indication Certified",
      "Care Instructions": "Dry clean only"
    },
    features: [
      "World's finest cotton",
      "Traditional weaving",
      "Legendary quality",
      "GI certified",
      "Heritage fabric"
    ],
    quantityPricing: [
      { min: 1, max: 4, price: 299.99, discount: 0 },
      { min: 5, max: 9, price: 289.99, discount: 3 },
      { min: 10, max: 24, price: 279.99, discount: 7 },
      { min: 25, max: 49, price: 269.99, discount: 10 },
      { min: 50, max: 99, price: 259.99, discount: 13 },
      { min: 100, max: 999, price: 249.99, discount: 17 }
    ],
    minOrder: 1,
    stock: 50,
    leadTime: "15-20 days",
    shipping: "Free shipping on orders over $1000"
  }
];

// Helper function to get product by slug
export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(product => product.slug === slug);
};

// Helper function to get products by category
export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

// Helper function to get featured products
export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

// Helper function to get current pricing based on quantity
export const getCurrentPricing = (product: Product, quantity: number) => {
  if (!product.quantityPricing) {
    return { price: product.basePrice, discount: 0 };
  }
  
  return product.quantityPricing.find(
    pricing => quantity >= pricing.min && quantity <= pricing.max
  ) || product.quantityPricing[0];
}; 