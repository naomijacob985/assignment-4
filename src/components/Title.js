import React from 'react';
import { useState } from 'react';
import User from './User';
const Title = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [blog, setBlog] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    onAdd({ title, blog });
    setTitle('');
    setBlog('');
  };

  return (
    <form onSubmit={onSubmit}>
      <User />
      <label>Title: </label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label>Blog Post:</label>
      <input
        type="text"
        value={blog}
        onChange={(e) => setBlog(e.target.value)}
      />

      <input type="submit" value="Submit" />
    </form>
  );
};

export default Title;
// import React, { Component } from 'react';

// class Title extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: '',
//     };

//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(event) {
//     this.setState({ value: event.target.value });
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>Title: </label>
//         <textarea value={this.state.value} onChange={this.handleChange} />
//       </form>
//     );
//   }
// }

// export default Title;
