//join()
let array=[1,"vyshu",2,'3',{name:'vaishnavi'}]
let joint=array.join('*')
console.log(joint) //1*vyshu*2*3*[object object]


// let array=[] or undefined or null
// console.log(array) //''   empty string


let array1=[4,3,2]
array1[5]=6
// console.log(array1)//[ 4,3,2,<2 emptyitems>,6 ]


let array2=[1,2,[],3]
console.log(array2.join())  //1,2,,3

let array3=[1,'vyshu',undefined,{a:1},null,2.1,[[6]],[]]
console.log(array3.join('and'))  //1andvyshuandand[object Object]andand2.1and6and


let array11=[1,null,undefined,[],{name:'vyshu'}]
let array22=array11.join('and')
console.log(array22)


// let a1=1andandandand[object Object]