import React, { FC } from 'react'
import '../styles/main.scss'
import Facebook from '../assets/images/facebook_logo.webp'
import Instagram from '../assets/images/instagram_logo.png'

const Footer: FC = (): JSX.Element => {
  return (
    <footer className="footer">
        <div className="general_container footer_sections_container">
            <div className='footer_copyright'>
                    Macs © 2022. Todos Los Derechos Reservados.
            </div>
            <div className='footer_site_map'>
            <h3 className='footer_site_map_title'>Mapa del sitio</h3>
            <ul className='footer_site_map_ul'>
                <li className='footer_site_map_item'><p>nosotros</p></li>
                <li className='footer_site_map_item'><p>planes</p></li>
                <li className='footer_site_map_item'><p>cobertura</p></li>
                <li className='footer_site_map_item'><p>contacto</p></li>
            </ul>
            </div>
            <div className='footer_social'>
                <div className='footer_social_icons'>
                    <img className="footer_social_icon" src={Facebook} alt="facebook logo" />
                    <img className="footer_social_icon" src={Instagram} alt="instagram logo" />
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer