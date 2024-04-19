import React from 'react'
import Slider from 'react-slick'
import topMeals from './TopMeal'
import CarouselItem from './CarouselItem'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import './MultiItemCarousel.css'



export const MultiItemCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:true,
     nextArrow: <ArrowForwardIosIcon sx={{color:"white"}}/>,
     prevArrow: <ArrowBackIosIcon sx={{color:"white"}}/>,


    
  };

  return (
    <div>
      <Slider {...settings}>
        {topMeals.map((meal) => (
          <CarouselItem image={meal.image} tittle={meal.tittle} />
        ))}
      </Slider>
    </div>
  );
};