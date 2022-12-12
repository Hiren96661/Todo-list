import React from "react";

class Todo extends React.Component{
    constructor (){
        super()
        this.state = {
            input : "",
            list : []
        }
        this.deletedata = this.deletedata.bind(this)
    }
    change = (e) => {
        this.setState ({
            input : e.target.value
        })
    }
    savedata = (e) => {
        if(!this.state.input.length){
            return;
        }
        this.setState({
            input : "",
            list : [...this.state.list, this.state.input]
        })
    }
    deletedata = (index) => {
       const removedata = this.state.list.map((detail,id) => {
        return index!==id;
       }) 
       this.setState({list : removedata});
       console.log(removedata)
    } 
    render (){
        return(
            <>
                <h1> Todo List </h1>
                <input type="text" name = "input" value = {this.state.input} onChange={this.change.bind(this)}/>
                <input type="button" value = "Savedata" onClick  = {this.savedata.bind(this)}/>
                {/* <input type = "button" value="Deletedata" onClick = {this.deletedata.bind(this)}/> */}
                <ul>
                    {this.state.list.map((data,index)=>{
                        return( 
                                <>
                                <li key={index}> {data}</li>
                                 <span>  <button type="button" onClick={() => this.deletedata(index)}> Remove </button> </span>
                                </>
                        )

                        })}
                </ul>
            </>
        )
    }
}
export default Todo;