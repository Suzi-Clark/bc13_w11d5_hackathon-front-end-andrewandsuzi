import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import DinoList from './DinoList/DinoList';

function App() {
  return (
    <div className='App'>
      <Header />
      <DinoList />
      <Footer />
    </div>
  );
}

export default App;
