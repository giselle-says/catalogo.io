import React from 'react';
import { Box, Typography } from '@mui/material';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from './navbar.module.css';

import image1 from './images/computadora.webp';
import image2 from './images/juguetes.jpeg';
import image3 from './images/videos.webp';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, 
  };

  return (
    <Box className={styles['slider']}>
      <Typography variant="h2" component="h1" gutterBottom>
        
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'flex-start', width: '100%', maxWidth: 1200 }}>
      <Box sx={{ width: '200%', maxWidth: 800 }}>
        <Slider {...settings}>
          <Box component="img" src={image1} alt="Imagen 1" sx={{ width: '100%' }} />
          <Box component="img" src={image2} alt="Imagen 2" sx={{ width: '100%' }} />
          <Box component="img" src={image3} alt="Imagen 3" sx={{ width: '100%' }} />
        </Slider>
      </Box>
      <Box sx={{ width: '30%', padding: 2, textAlign: 'left' }}>
          <Typography variant="h2">Articulo</Typography>
          <Typography variant="h5">Descripcion</Typography>
          <Typography variant="subtitle1">Precio</Typography>
        </Box>
    </Box>
    </Box>
  );
}

export default Carousel;
