const letters=new Set(["A","b"])
console.log(letters.values())
console.log(letters.keys())





// let array2=[{
//     name:'vyshu',
//     age:20
// },{
//     name:'divya',
//     age:21
// }]
// array2.map((temp,index,arr)=>{
//     if(temp.name=="vyshu"){

//     return(
//         console.log(temp.name,index)
//         )}})


       
        function makeAdder(x) {
            return function(y) {
              return x + y;
            };
        }
        
        var add5 = makeAdder(5);
        
        console.log(add5(2));
        
       

function myFunction(x, y = 10) {
    // y is 10 if not passed or undefined
    return x + y;
  }
 let myfun= myFunction(5,1); // will return 15
 console.log(myfun)

 
let text1="vyshu"
console.log(Array.from("ABCDEFG"))

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys();
console.log(keys)
// let text = "";
// for (let x of keys) {
//   text += x + "<br>";
// }




// u=9
console.log(u)
var u=8;


let obj2=[{name:"vaishnavi",age:20}]
console.log(obj2)

let obj3=obj2.map((temp)=>{
    let abc={age:temp.name,name:temp.age}
    // return abc
console.log(abc)
})

let a6=[4,6,3,2]
console.log(a6[9]=15)
let str=[[1,3,[6,9]]]
console.log(Array.from(str))
// float_num.toFixed(2);
let num6=2.266
console.log(num6.toFixed(2))

// var someNumber = 129.1;
// someNumber = someNumber.toFixed(1);
// console.log( someNumber)
let i=0
let textjkdjfk =""


// let a=5
//   switch(a){
//     case 5:
//         a=6565656;
        
//     case 4:
//         a=4;
        

// case 1:
//     a=55676767;
//     //  default:
//     //     a=7676767   

//   }
//   console.log(a,"a")

