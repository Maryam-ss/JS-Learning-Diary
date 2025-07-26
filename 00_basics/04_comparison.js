console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2==1);
console.log(2!=1);
console.log();

//when you dont compare same datatype
console.log("2">1); //js automatecally conovert string into number
console.log("02">1);

console.log(null>0);//this type of convert confuse you so avoid it
console.log(null==0);
console.log(null>=0); //the reason is that an equality check == and comparison >,<,>=, <= work differently.comparison convert  null to number , treating it as 0. thatss why (3) null >=0 is ture and (1) null >0 is false


console.log(undefined==0);//undefined always return false whatever you comapre with undefined
//********comparison and equility check are work differently****

//srict check ===
//not only check value but also sstrictly like
console.log("2"===2);


