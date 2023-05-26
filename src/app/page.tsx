import ImageBanner from "./components/ImageBanner"
import FeaturedProducts from "./components/FeaturedProducts"


export default function HomePage( { children }) {
  return  (
    <div>
    
      <ImageBanner/>
      
      <FeaturedProducts/>
      {children}
    </div>
  )



}

// Usar https://www.firstleaf.club/ de inspiración..
