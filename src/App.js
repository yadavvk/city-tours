import React from 'react';
import Navbar from './components/Navbar/Navbar';
import TourList from './components/TourList/index';
import './App.scss';

function App() {
  return (
    <main>
      <Navbar/>
      <TourList/>
    </main>
    
  );
}

export default App;
