// 
const myNumbers = [8,3,5,9,1,5,3,3,6,2]

// .map(automatically return value)
// const newNums = myNumbers.map( (item)=> {return item+10})
// chaining > we can use differt map filter etc at once jitna mrzi laga lo 
const newNums = myNumbers
                   .map((num)=>num*10) 
                   .map((num)=>num+1)
                   .filter((num)=>num>=50)

console.log(newNums);
