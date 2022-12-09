import React, { useState, useEffect } from 'react';
import './dinolist.css';
import Dinosaur from './Dinosaur/Dinosaur';
import response from '../../data';

const url = process.env.BACKEND_URL ?? 'http://localhost:3000';

function DinoList() {
  //   const [data, setData] = useState('');
  console.log(response[1].dino_name);

  //   useEffect(() => {
  //     async function fetchDinosaurs() {
  //       const response = await fetch(`${url}/dinosaurs`);
  //       const response2 = await response.json(response);
  //       console.log(response2);
  //       setData(response2);
  //     }
  //   }, []);
  return (
    <div className='list'>
      {response.map((x) => {
        return <Dinosaur info={x} />;
      })}
    </div>
  );
}

export default DinoList;
