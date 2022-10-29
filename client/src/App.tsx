import React, { FC } from 'react';
import './App.scss';
import NavBar from './components/NavBar';

const App: FC = (): JSX.Element => {
  return (
    <>
      <div className="App">
       <NavBar/>
      </div>
    </>
  );
}

export default App;
