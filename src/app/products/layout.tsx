import ProductSearch from "./ProductSearch";

export default function ProductsLayout({ children }) {
  return (
    <>
      <body>
        <ProductSearch/> 
        {children}
        
      </body>
    </>
  );
}
