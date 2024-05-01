let a1="abc"

function fun(){
let a1="It is inside function"

    console.log(a1,"3")
     function fun1(){
    console.log(a1,"fun1")

    }
    return fun1;
}
var myFunc = fun();
    myFunc();

    // fun()
    if(true){
    console.log(a1,"7")
    }

   
    