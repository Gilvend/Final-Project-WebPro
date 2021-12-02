import React from 'react';
import './App.css';
import Index from './pages';
import Edit from './pages/edit';
import Login from './pages/login';
import Pages from './pages/pages';
import Post from './pages/posts';
import Users from './pages/users';

function App() {
  return (
      <>
        <Edit />
        <Index />
        <Login />
        <Pages />
        <Post />
        <Users />
        </>

  );
}

export default App;
