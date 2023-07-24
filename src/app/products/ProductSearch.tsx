"use client";
import { useState, useEffect } from "react";
import CardComponent from "@/app/components/CardComponent";

export default function ProductSearch() {
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean >(false)

  const onSearch = async () => {
    setIsLoading(true);
    const url = "http://localhost:3000/api/products";
    try {
      let response = await fetch(`${url}?q=${encodeURIComponent(search)}`);
      const data = await response.json();
      const filteredProducts = data.data;
      setFilteredProducts(filteredProducts);
    } catch (e) {
      console.log("error");
      setFilteredProducts([]);
    } finally {
      setIsLoading(false);
    }
  };

  // por que aca si se puede usar el async await?

  useEffect(() => {
    // TODO: cuando carga el componente que haga un fetch para obtener todos los productos.
    onSearch();
    
  }, []);

  return (
    <div className="search-bar">
      <input
        className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={onSearch}>Search Product</button>

      

      <div> {isLoading && <span>Loading...</span>} </div>

      {filteredProducts.length === 0 && <span>No products found</span>}

      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {filteredProducts.map((product) => (
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
    </div>
  );
}

// Actualizar valor de input -- ok
// Como pasar ese valor de búsqueda a la api -- ok
// Crer la api que obtenga esa búsqueda y devuelva valor --- ok
// Cómo

/**
 * TODO:
 * - Loading: mostrar cuando la api está cargando
 * - Error: Si hay un error de la api mostrar algún mensaje al usuario
 */
