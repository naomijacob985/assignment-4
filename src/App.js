import React from 'react';
import './style.css';
import { useState } from 'react';
import Header from './components/Header';
import User from './components/User';
import Title from './components/Title';
import Blog from './components/Blog';
import Button from './components/Button';

import { useState } from 'react';

export default function App() {
  const [posts, setPosts] = useState([
    { id: 1, text: 'doc' },
    { id: 2, text: 'mtg' },
    { id: 3, text: 'feb' },
  ]);
  const onClick = () => {
    console.log();
  };

  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <div>
      <Header />
      <User />
      <Title />
      <Blog posts={posts} onDelete={deletePost} />
      <Button onClick={onClick} />
    </div>
  );
}
