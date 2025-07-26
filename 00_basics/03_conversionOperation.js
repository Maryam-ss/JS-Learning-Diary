//let score = "ab212cz"; lets check
let score = null;
console.log(typeof score);
console.log(typeof (score));

let valueInNumber =Number(score); //conversion string to number

console.log(typeof valueInNumber);
console.log(valueInNumber);
//"33" => 33
/* "33abc"=>NaN
    true=>1
    false=>0
        letes try more

*/
let isloggedIn =1

let booleanIsLoggedIn = Boolean(isloggedIn);
console.log(booleanIsLoggedIn);
/*
1=>true 0=>flse
""=>false
"mariyam"=>true

*/ 
let someNumber =33
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)
//Operations****
let value=3;
let negValue = -value;
console.log(negValue);


let str1 = "hello";
let str2 = "hello2";
let str3 = str1+str2;
console.log(str3);
console.log("1"+2);  //problem
console.log("1"+2+2);
console.log(1+2+"5");//tp primitive means to convert jo b pehlay aye ga if string first h tu sara string ma howa agr add first then so on dont depend on it its good for maths but not for coding 
console.log((3+4)*5%3); //use parentheseis 


console.log(true);

let num1,num2,num3;
num1 = num2 = num3 = 2 + 2;

let gameCounter =100;
gameCounter++; //pre or postfix pre main pehlay hoti h orpost a pehlay print or bad main increment hoti h
console.log(gameCounter);


