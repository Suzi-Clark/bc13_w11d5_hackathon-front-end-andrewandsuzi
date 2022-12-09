import React from 'react';
import Description from './Description/Description';

function Dinosaur({ info }) {
  return (
    <div className='container'>
      <p>{info.dino_name}</p>
      <img src={info.image_url} alt='Cool dino' height='100px'></img>
      <Description />
    </div>
  );
}

export default Dinosaur;
