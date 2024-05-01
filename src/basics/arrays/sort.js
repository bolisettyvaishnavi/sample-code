var names=['vyshu','divya','dayyam','keerthi','sudheer']

var names1=names.sort()
// console.log(names1) //['dayyam', 'divya', 'keerthi', 'sudheer', 'vyshu']
// console.log(names) //['dayyam', 'divya', 'keerthi', 'sudheer', 'vyshu']

var numbers=[67,90,3,2,19,101]
var numbers1=numbers.sort()
// console.log(numbers1) //[ 101, 19, 2, 3, 67, 90 ]
// console.log(numbers) //[ 101, 19, 2, 3, 67, 90 ]

var namedPersons=['vyshu','divya','keerthi','dayyam','sudheer']
function namefun(a,b){
    return a.length-b.length
}
namedPersons.sort(namefun)
// console.log(namedPersons) //[ 2, 3, 19, 67, 90, 101 ]

var numbered=[67,90,3,2,19,101]
function numberfun(a,b){
    return a-b
}
numbered.sort(numberfun)
// console.log(numbered) //[ 2, 3, 19, 67, 90, 101 ]

numbered.sort((a,b)=> b-a)
console.log(numbered) //[ 101, 90, 67, 19, 3, 2 ]