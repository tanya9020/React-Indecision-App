class Person {
    constructor(name = 'Anonymous', age=0){
        this.name=name,
        this.age = age;
    }
    getDescription(){
        return `${this.name} is ${this.age} year(s) old.`
    }

    getGreeting(){
        return `Hi. I am ${this.name}.`
    }
}

class Travellor extends Person{
    constructor(name,age,homeLocation){
        super(name,age);
        this.homeLocation=homeLocation;
    }

    hasHomeLocation(){
        return !!this.homeLocation;
    }

    getGreeting(){
        let greeting=super.getGreeting();

        if(this.hasHomeLocation()){
            greeting+=` I am coming from ${this.homeLocation}.`
        }

        return greeting;
    }

}

const person1= new Travellor('Tanya',21,'USA');
const person2= new Travellor();
console.log(person1.getGreeting());
console.log(person2.getGreeting());