const marvel_heroes = ["thor","ironman","spiderman"]
const dc = ["superman","flash","batman"]

///arrray as a single element her
// console.log(marvel_heroes.push(dc));

// console.log(marvel_heroes);

const all = marvel_heroes.concat(dc)
console.log(all);

//spread 
const allNew = [...marvel_heroes,...dc]
console.log(allNew);



const arrayinarr = [1,2,3,[4,5,6,7,[8,9,10]]]

const real_arrayinarr =arrayinarr.flat(2)
console.log(real_arrayinarr);

console.log(Array.isArray("hitech")) //this.array check if value is array
// console.log(Array.isArray([1, 2, 3]));  // true
// console.log(Array.isArray("hello"));   // false
console.log(Array.from("hitech")); // Converts any iterable or array-like object (like strings, Sets, Maps, etc.) into a new array.
console.log(Array.from({name:"hitech"}));
//array.of (Makes array from given arguments)

