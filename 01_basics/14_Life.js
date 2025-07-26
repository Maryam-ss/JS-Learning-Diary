// immedialtely invoked function expressions(IIFE) jo function foran se execute ho jae/global ke variable mens pollution nahi chajiuye

(function chai(){
    console.log('DB connected');
    // global pollution nhi cahiye is functionma
})();  
// name iffe
// semi colon is necessory in invoke

// ()();//syntax :first parenthesis main function declare or second ma functioncall

((name)=>{
    console.log(`two two ${name}`);
    
})('manobilli');
//Javascript execution context > run js in two ways
// code with files > global Execution context >this(ki value browser main window object ma show hota) 

// global execution context
// functional execution context 
// eval execution context 

// code of java >first phse > memory creation face > just variables that you declare un ke liye jageh allocate hota memory allocation
// second phase>execution phase 

// calls > see in browser>visualize kr skty
let val1 = 10
let val2 = 5
function addNumber(num1 ,num2){
    let total = num1 + num2
    return total
}
let result1 = adddNumber(val1,val2)
let result2 = addNumber(10,89)

// step 1> global execution/environment >sab se pehlay disk ma allocate ho ga
// creation phase > sare variable ko akhatha kr ke rakah jata 
// val1 >undefine sare variables ke name le ky os ke ansha a undefined rakah jata val2 undefines >addNumber defination function ke andhar defination jati h 
// in  line 7 result1 or result 2 undefined this is first cycle 
// our third phase execution phase >in this >val1 ki value 10 >val 2 ki vlaue 89 >addNumber kr anshar kuch nahi ho ga execute kuch nhi >result addNumber apna alag execution box banae ga (new environment +execution thread( memory phase +executioncontext))jab b execute krty yeh new box banta >yeh g e c apna kam krne ke bad delete ho jata h>ab jitni bar function aye ga menory phase b or execution ohase b banana pare ga
// memory phase>val1 undefined  val 2 undefined >total undefined

// now in execution context  means processing hoti h >num1 allocates 10 and val 2 num2 allocates 89 in totl 99 >return kaha p eho ga? jo is ka parnt h global exeuction main return hoga to 
// result 2 pe again box bany ga or two phase 
// call stack >LIFO


