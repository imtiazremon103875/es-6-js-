// import { a, pi } from "./external.js";


// (async function(){
//     const {add}=await import( "./until.js")
// const {remove}=await import( "./until.js")
// add()
// remove()
// })
// ()



// console.log(pi,a)


// arrow function
// let number=(a,b)=>a+b
// console.log(number(10,20))


// ES6 fat arrow function

// let javascript={
//     name:"javascript",
//     libraires:["react",'angular',"vue"],
//     printLibraries: function(){
//         this.libraires.forEach(a=>console.log(`${this.name} loves  ${a}`))
//     }
// }
// javascript.printLibraries()

// let javascript={
//     name:"javascript",
//     libraries:["react","angular","vue"],
//     printLibraries:function(){
//         this.libraries.forEach(a=>console.log(`${this.name} loves ${a}`))
//     }
// }
// javascript.printLibraries()


// let javascript={
//     name:"javascript",
//     libraries:["react","vue","angular"],
//     printLabraries:function(){
//         this.libraries.forEach(a=>console.log(`${this.name} loves ${a}`))
//     }
// }

// javascript.printLabraries()

// html example with 
// const searchInput=document.querySelector(".search");
// const display=document.querySelector(".result");
// const thanks=document.querySelector(".thanks");

// function show(){
//     display.innerHTML=this.value;
//     let self=this
//     setTimeout(function(){
//         thanks.innerHTML=`you have typed: ${self.value}`;
//     },1000)
// }
// searchInput.addEventListener("keyup",show)



// truthy or falsy
// falsy condition
// 1.null
// 2.not a Number
// 3.blank
// 4.undined
// 5.0
// 6.false

// let name =0;
// if(name== true){
//     console.log("truthy")
// }
// else{
//     console.log("falsy")
// }


// Ternary Operator

// let age=18

// let type=(age>=18)?"adult":(age<10)? "child":"young";

// console.log(type)



// let age=18;
// let type=(age>=18? "adult":(age<10)?"child":"young")
// console.log(type)


// find() method
// const numbers=[1,2,3,4,5,6,7,8,9,10]

// const results=numbers.find(function(currentValue){
//    return currentValue <6
// });
// console.log(results)

// const numbers=[1,2,3,4,5,6,7,8]

// const result=numbers.find(function(currentValue){
//     return currentValue<8
// })
// console.log(result)




//  findIndex() method

// const numbers=[1,2,3,4,5,6,7,8,9,10]

// const results=numbers.findIndex((currentValue,index,arr)=>{
//     return currentValue % 2;
// })
// console.log(results)



// const numbers=[1,2,3,4,5,6,7,8]

// const result=numbers.findIndex((currentValue,index,arr)=>{
//     return currentValue % 3
// })
// console.log(result)






// filter() method

// const numbers=[1,2,3,4,5,6,7,8,9,10]

// const results= numbers.filter((currentValue,index,arr)=>{
//     return currentValue >4;
// })
// console.log(results)


// slice
// const numbers=[1,2,3,4,5,6,7,8,9,10]

// const results=numbers.slice(2,7)

// console.log(results)


// const numbers=[1,2,3,4,5,6,7,8,9,10,11,12,13,14]

// const results=numbers.slice(1,7)
// console.log(results)



// splice

// const numbers=[1,2,3,4,5,6,7,8,9,10]

// const results=numbers.splice(2,5,11,23,15,20,22)

// console.log(numbers)

// const numbers=[1,2,3,4,5,6,7,8,9,10]

// const results=numbers.splice(2,6,26,27,28,29,30)
// console.log(numbers)


// concat
// const number1=[1,2,3,4,5]
// const number2=[6,7,8,9,10]

// const result=number1.concat(number2)

// console.log(result)

// const number1=[1,2,3,4,5,6]
// const number2=[7,8,9,10,11,12]
// const number3=[13,14,15,16,17,18]
// const number4=[19,20,21,22,23,24]

// const results=number1.concat(number2,number3,number4)

// console.log(results)



// push

// let number=[1,2,3,4,5,6]

// number.push(8)
// console.log(number)



// let numbers=[1,2,3,4,5,6,7,8,9,10]

// numbers.push(10,23,44,55,55)
// console.log(numbers)


// map
// const numbers=[1,2,3,4,5,6,7,8,9,10]

// const results=numbers.map((number)=>{
//        return number*2
// })
// console.log(results)


// const numbers=[1,2,3,4,5,6,7,8,9,10]


// const results=numbers.map((number)=>{
//              return number +=1
// })
// console.log(results)


// const numbers=[1,2,3,4,5,6,7,8,9,10,11]

// const results=numbers.map((number)=>{
//    return number+1
// })
// console.log(results)



// reduce


// const numbers=[1,2,3,4,5,6,7,8,9]

// const results=numbers.reduce((previousValue,currentValue,currentIndex,arr)=>{

//    return previousValue+currentValue;
// },0)


// console.log(results)

// const numbers=[1,2,4,5,6,8,10,11,12,17]
// const result=numbers.reduce((previousvalue,currentValue,currentIndex,arr)=>{
//     return previousvalue + currentValue;

