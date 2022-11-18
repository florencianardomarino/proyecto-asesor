import React, { FC, useState } from 'react'
import Form from './form/Form'
import banner from '../assets/images/banner.jpg'
import '../styles/main.scss'
import Confirmation from './form/Confirmation'
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
  const [confirmation, setConfirmation] = useState<boolean>(false)
  
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
      setConfirmation(true)
      clearForm()
    } 
  }

  console.log('data cliente:', dataClient)

  return (
   <>
      <div className='main_container'>
        <div className='contact_banner'>
            <img className='contact_banner_img' src={banner} alt="" />
        </div>
        <div className='general_container main_container_form'>
        { !confirmation
          ? <Form
            handleSubmit={handleSubmit}
            message={message}
            name={name}
            phone= {phone}
            mail= {mail}
            work= {work}
            comments= {comments}
            setName={setName}
            setPhone={setPhone}
            setMail={setMail}
            setWork={setWork}
            setComments={setComments}
            />
          : <Confirmation/>
        }
        </div>
      </div>
    </>
  )
}

export default ContactForm