import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
  <section className="relative min-h-[80vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 pt-24 sm:pt-32">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDU5LCAxMzAsIDI0NiwgMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPjwvc3ZnPg==')] opacity-30"></div>
      
      {/* Floating geometric shapes - positioned to avoid overlapping */}
      <div className="absolute top-10 left-5 w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-10 animate-bounce"></div>
      <div className="absolute top-20 right-5 w-10 h-10 bg-gradient-to-r from-pink-400 to-red-500 rotate-45 opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 left-5 w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-10 animate-ping"></div>
      <div className="absolute bottom-10 right-5 w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rotate-12 opacity-10 animate-bounce"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-3xl sm:text-5xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
            Smart Living for the Modern Professional
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            Live the co-living lifestyle redefined — contemporary spaces, dynamic community, and seamless living in Singapore.
          </p>
          <Button 
            size="lg" 
            className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 px-4 sm:px-6 py-2 sm:py-3 text-base sm:text-lg" 
            onClick={() => document.getElementById('rooms')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Rooms
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 duration-300" />
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-10 sm:mt-16 max-w-4xl mx-auto">
          <div className="text-center p-4 sm:p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-blue-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group">
            <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:scale-105 transition-transform">250+</div>
            <div className="text-slate-700 font-medium text-xs sm:text-sm">Premium Rooms</div>
          </div>
          <div className="text-center p-4 sm:p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-purple-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group">
            <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2 group-hover:scale-105 transition-transform">24/7</div>
            <div className="text-slate-700 font-medium text-xs sm:text-sm">Support</div>
          </div>
          <div className="text-center p-4 sm:p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-pink-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group">
            <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent mb-2 group-hover:scale-105 transition-transform">5★</div>
            <div className="text-slate-700 font-medium text-xs sm:text-sm">Rated Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};
