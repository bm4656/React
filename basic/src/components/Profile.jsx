import React from 'react';
export default function Profile() {
  return (
    <div className='profile'>
      <img
        className='photo'
        src='https://images.unsplash.com/photo-1669199145926-7dad570f3c3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80'
        alt='avatar'
      />
      <h1>Profile</h1>
      <p>FE 개발자</p>
    </div>
  );
}
