import React, { Component } from "react";

class Form extends Component{
  constructor(props) {
    super(props);
    this.state= {
      query: ""
    }
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  // handleSubmit(event){
  //   event.preventDefault();
  // }
  // handleChange(event){
  //   event.preventDefault();
  //   this.setState({query: event.target.value.split(" ").join("+")});
  // }
  render(){
    return (
      <form onSubmit={this.props.handleSubmit}>
      <input type="text" placeholder="Search by Title or Author" onChange={this.props.handleChange}/>
      <button>Search</button>
      </form>
    );
  }}

  export default Form;
