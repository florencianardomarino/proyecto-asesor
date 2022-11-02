import React, { FC } from 'react';
import './App.scss';
import NavBar from './components/NavBar';
import Header from './components/Header';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App: FC = (): JSX.Element => {
  return (
    <>
      <div className="App">
       <NavBar/>
       <Header/>
       <ContactForm/>
       <Footer/>
      </div>
    </>
  );
}

export default App;
