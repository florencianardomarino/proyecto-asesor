import React, { FC } from 'react';
import './App.scss';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const App: FC = (): JSX.Element => {
  return (
    <>
      <div className="App">
       <NavBar/>
       <Footer/>
      </div>
    </>
  );
}

export default App;
