// for of
// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5,6,7]

for (const num of arr) {
    console.log(num);
    
    
}
const greeting = ("hello guys")
for (const n of greeting) {
    console.log(`each charactor is ${n}`);
    
    
}

// maps>like array >change in minor in iteration>it has unique value map is a object>it has unique values
const map = new Map


map.set("PK","Pakistan")
map.set("IN","India")
map.set("London","UK")


console.log(map);


for (const[ key,value ]of map) {
    console.log(key,':-',value);
    
    
}

const myObject={
    'game1':'NFS',
   ' game2':"bluebells",
}
// for (const [key,value] of myObject) {
//     console.log(key,":-",value);
    
    
// }
// map can be ileterate in this way but object cant be iterate so here is another methods for object iterate we will discuss it 

//


