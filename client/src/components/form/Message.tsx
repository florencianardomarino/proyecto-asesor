import React, { FC } from 'react'
import '../../styles/main.scss'

const Message: FC = (): JSX.Element => {
  return (
    <div className='error'>Todos los compos son obligatorios</div>
  )
}

export default Message