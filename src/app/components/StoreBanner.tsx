import Image from "next/image"
import { getProducts } from "@/lib/prisma";
import Link from "next/link";


const StoreBanner = async () => {
    const products = await getProducts({ take: 2 });

    return (
      <div className="relative overflow-hidden bg-purple-500">
        <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                The best tech hardware is here for you.
              </h1>
              <p className="mt-4 text-xl text-gray-900">
                This year, our tech products will shelter you from the harsh elements of a world that doesn't care
                if you live or die.
              </p>
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}

                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">

                        

                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        {products.map((product) => (
                            
                          <Image
                            key={product.id}
                            src={product.image}
                            alt=""
                        //    className="h-full w-full object-cover object-center"
                            width={100}
                            height={100}
                          /> 
                        ))} 
                        </div>
                        
                        
                        
                      </div>
                        
                    </div>
                  </div>
                </div>
  
                <Link
                  href={`/products`}
                  className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
                >
                  Shop Collection
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default StoreBanner;