# CoLive SG – Premium Co-Living in Singapore

Welcome to CoLive SG, a modern co-living platform for professionals seeking premium living spaces in Singapore. This project features a beautiful, mobile-responsive website built with React, TypeScript, Vite, and Tailwind CSS.

## Features
- 🏠 Browse 250+ premium rooms with detailed amenities
- 🔍 Advanced room filtering by type, price, district, and more
- 💬 Embedded AI ChatBot for instant support
- 🌈 Modern, animated UI with custom SVG illustrations
- 📱 Fully mobile responsive design
- 🛏️ Custom branding and logo integration
- ⚡ Fast performance with Vite

## Tech Stack
- **React** + **TypeScript**
- **Vite** (build tool)
- **Tailwind CSS** (utility-first styling)
- **shadcn/ui** (UI components)
- **Lucide React Icons**
- **n8n Chat** (embedded chatbot)
- **CSV data** for room listings

## Getting Started
1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start the development server:**
   ```bash
   npm run dev
   ```
3. **Open your browser:**
   Visit [http://localhost:5173](http://localhost:5173)

## Project Structure
```
premium-co-living-sg/
├── public/
│   ├── logo.svg
│   ├── data/
│   │   └── properties.csv
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── RoomsShowcase.tsx
│   │   ├── RoomCard.tsx
│   │   ├── RoomFilters.tsx
│   │   ├── ChatBot.tsx
│   │   └── ...
│   ├── pages/
│   │   ├── Index.tsx
│   │   └── NotFound.tsx
│   ├── assets/
│   ├── api/
│   ├── types/
│   └── index.css
├── package.json
├── vite.config.ts
└── README.md
```

## Customization
- **Branding:** Update `public/logo.svg` and colors in `src/index.css`.
- **Room Data:** Edit `public/data/properties.csv` for your listings.
- **ChatBot:** Configure webhook in `src/components/ChatBot.tsx`.

## License
MIT

---

Made with ❤️ for the Singapore co-living community.
