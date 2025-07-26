//inheritance and polymorphism 

class User {
    constructor(name,age){
        this.name = name;
        this.age = age ;

    }
    printInfo(){
        console.log(`My name is ${this.name} and my age is ${this.age}.`)

        
    }
}
class Admin extends User{
    constructor(name,age,role){
        super(name,age)
        this.role = role;
    }
    printInfo(){
        super.printInfo();
        console.log(`the role is ${this.role}`);
        
    }
    greet(){
        console.log(`Hello ${this.name} ! , Welcome to the admin panel.`);
        
    }
}
class Developer extends User {
    constructor(name,age){
        super(name,age)
        this.role = "Developer"


    }
    printInfo(){
       super.printInfo();
       console.log(`role is ${this.role}`);
       
    }
    greet(){
        console.log(`Hello ${this.name} ! welcome to the developer panel.`);
        
    }

}
const person = [
    new Admin ("eshal",20 , "Admin"),
    new Developer ("Kaneez " , 45 )
];
person.forEach(p=>{
    p.printInfo();
    p.greet();
});
