const array=[4,8,3,0,1]

function findfn(element){
return element %2 == 1
}
const finding=array.find(findfn)
// console.log(finding)  //3
const finding1=array.find((element)=>element %2 == 0)
// console.log(finding1) //4

const team = [
    { name: "Bill", age: 10 },
    { name: "Linus", age: 15 },
    { name: "Alan", age: 20 },
    { name: "Steve", age: 34 },
  ];

  function findteam(member){
    return member.age >18
  }
  let finder=team.find(findteam)
  console.log(finder) //{ name: 'Alan', age: 20 }