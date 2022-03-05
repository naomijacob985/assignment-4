import React from 'react';

const Title = (props) => {
  return (
    <form>
      <label>Title: </label>
      <textarea />
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
