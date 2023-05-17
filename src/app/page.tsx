import Image from "next/image";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="z-10 w-full  items-center justify-between font-mono text-sm ">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Test
        </p>
      </div>

      <div className="mb-12 grid text-center  ">
        <h2 className={`mb-3 text-2xl font-semibold`}>Consignas</h2>
        <p className={`m-0 max-w-[60ch] text-sm opacity-50`}>
          El siguiente test va a ser similar al anterior. Va a ser una app de
          productos con un carrito de compras. Los pasos para completar el test
          son los siguientes:
        </p>
      </div>
      <div className="mb-12 grid text-center  ">
        <ul>
          <li className="mb-3 font-bold ">Páginas:</li>
          <li className="mb-3 ">/home</li>
          <li className="mb-3 ">/store</li>
          <li className="mb-3 ">/product/id</li>
          <li className="mb-3 ">/contact</li>
          <li className="mb-3 ">/about</li>
        </ul>
      </div>
      <div className="mb-12 grid text-center  ">
        <h2 className={`mb-3 text-2xl font-semibold`}>Home</h2>
        <p className={`m-0 max-w-[60ch] text-sm opacity-50`}>
          Utilizar `src/app/page.txt` para crear una landing de nuestra nueva
          marca de productos electrónicos llamada &quot;TechZone&quot;
        </p>
        <p className={`m-0 max-w-[60ch] text-sm opacity-50`}>Secciones:</p>
        <p className={`m-0 max-w-[60ch] text-sm opacity-50`}>
          1. Nav Bar: - Logo de la empresa ( o texto ) - Carrito que despliegue
          un modal/drawer en caso de tener productos en el carro
        </p>
        <p className={`m-0 max-w-[60ch] text-sm opacity-50`}>
          2. Banner: horizontal con dos columnas. Una para imagen
          (public/bannner.jpg) y otra para texto.
        </p>
        <p className={`m-0 max-w-[60ch] text-sm opacity-50`}>
          3. Featured products: Mostrar una fila de 4 o 2 productos (dependiendo
          el tamaño de la pantalla) de los productos destacados. pueden ser solo
          2 productos random.
        </p>
        <p className={`m-0 max-w-[60ch] text-sm opacity-50`}>
          4. Otro banner de un color llamativo que tenga un texto y un boton
          hacia la página del store
        </p>
        <p className={`m-0 max-w-[60ch] text-sm opacity-50`}>
          5. Footer con links a página de /about, /contact, /store e información
          de la empresa (telefono, mail, dirección) y algún texto random tipo
          slogan
        </p>
      </div>
      <div className="mb-12 grid text-center  ">
        <h2 className={`mb-3 text-2xl font-semibold`}>Store</h2>
        <p className={`m-0 max-w-[60ch] text-sm opacity-50`}>
          La página de productos deberá tener:
        </p>
        <ul>
          <li className="m-0 max-w-[60ch] text-sm opacity-50">
            1. Una sección de filtrado. Debería poder filtrar por precio
          </li>
          <li className="m-0 max-w-[60ch] text-sm opacity-50">
            2. Una sección de buscador, donde busque por nombre del producto
          </li>
          <li className="m-0 max-w-[60ch] text-sm opacity-50">
            3. Listado de los productos encontrados. Si no hay filtro retorno
            todos productos disponibles. Aplicar paginación
          </li>
          <li className="m-0 max-w-[60ch] text-sm opacity-50">
            4. Cada producto deberá mostrarse en su propia productCard (title,
            image, price)y deberá tener un link para añadirlo al carro o para
            abrir su página de producto correspondiente (/product/[id])
          </li>
        </ul>
      </div>
      <div className="mb-12 grid text-center  ">
        <h2 className={`mb-3 text-2xl font-semibold`}>Product page</h2>
        <p className={`m-0 max-w-[60ch] text-sm opacity-50`}>
          Página individual de cada producto (/product/[id]). Deberá mostrar
          toda la información disponible del producto y un link para añadir al
          carro. El carro de momento solo será un context que puede ir agregando
          o removiendo elementos. Crearlo y conectarlo a cada componente que se
          vincule al carro
        </p>
      </div>
    </main>
  );
}

// Usar https://www.firstleaf.club/ de inspiración..
