import { useState, useEffect } from "react";
import Papa from "papaparse";
import { Property } from "@/types/property";
import { RoomCard } from "./RoomCard";
import { RoomFilters } from "./RoomFilters";
import { Loader2 } from "lucide-react";

export const RoomsShowcase = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [filteredProperties, setFilteredProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    propertyType: "All",
    priceRange: "All",
    district: "All",
    roomType: "All"
  });

  useEffect(() => {
    fetch("/data/properties.csv")
      .then((response) => response.text())
      .then((csv) => {
        Papa.parse(csv, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            const parsed = results.data.map((row: any) => ({
              ...row,
              room_size_sqft: parseInt(row.room_size_sqft) || 0,
              monthly_rent: parseInt(row.monthly_rent) || 0,
              security_deposit: parseInt(row.security_deposit) || 0,
              district: parseInt(row.district) || 0,
              total_rooms: parseInt(row.total_rooms) || 0,
              total_washrooms: parseInt(row.total_washrooms) || 0,
              min_lease_months: parseInt(row.min_lease_months) || 0,
            }));
            setProperties(parsed);
            setFilteredProperties(parsed);
            setLoading(false);
          },
        });
      });
  }, []);

  useEffect(() => {
    let filtered = [...properties];

    if (filters.propertyType !== "All") {
      filtered = filtered.filter(p => p.property_type === filters.propertyType);
    }

    if (filters.roomType !== "All") {
      filtered = filtered.filter(p => p.room_type === filters.roomType);
    }

    if (filters.district !== "All") {
      filtered = filtered.filter(p => p.district.toString() === filters.district);
    }

    if (filters.priceRange !== "All") {
      const [min, max] = filters.priceRange.split("-").map(Number);
      filtered = filtered.filter(p => {
        if (max) {
          return p.monthly_rent >= min && p.monthly_rent <= max;
        }
        return p.monthly_rent >= min;
      });
    }

    setFilteredProperties(filtered);
  }, [filters, properties]);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
  <Loader2 className="h-8 w-8 animate-spin text-blue-400" />
      </div>
    );
  }

  return (
    <section id="rooms" className="py-12 sm:py-20 bg-gradient-to-br from-blue-100 via-red-100 to-background">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="text-center mb-8 sm:mb-12 animate-fade-in">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-black">
            Find Your Perfect Room
          </h2>
          <p className="text-base sm:text-xl text-black max-w-2xl mx-auto">
            Browse through our curated collection of premium living spaces across Singapore
          </p>
        </div>

        <RoomFilters filters={filters} setFilters={setFilters} properties={properties} />

        <div className="mt-4 sm:mt-8 mb-4 sm:mb-6 text-black text-center text-sm sm:text-base">
          Showing {filteredProperties.length} of {properties.length} properties
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredProperties.map((property, index) => (
            <RoomCard key={index} property={property} index={index} />
          ))}
        </div>

        {filteredProperties.length === 0 && (
          <div className="text-center py-10 sm:py-20">
            <p className="text-base sm:text-xl text-black">No properties match your filters. Try adjusting your search criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
};
