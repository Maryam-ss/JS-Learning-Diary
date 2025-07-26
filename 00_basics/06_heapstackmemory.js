//****meemory
//stack,heap types of memory
//stack used in primitive types(copy of original) 
//heap used in nonprimitive(original value ka reference jo b change hoga wo original value ma hi ho ga)
let myYoutube =  "maryam";
let anotherName = myYoutube;
anotherYoutube = "maryamkhan";
console.log(anotherName);

console.log(anotherName);
//nonprimitive objectt in heap
let userOne ={
    email: "useremail.com"
   
}
let userTwo = userOne;
userTwo.email ="maryam#=@email.com"
console.log(userOne.email);
console.log(userTwo.email);
