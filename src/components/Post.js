import React from 'react';

const Post = ({ post, onDelete }) => {
  return (
    <div className="post">
      <h3 className="title">
        {post.user}
        <button className="delButton" onClick={() => onDelete(post.article)}>
          DELETE
        </button>
      </h3>
      <p className="user">Post Title: {post.title}</p>
      <p className="article">Blog Post: {post.blog}</p>
    </div>
  );
};

export default Post;
