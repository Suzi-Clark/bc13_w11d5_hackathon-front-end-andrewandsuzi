import React from 'react';
import './description.css';

function Description({ furtherInfo }) {
  return (
    <div>
      <p className='heading'>
        <b>Scientific Name:</b> {furtherInfo.scientific_name}
      </p>
      <p className='heading'>
        <b>Description:</b> {furtherInfo.description}
      </p>
      <p className='heading'>
        <b>Size:</b> {furtherInfo.size}
      </p>
      <p className='heading'>
        <b>Located:</b> {furtherInfo.location}
      </p>
    </div>
  );
}

export default Description;
