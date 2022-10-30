import React, { FC } from 'react'
import '../styles/main.scss'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

const Header: FC = (): JSX.Element => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
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
        <h1 className='banner_text'>Nos mueve es tu bienestar, por eso trabajamos para bridarte un servicio cada vez mejor, a un precio que podés acceder</h1>
        <button className='contact_button'>CONTACTAR UN ASESOR</button>
      </div>
    </div>

  )
}

export default Header