import { Grid, Typography, Box } from '@mui/material';
import Image from 'next/image';

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