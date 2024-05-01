import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
function Task() {
    const {
        register,
        setValue,
        getValues,
        reset,
        handleSubmit,
        // formState: {errors},
    } = useForm()

    const [All, setAll] = useState([])

    const [flag, setFlag] = useState(false)
    const [Check1, setCheck1] = useState([false, false])
    const [checked, setChecked] = useState([])
    const [chan, setChan] = useState([])


    useEffect(() => {
        if (JSON.parse(sessionStorage.getItem('list_names'))) {
            console.log(sessionStorage.getItem('list_names'), "session")
            let x = JSON.parse(sessionStorage.getItem('list_names'))
            setAll(x)
        }

    }, []);
    function handleChange(e) {
        setValue('email', e.target.value)
    }

    const onSubmit = () => {
        All.push(getValues('email'))
        sessionStorage.setItem('list_names', JSON.stringify(All))
        setAll(All)
        setFlag(true)
        let dataset = {
            email: ''
        }
        reset(dataset)
    }
    function handleDirect(index) {
        if (checked[index]) {
            checked[index] = false
        } else {
            checked[index] = true
        }
        setChecked([...checked])

    }
    function handleDelete(index) {
        All?.splice(index, 1)
        setAll([...All])
        sessionStorage.setItem('list_names', JSON.stringify(All))
    }
    return (
        <>
            {/* <form> */}
            <form onSubmit={handleSubmit(onSubmit)} >
                <input type='text'
                    // value={Data1}
                    {...register('email')}
                    onChange={(e) => handleChange(e)}
                ></input>
                <button>Submit</button>
            </form>

            <>
                {JSON.parse(sessionStorage.getItem('list_names'))?.map((temp, index) => {
                    return (
                        <>

                            <div
                                onChange={() => handleDirect(index)}
                                className='form-check form-switch form-switch-sm form-check-custom form-check-solid'
                            >
                                <input
                                    className='form-check-input form-control fs-6 my-2'
                                    {...register('direct_customer_engagement')}
                                    type='checkbox'
                                    role='switch'
                                    id='flexSwitchCheckDefault'
                                />
                            </div>
                            <div style={{
                                textDecoration: checked[index] ? 'line-through' : 'none'
                            }}>{temp}</div>
                            <button onClick={() => handleDelete(index)}>delete</button>
                        </>
                    )
                })}

            </>

            {/* } */}
            {/* </form> */}
        </>
    )
}
export default Task