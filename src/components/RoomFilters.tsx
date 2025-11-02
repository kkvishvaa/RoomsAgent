import { Property } from "@/types/property";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface RoomFiltersProps {
  filters: {
    propertyType: string;
    priceRange: string;
    district: string;
    roomType: string;
  };
  setFilters: (filters: any) => void;
  properties: Property[];
}

export const RoomFilters = ({ filters, setFilters, properties }: RoomFiltersProps) => {
  const propertyTypes = ["All", ...Array.from(new Set(properties.map(p => p.property_type)))];
  const roomTypes = ["All", ...Array.from(new Set(properties.map(p => p.room_type)))];
  const districts = ["All", ...Array.from(new Set(properties.map(p => p.district.toString()))).sort((a, b) => 
    a === "All" ? -1 : b === "All" ? 1 : parseInt(a) - parseInt(b)
  )];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8 animate-fade-in">
      <Select
        value={filters.propertyType}
        onValueChange={(value) => setFilters({ ...filters, propertyType: value })}
      >
  <SelectTrigger className="border-blue-200 focus:ring-blue-400 focus:border-blue-400 text-black bg-blue-100 placeholder:text-black">
          <SelectValue placeholder="Property Type" />
        </SelectTrigger>
        <SelectContent>
          {propertyTypes.map((type) => (
            <SelectItem key={type} value={type}>
              {type}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select
        value={filters.roomType}
        onValueChange={(value) => setFilters({ ...filters, roomType: value })}
      >
  <SelectTrigger className="border-blue-200 focus:ring-blue-400 focus:border-blue-400 text-black bg-blue-100 placeholder:text-black">
          <SelectValue placeholder="Room Type" />
        </SelectTrigger>
        <SelectContent>
          {roomTypes.map((type) => (
            <SelectItem key={type} value={type}>
              {type}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select
        value={filters.priceRange}
        onValueChange={(value) => setFilters({ ...filters, priceRange: value })}
      >
  <SelectTrigger className="border-blue-200 focus:ring-blue-400 focus:border-blue-400 text-black bg-blue-100 placeholder:text-black">
          <SelectValue placeholder="Price Range" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="All">All Prices</SelectItem>
          <SelectItem value="0-1000">Under $1,000</SelectItem>
          <SelectItem value="1000-2000">$1,000 - $2,000</SelectItem>
          <SelectItem value="2000-3000">$2,000 - $3,000</SelectItem>
          <SelectItem value="3000-99999">$3,000+</SelectItem>
        </SelectContent>
      </Select>

      <Select
        value={filters.district}
        onValueChange={(value) => setFilters({ ...filters, district: value })}
      >
  <SelectTrigger className="border-blue-200 focus:ring-blue-400 focus:border-blue-400 text-black bg-blue-100 placeholder:text-black">
          <SelectValue placeholder="District" />
        </SelectTrigger>
        <SelectContent>
          {districts.map((district) => (
            <SelectItem key={district} value={district}>
              {district === "All" ? "All Districts" : `District ${district}`}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
