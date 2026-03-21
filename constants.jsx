import {
  Heart,
  Sparkles,
  Cake,
  Users,
  Droplet,
  Wind,
  PlusCircle,
  ShoppingBag
} from "lucide-react";
const GALLERY_ITEMS = [
  { id: "1", url: "/gallery/kerala_wedding.png", type: "Wedding", classification: "Celebratory", subType: "Mystical", date: "June 2024", location: "Enchanted Woods" },
  { id: "2", url: "/gallery/kerala_wedding.png", type: "Wedding", classification: "Celebratory", subType: "Modern", date: "May 2024", location: "Misty Peaks" },
  { id: "3", url: "/gallery/birthday_party.png", type: "Birthday", classification: "Celebratory", date: "April 2024", location: "Twilight Ridge" },
  { id: "4", url: "/gallery/corporate_gala.png", type: "Reunion", classification: "Celebratory", date: "March 2024", location: "The Highlands" },
  { id: "5", url: "/gallery/baptisim_candles.png", type: "Baptism", classification: "Religious", date: "Feb 2024", location: "Silent Valley" },
  { id: "6", url: "/gallery/memorial_service.png", type: "Memorial", classification: "Memorial", date: "Jan 2024", location: "Ancient Grove" },
  { id: "7", url: "/gallery/kerala_wedding.png", type: "Wedding", classification: "Celebratory", subType: "Religious", date: "Dec 2023", location: "Northern Lakes" },
  { id: "8", url: "/gallery/anniversary_toast.png", type: "Anniversary", classification: "Celebratory", date: "Nov 2023", location: "Purple Horizons" }
];
const SERVICES = [
  {
    id: "Wedding",
    classification: "Celebratory",
    title: "Ethereal Weddings",
    description: "Transforming your love story into an ethereal celebration amidst the twilight forests. Our weddings bridge natural heritage with modern elegance.",
    image: "/gallery/church_wedding.png",
    features: ["Forest Sourcing", "Wild Floral Design", "Culinary Curation"],
    subFilters: ["All", "Mystical & Regional", "Elopement", "Modern/Forest", "Pocket Luxe"],
    themeColor: "dark",
    overlayPattern: "https://www.transparenttextures.com/patterns/floral-paper.png"
  },
  {
    id: "Birthday",
    classification: "Celebratory",
    title: "Twilight Birthdays",
    description: "Celebrating life milestones with immersive environments under the stars.",
    image: "/gallery/church_wedding.png",
    features: ["Themed Star Decor", "Mixology Stations", "Immersive Entertainment"],
    themeColor: "light",
    overlayPattern: "https://www.transparenttextures.com/patterns/cloud-noise.png"
  },
  {
    id: "Baptism",
    classification: "Religious",
    title: "Sacred Ceremonies",
    description: "A serene atmosphere for your child's first major milestone, emphasizing grace and the tranquility of nature.",
    image: "/gallery/birthday_party.png",
    features: ["Ceremony Coordination", "Intimate Reception", "Floral Purity"],
    themeColor: "light",
    overlayPattern: "https://www.transparenttextures.com/patterns/cloud-noise.png"
  },
  {
    id: "Memorial",
    classification: "Memorial",
    title: "Life Celebrations",
    description: "A dignified, respectful space to honor a legacy with grace, peace, and natural beauty.",
    image: "/gallery/corporate_gala.png",
    features: ["Eulogy Setups", "Dignified Floral Tributes", "Host Concierge"],
    themeColor: "dignified",
    overlayPattern: "https://www.transparenttextures.com/patterns/black-paper.png"
  },
  {
    id: "Custom",
    classification: "Custom",
    title: "Wild Canvas",
    description: "For events that defy categorization. We bring wild, non-traditional visions to life.",
    image: "/gallery/corporate_gala.png",
    features: ["Bespoke Creative Brief", "Experimental Decor", "Mountain Scouting"],
    themeColor: "dark",
    overlayPattern: "https://www.transparenttextures.com/patterns/cubes.png"
  },
  {
    id: "Marketplace",
    classification: "Add-ons",
    title: "Service Marketplace",
    description: "Bespoke modular enhancements for your existing events, from catering to soundscapes.",
    image: "/gallery/sadhya_catering.png",
    features: ["Catering", "Light & Sound", "Photo/Video", "Decor"],
    themeColor: "light",
    overlayPattern: "https://www.transparenttextures.com/patterns/geometric-leaves.png"
  }
];
const ADD_ONS = [
  {
    id: "cat-1",
    category: "Catering",
    title: "Michelin-Inspired Fine Dining",
    description: "Multi-course tasting menus designed around seasonal mountain ingredients.",
    image: "/gallery/baptisim_candles.png",
    specs: ["Wine Pairing", "Silver Service", "Seasonal Ingredients"]
  },
  {
    id: "ls-1",
    category: "Light & Sound",
    title: "Twilight Atmospherics",
    description: "Precision mapping and lighting rigs that emulate starry skies.",
    image: "/gallery/kerala_wedding.png",
    specs: ["4K Projection", "Surround Audio", "Intelligent Lighting"]
  },
  {
    id: "pv-1",
    category: "Photo/Video",
    title: "The Showreel Studio",
    description: "Cinematic captures using drone and 35mm film styles.",
    image: "/gallery/sadhya_catering.png",
    specs: ["Same-day Edits", "Physical Albums", "Drone Coverage"]
  },
  {
    id: "dec-1",
    category: "Decor",
    title: "Wilderness Florals",
    description: "Avant-garde floral installations featuring wild elements.",
    image: "/gallery/corporate_gala.png",
    specs: ["Custom Furniture", "Scent Design", "Sustainable Sourcing"]
  }
];
const CLASSIFICATION_ICONS = {
  Celebratory: <Heart className="w-8 h-8" />,
  Religious: <Droplet className="w-8 h-8" />,
  Memorial: <Wind className="w-8 h-8" />,
  Custom: <PlusCircle className="w-8 h-8" />,
  "Add-ons": <ShoppingBag className="w-8 h-8" />
};
const EVENT_ICONS = {
  Wedding: <Heart className="w-8 h-8" />,
  Anniversary: <Sparkles className="w-8 h-8" />,
  Birthday: <Cake className="w-8 h-8" />,
  Reunion: <Users className="w-8 h-8" />,
  Baptism: <Droplet className="w-8 h-8" />,
  Memorial: <Wind className="w-8 h-8" />,
  Custom: <PlusCircle className="w-8 h-8" />
};
export {
  ADD_ONS,
  CLASSIFICATION_ICONS,
  EVENT_ICONS,
  GALLERY_ITEMS,
  SERVICES
};
