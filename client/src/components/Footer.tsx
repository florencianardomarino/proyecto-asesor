import React, { FC } from 'react'
import '../styles/main.scss'
import Facebook from '../assets/images/facebook_logo.webp'
import Instagram from '../assets/images/instagram_logo.png'

const Footer: FC = (): JSX.Element => {
  return (
    <footer className="footer">
        <div className="general_container footer_sections_container">
            <div className='footer_copyright'>
                 <p> Macs © 2022. Todos Los Derechos Reservados.</p>  
            </div>
            <div className='footer_site_map'>
            <h3 className='footer_site_map_title'>Mapa del sitio</h3>
            <ul className='footer_site_map_ul'>
                <li className='footer_site_map_item'><a>nosotros</a></li>
                <li className='footer_site_map_item'><a>planes</a></li>
                <li className='footer_site_map_item'><a>cobertura</a></li>
                <li className='footer_site_map_item'><a>contacto</a></li>
            </ul>
            </div>
            <div className='footer_social'>
                <div className='footer_social_icons'>
                   <a href="https://www.facebook.com/CuidaTS/" target="_blank" rel="noopener noreferrer"><img className="footer_social_icon" src={Facebook} alt="facebook logo" /></a> 
                   <a href="https://instagram.com/afiliateahominis?igshid=NjZiMGI4OTY=" target="_blank" rel="noopener noreferrer"><img className="footer_social_icon" src={Instagram} alt="instagram logo" /></a> 
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer