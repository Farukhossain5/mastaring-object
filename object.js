// 1. create object using object litetals 
const player = {};
player.name = 'small nirob';
player.speasialty = 'batsman';
player.bat = function () {
    console.log('swing your bat')
}
console.log(player);
player.bat();

const student = {
    name: 'pandey',
    job: 'khai andey',
    ball: function () {
        console.log('throw the ball')
    },
    salary:10000
}


//2. object constructor
const person = new Object();
console.log(person);

// 3. object create method
const atel = Object.create(student);
console.log(atel.name);

// 4. class
class Person{
    name = 'abul';
    address = 'sodor ghat';
    constructor(age) {
        this.age = age;
    }
}
const person1 = new Person(56);
console.log(person1);