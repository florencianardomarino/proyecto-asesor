import React, { FC } from 'react'
import '../styles/main.scss'
import video from '../assets/videos/videoGuemes.mp4'

const InfoGuemes: FC = (): JSX.Element => {
  return (
    <>
      <div className='general_container info_container'>
        <div className='info_text_container'>
          <h3 className='info_title'>SANATORIO GÜEMES</h3>
          <p className='info_text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus esse dolore accusamus atque facilis molestias hic consequatur, repellendus minus, sit quae, minima nihil vero. Nam ullam consectetur quibusdam ipsa laudantium.</p>
        </div>
        <video 
          className='video_guemes' 
          src={video}
          autoPlay
          muted
          controls
          ></video>
      </div>
    </>
  )
}

export default InfoGuemes