
import React from 'react';
import { GalleryItem, ServiceDetail, EventType, AddOn, EventClassification } from './types';
import { 
  Heart, 
  Sparkles, 
  Cake, 
  Users, 
  Droplet, 
  Wind,
  PlusCircle,
  ShoppingBag
} from 'lucide-react';

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: '1', url: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800', type: 'Wedding', classification: 'Celebratory', subType: 'Cultural', date: 'June 2024', location: 'Lake Como' },
  { id: '2', url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800', type: 'Wedding', classification: 'Celebratory', subType: 'Modern', date: 'May 2024', location: 'Paris' },
  { id: '3', url: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=800', type: 'Birthday', classification: 'Celebratory', date: 'April 2024', location: 'London' },
  { id: '4', url: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=800', type: 'Reunion', classification: 'Celebratory', date: 'March 2024', location: 'The Cotswolds' },
  { id: '5', url: 'https://images.unsplash.com/photo-1512104416621-105313901c80?auto=format&fit=crop&q=80&w=800', type: 'Baptism', classification: 'Religious', date: 'Feb 2024', location: 'Rome' },
  { id: '6', url: 'https://images.unsplash.com/photo-1473177104440-ffe2f376098c?auto=format&fit=crop&q=80&w=800', type: 'Memorial', classification: 'Memorial', date: 'Jan 2024', location: 'New York' },
  { id: '7', url: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80&w=800', type: 'Wedding', classification: 'Celebratory', subType: 'Religious', date: 'Dec 2023', location: 'Santorini' },
  { id: '8', url: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=800', type: 'Anniversary', classification: 'Celebratory', date: 'Nov 2023', location: 'Swiss Alps' },
];

export const SERVICES: ServiceDetail[] = [
  {
    id: 'Wedding',
    classification: 'Celebratory',
    title: 'Luxury Weddings',
    description: 'Transforming your love story into an ethereal celebration. Our weddings bridge cultural heritage with modern elegance.',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1200',
    features: ['Venue Sourcing', 'Full Floral Design', 'Culinary Curation', 'Timeline Management'],
    subFilters: ['All', 'Cultural & Regional', 'Religious', 'Modern/Thematic', 'Pocket Luxe'],
    themeColor: 'dark',
    overlayPattern: 'https://www.transparenttextures.com/patterns/floral-paper.png'
  },
  {
    id: 'Birthday',
    classification: 'Celebratory',
    title: 'Signature Birthdays',
    description: 'Celebrating life milestones with immersive environments and curated experiences.',
    image: 'https://images.unsplash.com/photo-1530103043960-ef38714abb15?auto=format&fit=crop&q=80&w=1200',
    features: ['Themed Decor', 'Mixology Stations', 'Immersive Entertainment'],
    themeColor: 'light',
    overlayPattern: 'https://www.transparenttextures.com/patterns/pinstriped-suit.png'
  },
  {
    id: 'Baptism',
    classification: 'Religious',
    title: 'Sacred Baptisms',
    description: 'A serene atmosphere for your child\'s first major milestone, emphasizing grace and family connection.',
    image: 'https://images.unsplash.com/photo-1512104416621-105313901c80?auto=format&fit=crop&q=80&w=1200',
    features: ['Ceremony Coordination', 'Intimate Reception', 'Floral Purity'],
    themeColor: 'light',
    overlayPattern: 'https://www.transparenttextures.com/patterns/cloud-noise.png'
  },
  {
    id: 'Memorial',
    classification: 'Memorial',
    title: 'Life Celebrations',
    description: 'A dignified, respectful space to honor a legacy with grace, peace, and professional audio-visual support.',
    image: 'https://images.unsplash.com/photo-1473177104440-ffe2f376098c?auto=format&fit=crop&q=80&w=1200',
    features: ['Eulogy AV Setups', 'Dignified Floral Tributes', 'Host Concierge', 'Legacy Montages'],
    themeColor: 'dignified',
    overlayPattern: 'https://www.transparenttextures.com/patterns/black-paper.png'
  },
  {
    id: 'Custom',
    classification: 'Custom',
    title: 'Blank Canvas',
    description: 'For events that defy categorization. We bring non-traditional visions to life.',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1200',
    features: ['Bespoke Creative Brief', 'Experimental Decor', 'Global Scouting'],
    themeColor: 'dark',
    overlayPattern: 'https://www.transparenttextures.com/patterns/cubes.png'
  },
  {
    id: 'Marketplace',
    classification: 'Add-ons',
    title: 'Service Marketplace',
    description: 'Bespoke modular enhancements for your existing events, from catering to soundscapes.',
    image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200',
    features: ['Catering', 'Light & Sound', 'Photo/Video', 'Decor'],
    themeColor: 'light',
    overlayPattern: 'https://www.transparenttextures.com/patterns/geometric-leaves.png'
  }
];

export const ADD_ONS: AddOn[] = [
  {
    id: 'cat-1',
    category: 'Catering',
    title: 'Michelin-Inspired Fine Dining',
    description: 'Multi-course tasting menus designed by celebrity chefs.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=600',
    specs: ['Wine Pairing', 'Silver Service', 'Seasonal Ingredients']
  },
  {
    id: 'ls-1',
    category: 'Light & Sound',
    title: 'Cinematic Atmosphere',
    description: 'Precision mapping and atmospheric lighting rigs.',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=600',
    specs: ['4K Projection', 'Surround Audio', 'Intelligent Lighting']
  },
  {
    id: 'pv-1',
    category: 'Photo/Video',
    title: 'The Showreel Studio',
    description: 'Cinematic captures using drone and 35mm film styles.',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=600',
    specs: ['Same-day Edits', 'Physical Albums', 'Drone Coverage']
  },
  {
    id: 'dec-1',
    category: 'Decor',
    title: 'Sculptural Florals',
    description: 'Avant-garde floral installations that double as art.',
    image: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=600',
    specs: ['Custom Furniture', 'Scent Design', 'Sustainable Sourcing']
  }
];

export const CLASSIFICATION_ICONS: Record<EventClassification, React.ReactNode> = {
  Celebratory: <Heart className="w-8 h-8" />,
  Religious: <Droplet className="w-8 h-8" />,
  Memorial: <Wind className="w-8 h-8" />,
  Custom: <PlusCircle className="w-8 h-8" />,
  'Add-ons': <ShoppingBag className="w-8 h-8" />
};

export const EVENT_ICONS: Record<EventType, React.ReactNode> = {
  Wedding: <Heart className="w-8 h-8" />,
  Anniversary: <Sparkles className="w-8 h-8" />,
  Birthday: <Cake className="w-8 h-8" />,
  Reunion: <Users className="w-8 h-8" />,
  Baptism: <Droplet className="w-8 h-8" />,
  Memorial: <Wind className="w-8 h-8" />,
  Custom: <PlusCircle className="w-8 h-8" />,
};
