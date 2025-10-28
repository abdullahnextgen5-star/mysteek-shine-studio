export const products = [
  { id: 1, image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=400&h=400&fit=crop", title: "Mystic Purple", price: 19.99, shade: "Purple", tag: "Bestseller" },
  { id: 2, image: "https://images.unsplash.com/photo-1514993212538-e6c39e32a97b?w=400&h=400&fit=crop", title: "Electric Blue", price: 19.99, shade: "Blue", tag: "New" },
  { id: 3, image: "https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=400&h=400&fit=crop", title: "Sunset Pink", price: 19.99, shade: "Pink", tag: "Trending" },
  { id: 4, image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop", title: "Fiery Red", price: 19.99, shade: "Red" },
  { id: 5, image: "https://images.unsplash.com/photo-1520466809213-7b9a56adcd45?w=400&h=400&fit=crop", title: "Emerald Green", price: 19.99, shade: "Green", tag: "Bestseller" },
  { id: 6, image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=400&fit=crop", title: "Lavender Dream", price: 19.99, shade: "Lavender" },
  { id: 7, image: "https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?w=400&h=400&fit=crop", title: "Rose Gold", price: 21.99, shade: "Rose", tag: "Premium" },
  { id: 8, image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=400&fit=crop", title: "Teal Wave", price: 19.99, shade: "Teal" }
];

export const bundles = [
  { id: 1, title: "Starter Duo", price: 34.99, originalPrice: 39.98, savings: "Save 12%", description: "Pick any 2 shades", items: ["2 Colors", "Application Guide"] },
  { id: 2, title: "Express Kit", price: 39.99, originalPrice: 46.98, savings: "Save 15%", description: "Color + Brush + Cape", items: ["1 Color", "Pro Brush", "Salon Cape"], tag: "Popular" },
  { id: 3, title: "Party Pack", price: 64.99, originalPrice: 79.96, savings: "Save 20%", description: "Any 4 shades", items: ["4 Colors", "Mixing Bowl", "Gloves"], tag: "Most Popular" },
  { id: 4, title: "Artist Pro Set", price: 89.99, originalPrice: 119.94, savings: "Save 25%", description: "6 shades + tools", items: ["6 Colors", "Pro Brush Set", "Mixing Tools", "Storage Bag"], tag: "Best Value" }
];

export const shadeFamilies = [
  { id: 1, name: "Bold Purples", color: "hsl(270, 60%, 50%)", count: 8, image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=300&h=300&fit=crop" },
  { id: 2, name: "Electric Blues", color: "hsl(210, 80%, 55%)", count: 6, image: "https://images.unsplash.com/photo-1514993212538-e6c39e32a97b?w=300&h=300&fit=crop" },
  { id: 3, name: "Fiery Reds", color: "hsl(0, 70%, 50%)", count: 7, image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=300&h=300&fit=crop" },
  { id: 4, name: "Sunset Pinks", color: "hsl(330, 75%, 65%)", count: 9, image: "https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=300&h=300&fit=crop" },
  { id: 5, name: "Emerald Greens", color: "hsl(150, 60%, 45%)", count: 5, image: "https://images.unsplash.com/photo-1520466809213-7b9a56adcd45?w=300&h=300&fit=crop" },
  { id: 6, name: "Pastels", color: "hsl(280, 40%, 75%)", count: 10, image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=300&h=300&fit=crop" }
];

export const beforeAfter = [
  { before: "https://images.unsplash.com/photo-1560869713-7d0a29430803?w=600&h=600&fit=crop", after: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=600&h=600&fit=crop", caption: "Mystic Purple" },
  { before: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&h=600&fit=crop", after: "https://images.unsplash.com/photo-1514993212538-e6c39e32a97b?w=600&h=600&fit=crop", caption: "Electric Blue" },
  { before: "https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=600&h=600&fit=crop", after: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&h=600&fit=crop", caption: "Sunset Pink" }
];

export const reviews = [
  { id: 1, name: "Jasmine T.", rating: 5, text: "This color is AMAZING! It washes out clean and my curls stay defined. I get so many compliments!", shade: "Mystic Purple", verified: true },
  { id: 2, name: "Monica R.", rating: 5, text: "Finally a temporary color that actually shows on my dark hair! Love that it's gentle and doesn't damage.", shade: "Electric Blue", verified: true },
  { id: 3, name: "Keisha L.", rating: 5, text: "The perfect pink! Vibrant color that lasts all day and rinses clean. No staining on my pillows.", shade: "Sunset Pink", verified: true }
];

export const qa = [
  { q: "How long does the color last?", a: "The color typically lasts 1-2 days and washes out completely with regular shampooing. For longer wear, avoid washing and use dry shampoo." },
  { q: "Will it stain my pillowcase?", a: "When fully dry, the color transfer is minimal. We recommend using a dark pillowcase or towel the first night for extra protection." },
  { q: "Does it work on dark hair?", a: "Yes! Our formula is designed to show vibrant color on natural hair of all shades. Lighter colors may be more subtle on very dark hair." },
  { q: "Is it safe for chemically treated hair?", a: "Absolutely. Our formula contains no harsh chemicals and is safe for relaxed, colored, or chemically treated hair." }
];

export const ugcImages = [
  "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1514993212538-e6c39e32a97b?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1520466809213-7b9a56adcd45?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1560869713-7d0a29430803?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop"
];

export const blogPosts = [
  { id: 1, title: "5 Ways to Style Your Bold Color", excerpt: "From sleek ponytails to glamorous curls, discover styling tips that make your color pop.", image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=600&h=400&fit=crop", date: "Mar 15, 2025" },
  { id: 2, title: "Color Care 101: Making It Last", excerpt: "Expert tips on extending your color's vibrancy and keeping your hair healthy.", image: "https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=600&h=400&fit=crop", date: "Mar 10, 2025" },
  { id: 3, title: "Meet Our Community: Color Stories", excerpt: "Real customers share their bold color journeys and self-expression stories.", image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&h=400&fit=crop", date: "Mar 5, 2025" }
];

export const pressLogos = [
  { name: "Essence", url: "#" },
  { name: "Allure", url: "#" },
  { name: "Vogue", url: "#" },
  { name: "Cosmopolitan", url: "#" },
  { name: "Refinery29", url: "#" }
];
