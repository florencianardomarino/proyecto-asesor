import React, { FC } from 'react'
import logoWsp from '../assets/images/whatsapp_logo.png'

const WhatsApp: FC = (): JSX.Element => {
  return (
    <>
      <a href="https://api.whatsapp.com/send?phone=393463784871" className='btn-wsp' rel="noopener noreferrer" target="_blank">
        <img className='btn-wsp-img' src={logoWsp} alt="" />
      </a>
    </>
  )
}

export default WhatsApp