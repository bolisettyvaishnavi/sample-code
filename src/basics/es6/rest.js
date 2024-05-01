function sum(...num){
    sum1=0
for(let number of num)
    sum1+=number
    return sum1
}
let x=sum(4,9,3,67)
console.log(sum1) //83


// const store=(vas,...item,one)=>{  //A rest operator must be last in parameter list
const store=(vas,...item)=>{

    console.log(vas,item)

}
store(7,2,4,1,9)