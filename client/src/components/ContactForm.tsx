import React, { FC, useState } from 'react'
import nameInactive from '../assets/images/name_inactive.jpg'
import phoneInactive from '../assets/images/phone_inactive.jpg'
import workInactive from '../assets/images/work_inactive.jpg'
import mailInactive from '../assets/images/mail_inactive.jpg'
import banner from '../assets/images/banner.jpg'
import Message from './form/Message'
import '../styles/main.scss'
interface clientTypes {
  name: string
  phone: string
  mail: string
  work: string
  comments?: string
}

const ContactForm: FC = (): JSX.Element => {
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [mail, setMail] = useState<string>('');
  const [work, setWork] = useState<string>('');
  const [comments, setComments] = useState<string>('');
  const [dataClient, setDataClient] = useState<clientTypes | {}>({});
  const [message, setMessage] = useState<boolean>(false);
  
  const clearForm = (): any => {
    setName('');
    setPhone('');
    setMail('')
    setWork('');
    setComments('');
  }

  const handleSubmit = (e: any): void => {
    e.preventDefault()
    if ([name, phone, mail, work].includes('')) {
      setMessage(true)
    } else {
      setMessage(false)
      setDataClient({
        name: name,
        phone: phone,
        mail: mail,
        work: work,
        comments: comments
      })
      clearForm()
    } 
  }

  console.log('data cliente:', dataClient)

  return (
    <div className='main_container'>
        <div className='contact_banner'>
            <img className='contact_banner_img' src={banner} alt="" />
        </div>
        <div className='general_container main_container_form'>
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
                            <option>- Situacion laboral -</option>
                            <option>Relación de dependencia</option>
                            <option>Autónomo / Monotributista</option>
                            <option>Desempleado / Trabajador informal</option>
                        </select>
                    </div>
                    <textarea className='card_input_textarea' name='comments' onChange={e => setComments(e.target.value)} placeholder='Dejanos tus comentarios'/>
                    <button type='submit' className='card_button'>Enviar</button>
            </form>
        </div>
    </div>
  )
}

export default ContactForm