import React, { Component } from "react";

class Form extends Component{
  constructor(props) {
    super(props);
    this.state= {
      query: ""
    }
  }
  render(){
    return (
      <form onSubmit={this.props.handleSubmit}>
      <input type="text" placeholder="Search by Title or Author" onChange={this.props.handleChange} required />
      <button>Search</button>
      </form>
    );
  }}

  export default Form;