// },0)
// console.log(result)






// let i=0
// for(;;i++){

//     if(i<=5){
//         console.log(i)
//     }
//     else{
//         break;
//     }
    
// }
// let i=0
// for(;;i++){
//     if(i<=5){
//         console.log(i)
//     }
//     else{
//         break;
//     }
    
// }



// for In
// const myObj={
//     name:"javascript",
//     estd:"1995",
//     founder:"sunny aich",
// }

// for(const property in myObj){
//     console.log(property);
// }

// const university={
//     name:"BGC Trust",
//     dept:"CSE",
//     batch:"26th",
//     session:"2022",
// }
// for(property in university){
//     console.log(property)
// }


// const numbers = [45, 4, 9, 16, 25];

// let txt = "";
// for (let x in numbers) {
//   txt += numbers[x];
// }
//  console.log(txt)

// // for of

// const myString=" i love briyani"

// for( const element of myString){
//     console.log(element)
// }


// const myString="i love khacchi"

// for(element of myString){
//     console.log(element)
// }

// const myString="i am Imtiajul Amin"

// for(element of myString){
//     console.log(element)
// }



// for of use hoi array te
// for in use hoi object eh




// object key,value,entries

// const university={
//     name:"BGC Trust",
//     dept:"CSE",
//     batch:"26th",
//     session:"2022",
// }

// const keys= Object.keys(university)
// const values= Object.values(university)
// const entries= Object.entries(university)

// console.log(keys)
// console.log(values)
// console.log(entries)


// short hand
// let x=4
// let y=5
// z=x+y
// const university={
//     name:"BGC Trust",
//     dept:"CSE",
//     batch:"26th",
//     session:"2022",
//     x,
//     y,
//     z,
// }

// const entries=Object.entries(university)
// console.log(entries)


// default parameter

// function myFunc(x=10){
//   return x;
// }
// console.log(myFunc())


// spread operator

// const numbers=[1,2,3,4,5,6,7,8]

// const newArray=[...numbers,9,10,11,12,13,14]
// console.log(newArray)

// const a=[...numbers]

// numbers.push(4)

// console.log(numbers)

// const numbers=[1,2,3,4,5,6,7,8,9,10]
// const newArray=[...numbers,20,21,22,21,23,30]
// console.log(newArray)




// object spread operator

// const myObj1={
//     x:1,
//     y:2,
// }

// const myObj2={
//     a:1,
//     b:2,
// }
// console.log({...myObj1,...myObj2})


// rest operator 

// function myFunc(...params){
//     console.log(params)

// }
// myFunc(4,5,6,7,8,9,10)



// disturcturing

//  const university={
//         name:"BGC Trust",
//         dept:"CSE",
//         batch:"26th",
//         session:"2022",
//         // x,
//         // y,
//         // z,
//     }


//     const{name:title,dept,batch,session}=university;

//     console.log(title)
//     console.log(dept)
//     console.log(batch)
//     console.log(session)

// const university={
//     name:"BGC Trust",
//     dept:"CSE",
//     batch:"26th",
//     session:"2022",
//     subject:{
//         cse444:"computer fundamental"
//     }
//     // x,
//     // y,
//     // z,
// }

// const {subject:{cse444}}=university
// console.log(cse444)


// const university={
//     name:"BGC Trust",
//     dept:"CSE",
//     batch:"26th",
//     session:"2022",
//     subject:{
//         cse444:"computer fundamental"
//     }

// }

// const{subject:{cse444}}=university


// console.log(cse444)

// array distructuring

// const array=[1,2,3,[4,5,6],7,8,9]
// const[,,,[,a,],b]=array
// console.log(a,b)


// swap 


// let a=1;
// let b=2;


// [b,a]=[a,b]

// console.log(a,b)



// tamplete literal


// function modifier(string,...values){
//   const m=string.reduce((previousValue,current)=>{
//        return previousValue+current+(values.length?"Mr."+values.shift():"")
//   },"")
//   return m
// }



// const a="shakib";
// const b="tamim";


// console.log(modifier`we love ${a} and ${b}`)



// function modifier(string,...value){
//     const m=string.reduce((previousValue,current)=>{
//         return previousValue+current+(value.length? "Mr."+value.shift():"")
//     },"")
//     return m

// }


// const a="shakib";
// const b="tamim";


// console.log(modifier`we love ${a} and ${b}`)



// let array=[1,2,3,4,5,6,7,8,9,10]
// const numbers = new Set(array);


// console.log(numbers)


// let numbers=new Set()

// numbers.add(5).add(6).add(7)

// const newarray=[...numbers]
// console.log(newarray)



// let a=new Set([1,2,3])
// let b=new Set([4,2,3])


// let union=new Set([...a,...b])

// console.log(union)

// let interjection=new Set([...a].filter(x=>b.has(x)))
// console.log(interjection)


// let difference=new Set([...a].filter(x=>!b.has(x)))
// console.log(difference)


// let array=["C","C++","JS","PS","Java"]

// console.log(array.copyWithin(3,1,2))


// globalThis run window & node 

``

