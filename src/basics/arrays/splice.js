let arr=[4,9,6,2]
// arr.splice(start index,delete count,add element1,add element2,....)

// startindex>arr.length it does not delete anything it will append
// let new_arr=arr.splice(12,1,"c","c++")
// console.log(arr);//4 9 6 2 'c' 'c++'
// console.log(new_arr);//[]


// let new_arr=arr.splice(-1,2,"c","c++")
// console.log(arr);//4 9 6 c c++
// console.log(new_arr);//2

// let new_arr=arr.splice(-1,"c","c++")
// console.log(arr);//4 9 6  c++  2
// console.log(new_arr);//[]

// let new_arr=arr.splice(2)
// let new_arr=arr.splice(2,11)

// console.log(arr);//4 9 
// console.log(new_arr);//6 2


// let new_arr=arr.splice(1,-1)
// // let new_arr=arr.splice(1,0)

// console.log(arr);//4 9 6 2
// console.log(new_arr);//[]
// console.log(arr.splice(0,-1)); //[]
// console.log(arr.splice(-1,0));  //[]
// console.log(arr.splice(0,0));  //[]
// console.log(arr.splice(-1,-3));  //[]
// console.log(arr.splice(-3,-1));  //[]
// console.log(arr.splice(-1,2));  //[2]
// console.log(arr.splice(-1,-2));  //[]
// console.log(arr.splice(-2,-1));  //[]
// console.log(arr.splice(2));//6 2

console.log(arr.splice());// []
console.log(arr);// [4  9  6  2]

