
export type EventClassification = 'Celebratory' | 'Religious' | 'Memorial' | 'Custom' | 'Add-ons';

export type EventType = 'Wedding' | 'Anniversary' | 'Birthday' | 'Reunion' | 'Baptism' | 'Memorial' | 'Custom';

export interface GalleryItem {
  id: string;
  url: string;
  type: EventType;
  classification: EventClassification;
  subType?: string;
  date: string;
  location: string;
}

export interface BookingFormData {
  classification: EventClassification;
  eventType: EventType | null;
  guestCount: string;
  date: string;
  venueStatus?: 'Booked' | 'Searching';
  specificStyle?: string;
  venueName?: string;
  ritualDate?: string;
  receptionNeeded?: boolean;
  urgency?: 'Immediate' | 'Planning';
  tributeType?: 'Traditional' | 'Celebration of Life';
  avRequirements?: string;
  specialRequests: string;
  addons: string[];
}

export interface ServiceDetail {
  id: EventType | 'Marketplace';
  classification: EventClassification;
  title: string;
  description: string;
  image: string;
  features: string[];
  subFilters?: string[];
  themeColor?: 'light' | 'dark' | 'dignified';
  overlayPattern?: string;
}

// Fixed missing AddOn interface to resolve errors in constants.tsx, AddOnMarketplace.tsx and VisionBoard.tsx
export interface AddOn {
  id: string;
  category: 'Catering' | 'Light & Sound' | 'Photo/Video' | 'Decor';
  title: string;
  description: string;
  image: string;
  specs: string[];
}
