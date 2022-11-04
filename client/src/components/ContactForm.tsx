import React, { FC } from 'react'
import nameInactive from '../assets/images/name_inactive.jpg'
import phoneInactive from '../assets/images/phone_inactive.jpg'
import workInactive from '../assets/images/work_inactive.jpg'
import mailInactive from '../assets/images/mail_inactive.jpg'
import banner from '../assets/images/banner.jpg'
import '../styles/main.scss'

const ContactForm: FC = (): JSX.Element => {
  return (
    <div className='main_container'>
        <div className='contact_banner'>
            <img className='contact_banner_img' src={banner} alt="" />
        </div>
        <div className='general_container main_container_form'>
            <h2 className='form_text'>CONTACTANOS</h2>
            <form className='form_container'>
                    <div className='card_contact_container'>
                        <img className='card_image' src={nameInactive} alt="" />
                        <input required className='card_input' type="text" placeholder='Nombre y Apellido'/>
                    </div>
                    <div className='card_contact_container'>
                        <img className='card_image' src={phoneInactive} alt="" />
                        <input required className='card_input' type="number" placeholder='Telefono'/>
                    </div>
                    <div className='card_contact_container'>
                        <img className='card_image' src={mailInactive} alt="" />
                        <input required className='card_input' type="email" placeholder='Mail'/>
                    </div>
                    <div className='card_contact_container'>
                    <img className='card_image' src={workInactive} alt="" />
                        <select required className='card_input'>
                            <option>- Situacion laboral -</option>
                            <option>Relación de dependencia</option>
                            <option>Autónomo / Monotributista</option>
                            <option>Desempleado / Trabajador informal</option>
                        </select>
                    </div>
                    <textarea className='card_input_textarea' placeholder='Dejanos tus comentarios'></textarea>
                    <button className='card_button'>Enviar</button>
            </form>
        </div>
    </div>
  )
}

export default ContactForm