// js and jsx
//js and html
// js and react
// library and framework
// Spa and mpa?

let array1=[1,2,3,4]
// let array2=array1.splice(2,1,8)
// console.log(array1)
let array3=array1.slice(1,-10)
// console.log(array3)


// substr (index, length) --- vaishnavi (1,4) aish 

let str = 'vaishnavi'
// console.log(str.substr(1, -4))


// let names1=new Promise (function(myresolve,myreject){
//     myresolve()
// })
// names1.then(
//     function(value){
//         if(resolve){
//             console.log('succes')
//         }
//     },
//     function(error){
//         if(reject){
//             console.log('error')
//         }
//     }
    
// )
// console.log(names1)


let myPromise = new Promise(function(myResolve, myReject) {
    // "Producing Code" (May take some time)
    
    //   myResolve(); // when successful
      myReject('fail');  // when error
    });
    
    // "Consuming Code" (Must wait for a fulfilled Promise)
    myPromise.then(
      function(value) { 
console.log(value)
        
        /* code if successful */ },
      function(error) {
console.log(error)
        
        /* code if some error */ }
    );

    let arr1='vyshu'
    let arr2=Array.from(undefined)
    console.log(arr2)