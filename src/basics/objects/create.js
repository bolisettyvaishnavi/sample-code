//creating an object with empty {}
let obj={}
obj.name="vyshu"
console.log(obj)

//creating an object with new keyword
let obj1=new Object()
obj1.name="simham"
console.log(obj1)

//constructor function without parameters
function Vaishnavifn () {
   this.name='yshu'
}
const object=new Vaishnavifn()
console.log(object.name)

//constructor function with parameters
function Person(name,age,job){
    this.name=name
    this.age=age
    this.job=job

}
const object1=new Person('divya',24,'teacher')
const object2=new Person('vyshu',23,'software')
console.log(object1.name)
console.log(object2.name)

//Object.create()
let existobj={
    position:'employee',
    exp:'2'
}
const newexistobj=Object.create(existobj)
newexistobj.position='manager'
newexistobj.role='teamlead'
console.log(newexistobj,"newexistobj")

console.log(existobj)

existobj.position="asst.manager"
existobj.salary=2
console.log(existobj)