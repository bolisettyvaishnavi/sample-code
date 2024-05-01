import React from "react"
export function TableData(props){
    // let abc=props.datares
    const handleUpdate=(index)=>{
let total1=props.datares[index]
console.log(total1,"index")
props.setinputdata(total1)
props.setLabelName(true)
    }
    const updateUpdate=(index)=>{
        let total2=[...props.datares]
        total2.splice(index,1,props.datares)
        props.setDataRes(total2)

    }
    const handleDelete=(index)=>{
        let total=[...props.datares]
        total.splice(index,1)
        props.setDataRes(total)
            }
    return(
<table className="table">
  <thead>
    <tr>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Email</th>
      <th scope="col">Actions</th>

    </tr>
  </thead>
  {props.datares.map((temp,index)=>{
    return(

  <tbody>
      <td>{temp.firstName}</td>
      <td>{temp.lastName}</td>
      <td>{temp.email}</td>
      <td><button onClick={props.labelname?()=>updateUpdate(index):()=>handleUpdate(index)}>Edit</button></td>
      <td><button onClick={()=>handleDelete(index)}>Delete</button></td>
  </tbody>
    )
  })}

</table>

)
}