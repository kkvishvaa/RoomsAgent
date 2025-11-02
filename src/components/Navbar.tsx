import { Button } from "@/components/ui/button";

export const Navbar = () => {
  // Smooth scroll handler
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-blue-100 via-red-100 to-background backdrop-blur-lg border-b border-blue-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2 sm:gap-3">
            <img src="/logo.svg" alt="CoLive SG Logo" className="w-8 h-8 sm:w-10 sm:h-10" />
            <div className="text-lg sm:text-2xl font-bold text-black">
              CoLive SG
            </div>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-6 sm:gap-8">
            <a href="#rooms" className="text-black hover:text-blue-700 transition-colors text-sm sm:text-base" onClick={e => handleSmoothScroll(e, 'rooms')}>
              Rooms
            </a>
            <a href="#amenities" className="text-black hover:text-blue-700 transition-colors text-sm sm:text-base" onClick={e => handleSmoothScroll(e, 'amenities')}>
              Amenities
            </a>
            <a href="#about" className="text-black hover:text-blue-700 transition-colors text-sm sm:text-base" onClick={e => handleSmoothScroll(e, 'about')}>
              About
            </a>
            <Button variant="default" className="text-sm sm:text-base">Contact Us</Button>
          </div>

          {/* Mobile menu */}
          <div className="md:hidden flex items-center gap-2">
            <a href="#rooms" className="text-black hover:text-blue-700 transition-colors text-xs px-2 py-1 rounded" onClick={e => handleSmoothScroll(e, 'rooms')}>Rooms</a>
            <a href="#amenities" className="text-black hover:text-blue-700 transition-colors text-xs px-2 py-1 rounded" onClick={e => handleSmoothScroll(e, 'amenities')}>Amenities</a>
            <a href="#about" className="text-black hover:text-blue-700 transition-colors text-xs px-2 py-1 rounded" onClick={e => handleSmoothScroll(e, 'about')}>About</a>
          </div>
        </div>
      </div>
    </nav>
  );
};
