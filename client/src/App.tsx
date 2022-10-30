import React, { FC } from 'react';
import './App.scss';
import NavBar from './components/NavBar';
import Header from './components/Header';

const App: FC = (): JSX.Element => {
  return (
    <>
      <div className="App">
       <NavBar/>
       <Header/>
      </div>
    </>
  );
}

export default App;
