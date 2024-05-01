//entries

let employees={
    role:'fresher',
    exp:1,
    company:'MSR'
}
const entry=Object.entries(employees)
console.log(entry) //[['role','fresher'] ['exp',1] ['company','MSR']]
entry.forEach((temp1)=>{
    let ent=`${temp1[0]}:${temp1[1]}`

    console.log(ent,"temp2") //role:fresher exp:1 company:MSR

})
