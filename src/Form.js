import React, { Component } from "react";

class Form extends Component{
  constructor(props) {
    super(props);
    this.state= {
      query: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event){
    event.preventDefault();
    console.log(this.state.query);
  }
  handleChange(event){
    event.preventDefault();
    this.setState({query: this.parseQuery(event.target.value)});
  }
  parseQuery(searchTerms){
    if(searchTerms.includes(" ")){
      searchTerms = searchTerms.split(" ").join("+");
    }
    return searchTerms;
  }
  render(){
    return (
      <form onSubmit={this.handleSubmit}>
      <input type="text" placeholder="Search by Title or Author" onChange={this.handleChange}/>
      <button>Search</button>
      <p>You entered {this.state.query}</p>
      </form>
    );
  }}

  export default Form;
