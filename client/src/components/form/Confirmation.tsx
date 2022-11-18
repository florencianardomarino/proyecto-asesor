import React, { FC } from 'react'
import '../../styles/main.scss'

const Confirmation: FC = (): JSX.Element => {
  return (
        <div className='confirm_container'>
            <img className='img_check' src="https://media.istockphoto.com/vectors/hand-holding-true-check-icon-symbol-vector-id1160554182" alt="Icono check" />
            <h3 className='txt_check'>Gracias por enviarnos tu consulta. Nos pondremos en contacto a la brevedad.</h3>
        </div>
  )
}

export default Confirmation