//keys
let employees={
    role:'fresher',
    exp:1,
    company:'MSR'
}
let school={
    staff:'teacher',
    vehicle:'bus'
}
const key=Object.keys(employees)
// console.log(key) //['role','exp','company]

//values
const value=Object.values(employees)
// console.log(value) //['fresher',1,'MSR']
key.forEach((temp)=>{
    let val=employees[temp]
    let val1=`${temp} : ${val}`
    // console.log(val1)//role:fresher   exp:1    company:MSR
})

//assign
const assign=Object.assign(employees,school)
console.log(assign)
