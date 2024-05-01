let user={username:'vyshu',age:20,getFunction(){
    return 5
}}
let {username:profile,age,getFunction}=user;
// console.log(username) //vyshu
// console.log(age) //20
// console.log(getFunction()) //5
// console.log(user.getFunction()) //5

console.log(profile) //vyshu

