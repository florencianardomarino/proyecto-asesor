import React, { FC } from 'react';
import './App.scss';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Footer from './components/Footer';
import Planes from './components/Planes'
const App: FC = (): JSX.Element => {
  return (
    <>
      <div className="App">
       <NavBar/>
       <Header/>
       <Planes/>
       <Footer/>
      </div>
    </>
  );
}

export default App;
