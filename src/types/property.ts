export interface Property {
  property_address: string;
  property_type: string;
  furnishing_status: string;
  room_type: string;
  gender_preference: string;
  nationality_preferences: string;
  room_size_sqft: number;
  monthly_rent: number;
  security_deposit: number;
  nearest_mrt: string;
  property_name: string;
  district: number;
  description: string;
  available_from: string;
  currency_type: string;
  total_rooms: number;
  total_washrooms: number;
  aircon: string;
  wifi: string;
  gym: string;
  swimming_pool: string;
  parking_facility_available: string;
  video_tour_url?: string;
  utilities_included: string;
  min_lease_months: number;
  virtual_viewing_available: string;
}
