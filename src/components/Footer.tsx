export const Footer = () => {
  return (
  <footer className="bg-gradient-to-br from-blue-100 via-red-100 to-background border-t border-blue-200 py-8 sm:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div>
            <div className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4">
              CoLive SG
            </div>
            <p className="text-black text-sm sm:text-base">
              Premium co-living spaces in Singapore's most vibrant neighborhoods.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-black text-base sm:text-lg">Quick Links</h4>
            <ul className="space-y-2 text-black text-sm sm:text-base">
              <li><a href="#rooms" className="hover:text-primary transition-colors">Rooms</a></li>
              <li><a href="#amenities" className="hover:text-primary transition-colors">Amenities</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-black text-base sm:text-lg">Contact</h4>
            <ul className="space-y-2 text-black text-sm sm:text-base">
              <li>support@colivesg.com</li>
              <li>+65 1234 5678</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-black text-base sm:text-lg">Location</h4>
            <p className="text-black text-sm sm:text-base">
              Multiple locations across<br />
              Singapore
            </p>
          </div>
        </div>
        
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-blue-200 text-center text-black text-xs sm:text-base">
          <p>&copy; 2024 CoLive SG. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
