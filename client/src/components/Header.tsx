import React, { FC } from 'react';
import '../styles/main.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import { SampleNextArrow, SamplePrevArrow } from './CustomArrows';

const Header: FC = (): JSX.Element => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [{
      breakpoint: 720,
      settings: {
        arrows: false
      }
    }]
  };
  return (
    <div className='main_container'>
      <div className='main_banner'>
          <Slider {...settings}>
            <div>
              <img src="https://via.placeholder.com/1920x700" alt="" />
            </div>
            <div>
              <img src="https://via.placeholder.com/1920x700" alt="" />
            </div>     
          </Slider>
      </div>
      <div className='text_container'>
        <h1 className='banner_text'>Somos asesores de Hominis. Nos mueve tu bienestar, por eso trabajamos para brindarte un servicio cada vez mejor, a un precio que podés acceder.</h1>
        <button className='contact_button'>CONTACTAR UN ASESOR</button>
      </div>
    </div>
  )
}

export default Header