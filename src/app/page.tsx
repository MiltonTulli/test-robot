// "use client";

import ImageBanner from "./components/ImageBanner";
import "./globals.css";
import FeaturedProducts from "./components/FeaturedProducts";
import StoreBanner from "./components/StoreBanner";
import Footer from "./components/Footer";


export default function HomePage({ children }) {
  return (
    <div>
      {<ImageBanner />}
      {/* @ts-expect-error Server Component */}
      
      
      <FeaturedProducts />
      <StoreBanner />
      <Footer/>
      
      {children}
    </div>
  );
}

// Usar https://www.firstleaf.club/ de inspiración..
