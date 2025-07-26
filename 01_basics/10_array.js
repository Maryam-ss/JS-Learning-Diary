 //array
const arr1 = [0,1,2,3,4,5]

const arr2 =["maryam","rehman","sidra"]

const arrThree= new Array("burger","pizaa","shawarma") //new reserved word make it object

console.log(arr1[1]);
//arrray method
//push add new value
arr1.push(6,7);
console.log(arr1);

//pop delete the last value
arr1.pop(7);
console.log(arr1);

//unshift enter value in the first and the remaining value shift
arr1.unshift(0)
console.log(arr1);

//includes  true false ma ans deta 
console.log(arr1.includes(9))
console.log(arr1.indexOf(6));
;

//.join


//replace
//append

//slice or splice




//shalow copy example1 
let carNames = ["volvo","mehran",["BMW","alto"]]

let cars = [...carNames];
cars[0]="no car";
cars [2][0] = "bike","honda"

console.log(carNames);
console.log(cars);


//console.log(carName[0]);

let original ={
    name :"maryam",
    address:{
        city:"Lahore,"
        
    }
};
//shallow copy

//opy.name is a primitive (string), so it's fully copied.

/*copy.address is an object, and only the reference is copied — not the object itself.
because primitive use stack memory here we can copy it but object is a nonprimitive so it use heap memory so here its chnge its original yeahhh! thats the concept i get it

*/
let copy = {...original};

copy.name = "Ahmad";   //changes only in copy 
copy.address.city = "karachi"; //changes in both!

console.log(original.name);
console.log(copy.name);

console.log(original.address.city);
console.log(copy.address.city);

//******DEEP COPY***** */
/*  deep copy creates a completely new copy of an object or array, including all nested objects and arrays.

This means:

Changing the deep copy will not affect the original at all — even at deep levels.*/


let deep = JSON.parse(JSON.stringify(original));
deep.address.city ="islamabad";


console.log(original.address.city);


console.log(deep.address.city);






































































































































































































































































































































































