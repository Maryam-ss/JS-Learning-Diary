/* data memory ma kis tarah store hein or kis tarah access kar skty isi bases pe two categorise 
/*primitive (  call  by value as acopy
  7types: string , number, boolean,null,undefined ,symbol(value ko unique banay ke liye)bigInt(scientific value,largest value)
)and js dont neeed to define type
e.g  in js we dont define type*/
const score =23;
const scoreValue = 100.3;
const isLoggedIn = false;
const outSideTemp = null
let userEmail; //undefined
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id);
console.log(anotherId);
console.log(id === anotherId);



/*
non primitive reference type (jin ka reference directly acceesss kr skte )*/
//array ,objects ,functions 
//
const heros =["maryam","waseem ","abdullah",34]
console.log(heros);

let myObj ={
  name:"maryam",
  age:21,

}
const myfunction =function(){
 console.log("hello");
 
}
console.log(typeof outSideTemp)




