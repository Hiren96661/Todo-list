import React from "react";

class TodoFinal extends React.Component{
    constructor (){
        super()
        this.state = {
            input : "",
            myarray : []
        }
    }
    handlechange = (e) => {
        this.setState({
            input : e.target.value
        })
    }
    handlesubmit = (e) => {
        if (this.state.input === "") {
            return;
        }
        let list = this.state.myarray
        list.push(e);
        this.setState({
            myarray : list,
            input : ""
        })
        console.log(list)
    }

    removedata = (index) => {
        let data = this.state.myarray.splice(index,1)
        this.setState({
            updateddata : data
        })
    }
    render(){
        return(
            <>
                <h2> Todo List </h2>
                Enter Data : <input type="text" value = {this.state.input} onChange = {this.handlechange.bind(this)} />
                             <input type="button" value = "Add" onClick={() => this.handlesubmit(this.state.input)} />
                            
                {this.state.myarray.map ((value,index) => 
                <h4 key={index}> 
                    {index + 1} {value}
                    <button onClick={()=> this.removedata(index)}> Delete </button>
                </h4>
                )}
            </>
        )
    }
}
export default TodoFinal