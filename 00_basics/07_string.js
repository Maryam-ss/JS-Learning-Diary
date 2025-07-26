//string ka model syntax use krna cahiy
const name ="maryam"
const repoCount = 50
const age = 21
//console.log(name+ repoCount +age);
console.log(`hello my name is ${name}my repoCount is ${repoCount}and my age is ${age}`);
//string can be used as object wwith reserved word new
const gameName = new String ("maryamkhann")
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.charAt(2)); //hoi b alaphabet ya number kon si posotion pr h like k kon si position pr h


console.log(gameName.indexOf('k')); 
const newString = gameName.substring (0,6)
console.log(newString);

const anotherString =gameName.slice [0,4]    //in.slicec wecan give negative value in this it isi reverse
console.log(anotherString);

//trim  (remove the starting or ending spaceor replace
const newStringOne =  "  himanoo "
console.log(newStringOne);
console.log(newStringOne.trim())   ;

const url =" http://hitech.com/hitesh/%20chaudhary"
console.log(url.replace("%20",'_'))
console.log(url.includes('sundhar'));
