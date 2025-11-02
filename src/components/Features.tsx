import { Wifi, Shield, Coffee, Sparkles } from "lucide-react";

const features = [
  {
    icon: Wifi,
    title: "High-Speed WiFi",
    description: "Stay connected with lightning-fast internet throughout the property"
  },
  {
    icon: Shield,
    title: "Secure & Safe",
    description: "24/7 security and smart access control for your peace of mind"
  },
  {
    icon: Coffee,
    title: "Common Spaces",
    description: "Beautifully designed lounges, kitchens, and co-working areas"
  },
  {
    icon: Sparkles,
    title: "Weekly Cleaning",
    description: "Professional housekeeping services included in your stay"
  }
];

export const Features = () => {
  return (
  <section id="amenities" className="py-14 sm:py-20 bg-gradient-to-br from-blue-100 via-red-100 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-black">
            Everything You Need
          </h2>
          <p className="text-base sm:text-xl text-black max-w-2xl mx-auto">
            Designed for modern living with premium amenities and thoughtful touches
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="p-4 sm:p-6 rounded-2xl bg-card border border-blue-200 hover:shadow-xl transition-all hover:-translate-y-1 hover:bg-blue-100"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-900 flex items-center justify-center mb-3 sm:mb-4">
                  <Icon className="h-6 w-6 text-blue-700" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-black">{feature.title}</h3>
                <p className="text-black text-sm sm:text-base">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
