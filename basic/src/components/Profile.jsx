import React from 'react';
export default function Profile({ img, name, title, isNew }) {
  return (
    <div className='profile'>
      <img className='photo' src={img} alt='avatar' />
      {isNew && <span className='new'>new</span>}
      <h1>{name}</h1>
      <p>{title}</p>
    </div>
  );
}
