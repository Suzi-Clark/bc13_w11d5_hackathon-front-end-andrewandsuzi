import React from 'react';
import Description from './Description/Description';

function Dinosaur({ info }) {
  return (
    <div className='container'>
      <p className='name'>{info.dino_name}</p>
      <img src={info.image_url} alt='Cool dino' height='200px'></img>
      <Description furtherInfo={info} />
    </div>
  );
}

export default Dinosaur;
