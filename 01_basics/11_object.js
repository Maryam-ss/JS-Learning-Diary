//objects\

//singleton koi b constructor se banate hei
//objects literals declare of obj
// const mySym = Symbol("key 1")

// const user = {
//      name : "maryam",
//      age : 21 ,
//      [mySym] : "my key 1", //we sqr braket it worrk as a symbol
//      location : "Lahore" ,
//      email : "maryam@gmail.com",
//      isLoggedIn: false ,
//      lastLogInDays : ["Monday"," Tuesday"],

// };

// console.log(user.age);
// console.log(user["email"]);
// console.log(user[mySym]);

// //change
//  user.email ="hellomaryam@email.com";
//  console.log(user);
 
// //  Object.freeze(user)

// // user.email="hellomaryamkhan@gamil.com";
// // console.log(user.email);

// //function koi descramination nhi hota
// user.greeting = function(){
//      console.log("helllo user");
     
// }

// user.greetingTwo = function(){
//      console.log(`hello user ,${this.name}`);
     
// }

// console.log(user.greeting());
// console.log(user.greetingTwo());



//part 2

//object with constructure help

//const tinderUser = new Object()

// const tinderUser = {}
// tinderUser.Id = "123";
// tinderUser.name = "manoo";
// tinderUser.isLoggedIn = false

//console.log(tinderUser);

// const regularUser ={
//      email:"maryam@gmail.com",
//      fullName : {
//           userfullname:{
//                firstname :"maryam",
//                lastname:"khan",
//           }
//      }
// }


// console.log(regularUser.fullName.userfullname);

//combine the object
// const obj1 ={1:"a",2:"b"}
// const obj2 ={3:"a",4:"b"}
// const obj3 = {obj1,obj2}

// const obj3 = Object.assign({},obj1,obj2) //exact value aye gy emply brackets se

// const obj3 = {...obj1,...obj2}


// console.log(obj3);
//database se value aye
// console.log(tinderUser);

// console.log(Objects.keys(tinderUser));//output ka datatype array ho gay h 

// console.log(Objects.values(tinderUser));

// console.log(Object.entries(tinderUser));

//key in object
// for(let key in Object){
//     console.log(key);
//     console.log(values);1
// }
// //destructuring

const course = {
    courseName : "js in hindi",
    price : "9999",
    courseInstructor:"hitech", 
}

//value extend krni h
//course.courseInstructor

const {courseInstructor: instructor} = course  //if you feel the name is long you are give it another

console.log(instructor);

//in navbar prop.company replace by company

// const navbar =({company})=>{
//   //uper company in curly brakets is object destructuring
// }
// navbar(company = "hitech");

// json API values in JSON

// {
//     "name" :"maryam";
//     "courseName": "js in hindi";    
//     "price": "free";
// }

























































































































































































































































































































































































































































































































