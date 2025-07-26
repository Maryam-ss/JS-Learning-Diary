// const userEmail = [];

// if(userEmail){
//     console.log("got user email");
// }else{
//     console.log("don't have user email");     
// }
// truthy values :"0" , 'false',[],{},function (){}
/// falsy values 

// false, 0,-0, BigInt 0n , "" , null , undefined ,NaN  

// if (userEmail.length ==== 0){
//     console.log("array is empty")
// }

const emptyObj = {}
if (Object.keys(emptyObj).length === 0){
  console.log("Object is empty");
  
  
}
// Nullish coalescing Operation (??):null undefined
// jab  ap data base se data le gy directly reponse nahi milta tu do values ati h ya tu values aye ya null ya undefined
// null hotu null kr do undefined ho to undefined ker do ya value hotu value assign kr diem
let val1 ;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 34
// val1 = 10 ?? null
// val1 = null ?? undefined
// val1 = undefined ?? null
// val1 = null ?? null
val1 = null ?? 10 ?? 45
console.log(val1);

// Ternary operator>its a small syntax of if else
  // condition ? ture : false
const iseTeaPrice =100
iseTeaPrice <=89 ? console.log("its less than 90") : console.log("yeah you can grab a Tea!enjoy it")


