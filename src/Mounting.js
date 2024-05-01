import React,{Component} from "react";
export class Mounting extends Component{
constructor(props){
    super(props)
    // this.state={}
    this.submit=this.submit.bind(this)
}
// static getDerivedStateFromProps(props,state){
//     console.log("this is getDerivedStateFromProps")
// return state;
// }
// componentDidMount(){
//     console.log("this is ComponentDidMount")
// }
submit(event){
    alert("alert mounted")
    console.log(event)
}
render(){
    console.log("this is render")
    return(
        <div>
        <button onClick={(e)=>this.submit(e)}>Mounting</button>
        </div>
    )}}
export default Mounting