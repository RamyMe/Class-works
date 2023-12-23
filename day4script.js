console.log("Practice")
console.log("Day 4")
//var and let
var a=3
a=23
console.log(a)
let b=45
b=30
console.log(b)

//spread and rset operator(...)
a=[1,2,3,4,5]
b=a
c=[...a]
b.push(10)//shallow copy
c.push(20)//deep copy
console.log(a,b,c)

//object and array destructure
var abc=["ramya","rajkumar","prema"]
console.log(...abc,...a)

let obj={
    name:"ramya",
    email:"ramyapremakumari2000@gmail.com", 
    mobile:"9444751315"
}

let{name,email,mobile}=obj //object destructure
console.log(name)

let arr=[10,15,20,25,89,30]//array destructure
let [e,...f]=arr
console.log(f)

//object property shorthand
let name1= "ramya"
let course="FSD"
let batch="weekend batch"

console.log({name1,course,batch})

//template literals
console.log(`The person ${name1} has opted ${course} course who belongs to ${batch}`)
