import React, { FC } from 'react'
import nameInactive from '../../assets/images/name_inactive.jpg'
import phoneInactive from '../../assets/images/phone_inactive.jpg'
import workInactive from '../../assets/images/work_inactive.jpg'
import mailInactive from '../../assets/images/mail_inactive.jpg'
import Message from '../form/Message'

interface formProps {
  message: boolean
  handleSubmit: (e: any) => void
  name: string
  phone: string
  mail: string
  work: string
  comments: string
  setName: any
  setPhone: any
  setMail: any
  setWork: any
  setComments: any
}

const Form: FC<formProps> = ({ 
  message, 
  handleSubmit, 
  name, 
  phone, 
  mail, 
  work, 
  comments, 
  setName, 
  setPhone, 
  setMail, 
  setWork, 
  setComments
}): JSX.Element => {
  return (
        <>
          <h2 className='form_text'>CONTACTANOS</h2>
          { message && <Message/> }
          <form className='form_container' onSubmit={handleSubmit}>
                  <div className='card_contact_container'>
                      <img className='card_image' src={nameInactive} alt="" />
                      <input id='name' name='name' value={name} onChange={e => setName(e.target.value)} className='card_input' type="text" placeholder='Nombre y Apellido'/>
                  </div>
                  <div className='card_contact_container'>
                      <img className='card_image' src={phoneInactive} alt="" />
                      <input id='phone' name='phone' value={phone} onChange={e => setPhone(e.target.value)} className='card_input' type="number" placeholder='Telefono'/>
                  </div>
                  <div className='card_contact_container'>
                      <img className='card_image' src={mailInactive} alt="" />
                      <input id='mail' name='mail' value={mail} onChange={e => setMail(e.target.value)} className='card_input' type="email" placeholder='Mail'/>
                  </div>
                  <div className='card_contact_container'>
                  <img className='card_image' src={workInactive} alt="" />
                      <select id='work' name='work' value={work} onChange={e => setWork(e.target.value)} className='card_input'>
                          <option value=''>- Situacion laboral -</option>
                          <option value='Relacion de dependencia'>Relación de dependencia</option>
                          <option value='Autonomo/Monotributista'>Autónomo / Monotributista</option>
                          <option value='Desempleado/ Trabajador informal'>Desempleado / Trabajador informal</option>
                      </select>
                  </div>
                  <textarea className='card_input_textarea' value={comments} name='comments' onChange={e => setComments(e.target.value)} placeholder='Dejanos tus comentarios'/>
                  <button type='submit' className='card_button'>Enviar</button>
          </form>
        </>  
  )
}

export default Form