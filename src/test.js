import React,{useState} from "react";
export default class Test extends React.Component{
    constructor(props){
        super(props)

        this.state={
            title:"vyshu"
        }
    
    }
render(){
    
    return(
        <>
        <button>{this.state.title}</button>
        
        </>
    )
}
}