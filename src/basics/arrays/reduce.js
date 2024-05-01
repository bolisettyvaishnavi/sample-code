const array=[{age:24},{age:25}]
const reduced=array.reduce((acc,current)=> {
    return acc+current.age
},0)
console.log(reduced) //49