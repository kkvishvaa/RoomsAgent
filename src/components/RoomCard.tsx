import { Property } from "@/types/property";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Home, Maximize2, Calendar, Video, Wifi, Dumbbell, Waves, Car } from "lucide-react";

interface RoomCardProps {
  property: Property;
  index: number;
}

export const RoomCard = ({ property, index }: RoomCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-SG', {
      style: 'currency',
      currency: 'SGD',
      minimumFractionDigits: 0,
    }).format(price);
  };

  // Get room image based on index
  const getRoomImage = (index: number) => {
    const images = [
      '/images/assets/room1.png',
      '/images/assets/room2.webp', 
      '/images/assets/room3.webp',
      '/images/assets/room4.webp',
      '/images/assets/room5.jpg',
      '/images/assets/room6.jpg',
      '/images/assets/room7.png',
      '/images/assets/room8.jpg',
      '/images/assets/room9.jpg',
      '/images/assets/room10.jpg',
      '/images/assets/room11.jpg',
      '/images/assets/room12.jpg',
      '/images/assets/room13.jpg',
      '/images/assets/room14.jpg',
      '/images/assets/room15.jpg',
      '/images/assets/room16.jpg',
      '/images/assets/room17.jpg',
      '/images/assets/room18.jpg',
      '/images/assets/room19.jpg',
      '/images/assets/room20.jpeg',
    ];
    return images[index % images.length];
  };

  return (
    <Card 
      className="group overflow-hidden border-0 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-fade-in bg-gradient-to-br from-slate-50 via-white to-slate-100 backdrop-blur-sm rounded-3xl sm:rounded-2xl mx-2 sm:mx-0"
      style={{ 
        animationDelay: `${index * 0.1}s`,
        boxShadow: '0 0 0 1px rgba(148, 163, 184, 0.1), 0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      }}
    >
  <div className="relative h-56 overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 rounded-t-3xl sm:rounded-t-2xl">
        {/* Cool animated background pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDIwIDAgTCAwIDAgMCAyMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDU5LCAxMzAsIDI0NiwgMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPjwvc3ZnPg==')] opacity-20"></div>
        
        {/* Room illustration */}
        <img 
          src={getRoomImage(index)} 
          alt={`${property.property_type} room`}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
        
        <div className="absolute top-4 left-4 flex gap-2 z-10">
          <Badge className="bg-white/90 text-blue-900 border-0 shadow-lg backdrop-blur-sm font-medium">
            {property.property_type}
          </Badge>
          <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0 shadow-lg font-medium">
            {property.room_type}
          </Badge>
        </div>
        {property.virtual_viewing_available === "Yes" && (
          <div className="absolute top-4 right-4 z-10">
            <Badge className="bg-gradient-to-r from-green-400 to-blue-500 text-white border-0 shadow-lg gap-1 animate-pulse">
              <Video className="h-3 w-3" />
              Virtual Tour
            </Badge>
          </div>
        )}
        
        {/* Cool floating elements */}
        <div className="absolute bottom-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 animate-pulse"></div>
        </div>
        <div className="absolute top-1/2 left-4 opacity-10 group-hover:opacity-30 transition-opacity">
          <div className="w-4 h-4 rounded-full bg-gradient-to-r from-pink-400 to-red-500 animate-bounce"></div>
        </div>
      </div>

  <CardContent className="p-6 bg-gradient-to-br from-white to-slate-50 rounded-b-3xl sm:rounded-b-2xl">
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2 line-clamp-1 group-hover:text-blue-600 text-slate-800 transition-colors duration-300">
            {property.property_name}
          </h3>
          <div className="flex items-center text-slate-600 text-sm gap-1">
            <MapPin className="h-4 w-4 text-blue-500" />
            <span className="line-clamp-1">{property.property_address}</span>
          </div>
        </div>

        <p className="text-sm text-slate-600 mb-4 line-clamp-2 min-h-[40px] leading-relaxed">
          {property.description}
        </p>

        <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
          <div className="flex items-center gap-2 p-2 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100">
            <Maximize2 className="h-4 w-4 text-blue-600" />
            <span className="text-slate-700 font-medium">{property.room_size_sqft} sqft</span>
          </div>
          <div className="flex items-center gap-2 p-2 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-100">
            <MapPin className="h-4 w-4 text-purple-600" />
            <span className="text-slate-700 font-medium">District {property.district}</span>
          </div>
          <div className="flex items-center gap-2 p-2 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 border border-green-100 col-span-2">
            <Calendar className="h-4 w-4 text-green-600" />
            <span className="text-slate-700 font-medium">Available from {new Date(property.available_from).toLocaleDateString('en-GB')}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {property.wifi === "Available" && (
            <div className="flex items-center gap-1 text-xs font-medium text-white bg-gradient-to-r from-blue-500 to-blue-600 px-3 py-1.5 rounded-full shadow-sm hover:shadow-md transition-shadow">
              <Wifi className="h-3 w-3" />
              WiFi
            </div>
          )}
          {property.gym === "Available" && (
            <div className="flex items-center gap-1 text-xs font-medium text-white bg-gradient-to-r from-red-500 to-red-600 px-3 py-1.5 rounded-full shadow-sm hover:shadow-md transition-shadow">
              <Dumbbell className="h-3 w-3" />
              Gym
            </div>
          )}
          {property.swimming_pool === "Available" && (
            <div className="flex items-center gap-1 text-xs font-medium text-white bg-gradient-to-r from-cyan-500 to-cyan-600 px-3 py-1.5 rounded-full shadow-sm hover:shadow-md transition-shadow">
              <Waves className="h-3 w-3" />
              Pool
            </div>
          )}
          {property.parking_facility_available === "Available" && (
            <div className="flex items-center gap-1 text-xs font-medium text-white bg-gradient-to-r from-orange-500 to-orange-600 px-3 py-1.5 rounded-full shadow-sm hover:shadow-md transition-shadow">
              <Car className="h-3 w-3" />
              Parking
            </div>
          )}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-slate-200">
          <div className="space-y-1">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {formatPrice(property.monthly_rent)}
            </div>
            <div className="text-xs text-slate-500 font-medium">per month</div>
          </div>
          <Button className="group/btn bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            View Details
            <span className="ml-2 transition-transform group-hover/btn:translate-x-1 duration-300">→</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
