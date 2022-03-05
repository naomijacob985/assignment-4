import React from 'react';

const Button = ({ onClick }) => {

  return (
    <div class="container m-3">
      <button id = "mybut" onClick={onClick}>New Post</button>
    </div>
  );
};

export default Button;
