// const coding=["js","ruby","java","python","css"]

// const values =coding.forEach( (item)=>{
//     console.log(item);
//     return item
    
// })
// console.log(values);

// forEach dont return values

const myNums =[10,9,8,7,6,5,,4,3,2,1]

// filter b apne andhar callback hi leta h we should give condition its basics of filter and it used alott
// If you use curly brackets {} and write return, it's called an:
// 👉 Explicit Return
//If you don’t use curly brackets and just write the expression, it’s an:
// 👉 Implicit Return

// let newNums =myNums.filter((num)=> {
//    return num>5
// //    if you start scope you must write return keyword okk
// })
// console.log(newNums);

const newNums =[]

myNums.forEach((num)=>{
if(num>=4){
    newNums.push(num)

}
})
// console.log(newNums);

// objects in array
const books=[
    { title: 'book1' , gener:'fiction', publisher:19883, edition: 2007},
    { title: 'book2' , gener:'non-fiction', publisher:1988 ,edition: 2001},
    { title: 'book3' , gener:'novel', publisher:1992 ,edition: 2000},
    { title: 'book4' , gener:'peer e kamil', publisher:1998 , edition: 2009},
     { title: 'book5' , gener:'namal', publisher:1994 , edition: 2003},
     { title: 'book6' , gener:'love story', publisher:1986 , edition: 2009},
     { title: 'book7' , gener:'rvenge', publisher:2008 , edition: 2020},
     { title: 'book8' , gener:'fiction', publisher:2023 , edition: 2009},
     { title: 'book9' , gener:'trouma', publisher:1988 , edition: 2025},    

]

let userBooks =books.filter( (bk)=> bk.gener ==="fiction")


 userBooks = books.filter( (bk)=>{
    return bk.publisher>=2000 && bk.gener ==="rvenge"
})
console.log(userBooks);
