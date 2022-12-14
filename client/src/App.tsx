import React, { FC } from 'react';
import './App.scss';
import NavBar from './components/NavBar';
import Header from './components/Header';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Planes from './components/Planes';
import InfoGuemes from './components/InfoGuemes';
import WhatsApp from './components/WhatsApp';

const App: FC = (): JSX.Element => {
  return (
    <>
      <div className="App">
       <NavBar/>
       <Header/>
       <Planes/>
       <InfoGuemes/>
       <ContactForm/>
       <Footer/>
       <WhatsApp/>
      </div>
    </>
  );
}

export default App;
