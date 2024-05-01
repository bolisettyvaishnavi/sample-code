let arr=[4,8,9,6,2]
// arr.slice(start,end-1)
console.log(arr.slice(0,1));//4
console.log(arr.slice(0,-1));//4 8 9 6
console.log(arr.slice(-1,0));//[]
console.log(arr.slice(0,0));//[]
console.log(arr.slice(-1,-3));//[]
console.log(arr.slice(-3,-1));//9 6
console.log(arr.slice(-1,2));//[]
console.log(arr.slice(-1,-2));//[]
console.log(arr.slice(-2,-1));//6
console.log(arr.slice(2));//9 6 2

console.log(arr.slice());//4 8 9 6 2
