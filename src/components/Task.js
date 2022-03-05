import React from 'react';
import Button from './Button';
const Task = ({ post }) => {
  return (
    <div class="container m-3">
      <h3>
        {post.text}
        <Button />
      </h3>
    </div>
  );
};

export default Task;
