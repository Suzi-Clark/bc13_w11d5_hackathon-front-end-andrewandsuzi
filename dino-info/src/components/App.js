import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Dinosaur from './Dinosaur/Dinosaur';

const url = process.env.BACKEND_URL ?? 'http://localhost:3000';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    async function fetchDinosaurs() {
      const response = await fetch(`${url}/dinosaurs`);
      const response2 = await response.json(response);
      console.log(response2);
      setData(response2);
    }
  }, []);

  return (
    <div className='App'>
      <Header />
      <Dinosaur />
      <Footer />
    </div>
  );
}

export default App;
