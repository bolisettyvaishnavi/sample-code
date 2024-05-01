const array=[2,4,'divya','vyshu']
let len=array.length
console.log(len) //4

array.length=2  //truncate
console.log(array) //[2 4]

array.length=9 //extend
console.log(array) //[2,4,<7 empty items>]
console.log(array.length) //9


