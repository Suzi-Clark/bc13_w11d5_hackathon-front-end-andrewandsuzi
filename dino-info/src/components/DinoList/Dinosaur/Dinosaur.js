import React from 'react';
import Description from './Description/Description';

function Dinosaur({ info }) {
  let descTog = false;
  function handleClick() {
    console.log('clicked');
    descTog = !descTog;
    console.log(descTog);
  }

  return (
    <div className='container'>
      <p className='name'>{info.dino_name}</p>
      <img
        src={info.image_url}
        alt='Cool dino'
        height='200px'
        onClick={() => handleClick()}
      ></img>
      {descTog ? true : <Description furtherInfo={info} />}
    </div>
  );
}

export default Dinosaur;
