// fetch

import { getProducts } from "@/lib/prisma";
import CardComponent from "./CardComponent";


const FeaturedProducts = async () => {

  const products = await getProducts ( {take: 4} )

  console.log(products)
  return ( 
  
  <div> { products.map(product => (
    <CardComponent
    id={product.id}
    key={product.id}
    name={product.name}
    title={product.title}
    model={product.model}
    description={product.description}
    price={product.price}
    image={product.image}
    />
    ))}
  </div>  
);
}

export default FeaturedProducts;
  
  

