import React from 'react';
import Profile from './components/Profile';
import './App.css';
import Avatar from './components/Avatar';
const AppProfile = () => {
  const handleClick = e => {
    console.log(e);
    alert('버튼 클릭됨');
  };
  return (
    <>
      <button onClick={handleClick}>button</button>
      <Avatar
        img='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
        isNew='true'
      />
      <Profile
        isNew='true'
        img='https://images.unsplash.com/photo-1669199145926-7dad570f3c3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80'
        name='annie'
        title='프론트엔드 개발자'
      />
      <Profile
        isNew='true'
        img='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
        name='Sue'
        title='풀스택 개발자'
      />
      <Profile
        img='https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fCVFRCU5NCU4NCVFQiVBMSU5QyVFRCU5NSU4NHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
        name='Jane'
        title='백엔드 개발자'
      />
    </>
  );
};

export default AppProfile;
