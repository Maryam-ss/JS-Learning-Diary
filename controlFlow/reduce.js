// .reduce() > calculate single value

// you need a total  sun average  ...you want to count or group  items....you want to convert an array into an object

let array = [1,2,3,4,5]

let sumWithInitial = array.reduce((accmulator,current,initial)=>{
    // console.log(current);
    
    return accmulator+current
},0)

// console.log(sumWithInitial);

const items = [
  { name: 'apple', price: 30 },
  { name: 'banana', price: 20 },
  { name: 'orange', price: 50 }
];

const total = items.reduce((acc,items,initial)=>{
    console.log(items.price);
    
   return acc+ items.price
},0)
console.log(total);


