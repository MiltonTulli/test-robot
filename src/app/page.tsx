"use client"

import ImageBanner from "./components/ImageBanner"
import HorizontalContainer from "./components/ImageBanner"

export default function HomePage( { children }) {
  return  (
    <div>
    
      <ImageBanner/>
      {children}
    </div>
  )



}

// Usar https://www.firstleaf.club/ de inspiración..
