import React, { Component } from 'react';
import Task from './Task';
const Blog = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
        <Task key={posts.id} post={post} />
      ))}
    </>
  );
};

export default Blog;

// //      {posts.map((post) => (
//   <Blog key={post.id} post={post} />
//   ))}

// class Blog extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: '',
//     };

//     this.handleChange = this.handleChange.bind(this);
//   }
// value={this.state.value} onChange={this.handleChange}-------------------- in text area
//   handleChange(event) {
//     this.setState({ value: event.target.value });
//   }
//     // <form>
//   <label>
//     Blog Post:
//     <textarea />
//   </label>
// </form>
{
  /* {posts.map((post) => (
        <Blog key={post.id} post={post} />
      ))} */
}
