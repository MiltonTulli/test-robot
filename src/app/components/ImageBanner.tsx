
import Image from 'next/image';



export default function ImageBanner() {
  return (
    <div className="bg-gray-800">
      <div className="mx-auto max-w-2xl flex flex-col justify-center items-center gap-4 px-2 py-16 sm:px-4 sm:py-24 lg:max-w-7xl lg:flex-row lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-6xl text-white">Welcome to Tech Zone!</h2>
          <p className="mt-4 text-gray-500">
          We're your go-to home webstore for the latest and greatest tech products. 
          Discover innovation at its finest with our carefully curated selection of cutting-edge gadgets and accessories. 
          From smartphones to smart home devices, we've got what you need to elevate your digital lifestyle. 
          Shop now and experience the future with TechZone!
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src="/banner.jpeg"
            width={900}
            height={900}
            alt="Image"
            className="rounded-lg bg-gray-100"
          />
        </div>
      </div>
    </div>
  )
}


/*
function ImageBanner() {
  return (
    <Grid container spacing={2}>
        
        <Box sx={{ display: 'flex', alignItems: 'center', height: '100%',margin: '80px' }}>
        <Image
          src="/banner.jpeg"
          width={500}
          height={500}
          alt="Image"
        />
        </Box>
      <Grid item xs={6}>
        <Box sx={{ display: 'flex', alignItems: 'center', height: '100%', margin: '40px' }}>
          <Typography variant="h5">
            Welcome to TechZone, your ultimate tech destination! We're your go-to home webstore for the latest and greatest tech products. Discover innovation at its finest with our carefully curated selection of cutting-edge gadgets and accessories. From smartphones to smart home devices, we've got what you need to elevate your digital lifestyle. Shop now and experience the future with TechZone!
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}

export default ImageBanner; 


*/