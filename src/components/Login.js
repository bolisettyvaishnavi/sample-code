import React,{useState} from 'react'
import { useForm } from 'react-hook-form';
import { TableData } from './TableData';
export default function Login(){
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const [datares,setDataRes]=useState([])
      const [labelname,setLabelName]=useState(false)

      const [inputdata,setinputdata]=useState({firstName:"",lastName:"",email:""})

    const onSubmit=(data)=>{
        let dataSet=[...datares,data]
        setDataRes(dataSet)
    }
    function data(e){
        setinputdata({...inputdata,[e.target.name]:e.target.value})
    }
    return(
        <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>First Name</label>
            <input type="text" {...register('firstName')} value={inputdata.firstName ||""} onChange={data} />
            </div>
            <div>
                <label>Last Name</label>
            <input type="text" {...register('lastName')} value={inputdata.lastName ||""} onChange={data}/>
            </div>
            <div>
                <label>Email</label>
            <input type="email" {...register('email')} value={inputdata.email||""} onChange={data}/>
            </div>
        <button type="submit">{labelname?"Update":"Add"}</button>

        </form>
        <TableData datares={datares} setDataRes={setDataRes} setinputdata={setinputdata} setLabelName={setLabelName} labelname={labelname} inputdata={inputdata}/>

        </>
    )}
