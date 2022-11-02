import React, { FC } from 'react';
import './App.scss';
import NavBar from './components/NavBar';
import Header from './components/Header';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Planes from './components/Planes'
const App: FC = (): JSX.Element => {
  return (
    <>
      <div className="App">
       <NavBar/>
       <Header/>
       <Planes/>
       <ContactForm/>
       <Footer/>
      </div>
    </>
  );
}

export default App;
