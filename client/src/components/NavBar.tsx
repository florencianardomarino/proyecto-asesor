import React, { FC } from 'react'
import '../styles/main.scss'
import Logo from '../assets/images/main_logo.png'

const NavBar: FC = (): JSX.Element => {
  return (
    < >
    <nav className="navBar">
    <div className='general_container navBar_container'>
    <div className='navBar_logo_container'>
            <img className='navBar_logo' src={Logo} alt="" />
        </div>
        <div className='navBar_menu_container'> 
            <div className='navBar_menu'>
                <ul className='navBar_menu_ul' >
                    <li className='navBar_menu_item'><p>nosotros</p></li>
                    <li className='navBar_menu_item'><p>planes</p></li>
                    <li className='navBar_menu_item'><p>cobertura</p></li>
                    <li className='navBar_menu_item'><p>contacto</p></li>
                </ul>
            </div>
        </div>
    </div>
    </nav>
    </>
  )
}

export default NavBar