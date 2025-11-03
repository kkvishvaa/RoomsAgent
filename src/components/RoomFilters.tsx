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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8 animate-fade-in px-2 sm:px-4">
      <Select value={filters.propertyType} onValueChange={value => setFilters({ ...filters, propertyType: value })}>
  <SelectTrigger className="border-blue-700 focus:ring-blue-700 focus:border-blue-700 text-black bg-white placeholder:text-black font-semibold py-3 px-4 rounded-2xl shadow-md text-base">
          <SelectValue placeholder="Property Type" />
        </SelectTrigger>
  <SelectContent className="bg-white border border-blue-700 shadow-lg rounded-2xl">
          {propertyTypes.map(type => (
            <SelectItem key={type} value={type} className="bg-white text-base font-medium rounded-xl">
              {type}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select value={filters.roomType} onValueChange={value => setFilters({ ...filters, roomType: value })}>
        <SelectTrigger className="border-blue-700 focus:ring-blue-700 focus:border-blue-700 text-black bg-white placeholder:text-black font-semibold py-3 px-4 rounded-lg shadow-sm text-base">
          <SelectValue placeholder="Room Type" />
        </SelectTrigger>
        <SelectContent className="bg-white border border-blue-700 shadow-lg">
          {roomTypes.map(type => (
            <SelectItem key={type} value={type} className="bg-white text-base font-medium rounded-xl">
              {type}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select value={filters.priceRange} onValueChange={value => setFilters({ ...filters, priceRange: value })}>
        <SelectTrigger className="border-blue-700 focus:ring-blue-700 focus:border-blue-700 text-black bg-white placeholder:text-black font-semibold py-3 px-4 rounded-lg shadow-sm text-base">
          <SelectValue placeholder="Price Range" />
        </SelectTrigger>
        <SelectContent className="bg-white border border-blue-700 shadow-lg">
          <SelectItem value="All" className="bg-white text-base font-medium rounded-xl">All Prices</SelectItem>
          <SelectItem value="0-1000" className="bg-white text-base font-medium rounded-xl">Under $1,000</SelectItem>
          <SelectItem value="1000-2000" className="bg-white text-base font-medium rounded-xl">$1,000 - $2,000</SelectItem>
          <SelectItem value="2000-3000" className="bg-white text-base font-medium rounded-xl">$2,000 - $3,000</SelectItem>
          <SelectItem value="3000-99999" className="bg-white text-base font-medium rounded-xl">$3,000+</SelectItem>
        </SelectContent>
      </Select>

      <Select value={filters.district} onValueChange={value => setFilters({ ...filters, district: value })}>
        <SelectTrigger className="border-blue-700 focus:ring-blue-700 focus:border-blue-700 text-black bg-white placeholder:text-black font-semibold py-3 px-4 rounded-lg shadow-sm text-base">
          <SelectValue placeholder="District" />
        </SelectTrigger>
        <SelectContent className="bg-white border border-blue-700 shadow-lg">
          {districts.map(district => (
            <SelectItem key={district} value={district} className="bg-white text-base font-medium rounded-xl">
              {district === "All" ? "All Districts" : `District ${district}`}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
