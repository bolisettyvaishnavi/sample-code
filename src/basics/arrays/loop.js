let loop=[5,6,9,4]

for(let each in loop){
    // console.log(each,"Each")// 0  1  2  3
    // console.log(loop[each],"Each") //5   6   9  4
}

for(let each of loop){
    // console.log(each,"Eachof") //5  6  9  4
    console.log(loop[each],"Eachof")//undefined
}