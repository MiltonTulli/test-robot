// "use client";

import ImageBanner from "./components/ImageBanner";
import "./globals.css";
import FeaturedProducts from "./components/FeaturedProducts";


export default function HomePage({ children }) {
  return (
    <div>
      {<ImageBanner />}
      {/* @ts-expect-error Server Component */}
      
      
      <FeaturedProducts />
      
      {children}
    </div>
  );
}

// Usar https://www.firstleaf.club/ de inspiración..
