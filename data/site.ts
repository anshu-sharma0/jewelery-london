export const business = {
  name: "Aurelia House",
  legalName: "Aurelia House Fine Jewellery",
  tagline: "Modern heirlooms shaped with quiet confidence.",
  description:
    "A premium jewellery studio crafting sculptural pieces with precious materials, contemporary restraint, and an editorial point of view.",
  phone: "+91 98765 43210",
  email: "hello@aureliahouse.com",
  location: "Ballygunge, Kolkata, India",
  address: "12 Elgin Road, Ballygunge, Kolkata 700020",
  mapEmbedUrl:
    "https://www.google.com/maps?q=22.5355,88.3644&z=14&output=embed",
  hours: "Mon - Sat, 10:00 AM - 7:00 PM",
  instagram: "@aureliahouse",
  heroCta: "Book a private appointment"
};

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/collection", label: "Collection" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export const collectionFilters = {
  category: ["All Pieces", "Rings", "Necklaces", "Bracelets", "Earrings"],
  material: ["18K Gold", "Rose Gold", "Platinum", "Diamond Set"],
  price: ["Under 25k", "25k - 50k", "50k - 1L", "Above 1L"]
};

export const collectionItems = [
  {
    title: "Noir Halo Ring",
    price: "INR 42,000",
    category: "Rings",
    image: "/assets/images/collection-1.webp",
    accent: "Midnight polished gold"
  },
  {
    title: "Luna Sculpt Collar",
    price: "INR 68,000",
    category: "Necklaces",
    image: "/assets/images/editorial.webp",
    accent: "Fluid silhouette in satin finish"
  },
  {
    title: "Solstice Tennis Line",
    price: "INR 54,000",
    category: "Bracelets",
    image: "/assets/images/hero-bracelet.webp",
    accent: "Diamond-set everyday statement"
  },
  {
    title: "Muse Drop Earrings",
    price: "INR 36,000",
    category: "Earrings",
    image: "/assets/images/story-right.webp",
    accent: "Architectural and lightweight"
  },
  {
    title: "Velour Signet",
    price: "INR 31,500",
    category: "Rings",
    image: "/assets/images/story-left.webp",
    accent: "A bold form with softened edges"
  },
  {
    title: "Auric Strand",
    price: "INR 73,000",
    category: "Necklaces",
    image: "/assets/images/hero-main.webp",
    accent: "Layered sparkle with gallery finish"
  }
];

export const brandStory = {
  eyebrow: "Our world",
  heading: "Luxury is felt in proportion, light, and the quiet precision of every detail.",
  intro:
    "Aurelia House designs contemporary jewellery for women who collect mood, memory, and permanence. Every piece balances sculptural restraint with a tactile warmth meant to be worn daily and treasured forever.",
  values: [
    "Limited-run collections with artisanal finishing",
    "Private styling rooted in personal storytelling",
    "Precious materials selected for longevity and glow"
  ]
};

export const aboutSections = [
  {
    title: "Designed with an editorial eye",
    body:
      "Our design language borrows from architecture, couture, and modern interiors. The result is jewellery that feels elevated without excess: clean curves, deliberate negative space, and surfaces that catch light beautifully.",
    image: "/assets/images/story-left.webp",
    imagePosition: "left" as const
  },
  {
    title: "Crafted for intimate rituals",
    body:
      "From private fittings to gifting moments, every interaction is shaped to feel thoughtful and calm. We believe the most premium experiences are never loud; they feel personal, refined, and deeply considered.",
    image: "/assets/images/story-right.webp",
    imagePosition: "right" as const
  }
];

export const contactHighlights = [
  { label: "Studio Name", value: business.legalName },
  { label: "Phone", value: business.phone },
  { label: "Location", value: business.address },
  { label: "Hours", value: business.hours }
];

export const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/collection", label: "Collection" },
  { href: "/about", label: "Story" },
  { href: "/contact", label: "Appointments" }
];
