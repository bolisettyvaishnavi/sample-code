const array=[3,7,9,'vyshu',2]
const rev1=array.reverse()
// console.log(rev1) //[2,'vyshu',9,7,3]
// console.log(array) //[2,'vyshu',9,7,3]

const array1=[4,7,3,9,1,0]

const rev2=[...array1].reverse()
// console.log(rev2) //[0,1,9,3,7,4]
// console.log(array1)  //[4,7,3,9,1,0]

//for loop

const array3=[5,3,7,1]
let revarray=[]
for(let i=array3.length-1;i>=0;i--){
    revarray.push(array3[i])
}
console.log(revarray) //[1,7,3,5]
console.log(array3) //[5,3,7,1]
//unshift()
//reduce()




