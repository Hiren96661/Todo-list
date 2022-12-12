import React from "react";

class Todo1 extends React.Component{
  constructor(){
    super()
    this.state = {
        input : "",
        list : []

    }
    this.handlechange = this.handlechange.bind(this)
    this.handlesubmit = this.handlesubmit.bind(this)
  }
  handlechange = (e) => {
      this.setState({ 
        [e.target.name] : [e.target.value]
      })
  }
  handlesubmit = (e) => {
    
    e.preventDefault();
    this.Display();
    localStorage.setItem("input",this.state.input)
  }
  Display = () => {
    let inputdata = localStorage.getItem("input")
    this.setState({
      list : [...this.state.list,inputdata]
    })
    console.log(inputdata);
    
  }
  render(){
    return(
      <>
        <input type="text" name="input" onChange={this.handlechange} />
        <input type="button" value="Add" onClick={this.handlesubmit} />
      </>
    )
  }
}
export default Todo1;