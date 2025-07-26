// looop iteration
// for

// for (let i = 0; i < 10 ; i++){
//     const element = i;
//     console.log(`outer loop value :${i}`);
    
//     for(j=0 ;j<= 10 ;j++) {
//         console.log(`inner loop value ${j} and inner loop ${i}`);
        

//     }
//     console.log(element);
    
    
    
// }
let myArray = ["flash","batman","superrrman "]
console.log(myArray.length);
for(let index = 0 ; index<myArray.length ; index++){

    const element = myArray[index];
    console.log(element);
    

}

// break and coontinue
for (let index = 0; index <=20; index++) {
   if (index == 5){
    console.log("detected 5");
    break;
    
   }
    console.log(`value of is ${index}`);
    

}
for (let index = 0; index <=20; index++) {
   if (index == 5){
    console.log("detected 5");
    continue;
    
   }
    console.log(`value o fi is ${index}`);
    

}