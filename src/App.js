import React from 'react';
import './style.css';
import { useState } from 'react';
import Header from './components/Header';
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

  const addPost = (post) => {
    console.log(post);
  };
  // const deletePost = (id) => {
  //   setPosts(posts.filter((post) => post.id !== id));
  // };onDelete={deletePost}

  return (
    <div>
      <Header />
      <Title onAdd={addPost} />
      <Blog posts={posts} />
      <Button onClick={onClick} />
    </div>
  );
}
