// function Account(obj) {
//     this.login = obj.login;
//     this.email = obj.email;
//     Account.prototype.getInfo = function (){
//         console.log(`Login: ${this.login}, Email: ${this.email}`)
//     }
// }
//
// const mango = new Account({
//     login: 'Mangozedog',
//     email: 'mango@dog.woof',
// });
//
// console.log(Account.prototype.getInfo); // function
//
// mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof
//
// const poly = new Account({
//     login: 'Poly',
//     email: 'poly@mail.com',
// });
//
// poly.getInfo(); // Login: Poly, Email: poly@mail.com

//#2
// class User{
//     constructor({name,age,followers}){
//         this.name = name;
//         this.age = parseInt(age);
//         this.followers = parseInt(followers);
//     }
//     getInfo (){
//         console.log(`User ${this.name} is ${this.age} years old and has ${this.followers} followers`)
//     }
// }
//
// const mango = new User({
//     name: 'Mango',
//     age: 2,
//     followers: 20,
// });
//
// mango.getInfo(); // User Mango is 2 years old and has 20 followers
//
// const poly = new User({
//     name: 'Poly',
//     age: 3,
//     followers: 17,
// });
//
// poly.getInfo(); // User Poly is 3 years old and has 17 followers

// //#3
// class Storage{
//     constructor(array) {
//         this.items = array;
//         }
//     getItems(){
//         console.log(this)
//     }
//     addItem(itemName){
//         this.items.push(itemName);
//     }
//     removeItem(itemName){
//         this.items = this.items.filter(item => item !== itemName)
//     }
//
// }
//
// const storage = new Storage([
//     'Нанитоиды',
//     'Пролонгер',
//     'Железные жупи',
//     'Антигравитатор',
// ]);
//
// const items = storage.getItems();
// console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]
// storage.addItem('Дроид');
// console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]
// storage.removeItem('Пролонгер');
// console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]

//#4
// class StringBuilder{
//     constructor(value) {
//         this._value = value.toString();
//     }
//     getInfo(){
//         console.log(this._value)
//     }
//     append(str){
//         this._value = this._value + str
//     }
//     prepend(str){
//         this._value = str + this._value
//     }
//     pad(str){
//         this._value = str + this._value + str
//     }
// }
//
// const builder = new StringBuilder('.');
// builder.getInfo()
// builder.append('^');
// console.log(builder._value); // '.^'
// builder.prepend('^');
// console.log(builder._value); // '^.^'
// builder.pad('=');
// console.log(builder._value); // '=^.^='

//#5
class Car {
    constructor({maxSpeed,price,speed=0,isOn = false, distance = 0 }) {
        this.maxSpeed = maxSpeed;
        this.speed = speed ;
        this.isOn = isOn ;
        this.distance = distance;
        this.price = price;
    }
    static getSpecs(Car) {
        console.log(`maxSpeed: ${Car.maxSpeed}, speed: ${Car.speed}, isOn: ${Car.isOn}, distance: ${Car.distance}, price: ${Car.price}`)
    }
    turnOn(){
        if (!this.isOn){
            this.isOn = true
        }
    }
    turnOff(){
        if(this.isOn){
            this.isOn = false;
            this.speed = 0
        }
    }
    accelerate(value){
        if(this.speed >= 0 && this.speed < this.maxSpeed)
        this.speed += value
    }
    decelerate(value){
        if(this.speed > 0 && this.speed <= this.maxSpeed)
            this.speed -= value
    }
    drive(hours){
        this.distance += this.speed * hours
    }

}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000