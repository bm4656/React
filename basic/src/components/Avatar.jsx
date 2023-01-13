import React from 'react';

export default function Avatar({ img, isNew }) {
  return (
    <div className='Avatar'>
      <img className='photo' src={img} alt='avatar' />
      {isNew && <span className='new'>new</span>}
    </div>
  );
}
