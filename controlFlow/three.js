const myObject={
    js:"javascript",
    cpp:"C++",
    rb:"ruby",
    swift :"swift by apple ",
}
// for in loop
for (const key in myObject) {
//    console.log(myObject[key]);
      
      console.log(`${key} shortcut is for ${myObject[key]}`);
      
   
}
const programing = ["s","a","d","a","f"]

for (const key in programing) {
   
           console.log(`${programing[key]}`);
           
        
    }
const map = new Map

map.set('PK','Pakistan')
map.set('in',"India")
map.set('uk',"united states of america")

for (const key in map) {
    console.log(key);
    
    
    }
    // map is not iterative
// object>forin
// array>forof
// array aye ga ga tu ap foreach loop le ge

