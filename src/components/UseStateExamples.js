import React,{useState,useEffect} from 'react'
import useFetch from './useFetch'
export default function UseStateExamples(){
    const[username,setUsername]=useState({username:"vaishnavi"})
    // const [data,setData]=useState([])

    const data=useFetch("https://jsonplaceholder.typicode.com/users")
    const todos=useFetch("https://jsonplaceholder.typicode.com/todos")

    // console.log(username,"user")
 
//  useEffect(()=>{
// fetch("https://jsonplaceholder.typicode.com/users")
// .then(res=>res.json())
// .then(data=>{setData(data)
// })
//     },[username])
    return(
<>
{data.map((user)=>user.name)}
{username.username}
<button onClick={()=>setUsername({age:20})}>
Click
</button>
<h>Todos</h>
{todos.map((todo)=>todo.title)}

</>
    )
} 
// import React,{Component} from "react";

// export class UseStateExamples extends Component{
// constructor(){
//     super()
//     this.state={
//         username:'vyshu'
//     }
//     console.log(this.state,"user")
// }
// render(){
//     return(
//         <>
//         {this.state.username}
//         <button onClick={()=>{this.setState({age:20})
//     console.log(this.state,"user1")
    
//         }}>Click</button>

//         </>
//     )
// }
// }