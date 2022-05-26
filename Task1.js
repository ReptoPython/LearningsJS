// const name = "Генератор захисного поля";
// let price = 1000;
// console.log("Обрано "+name+",ціна за одиницю "+price+" кредитів");
// let text = `Обрано "${name}", ціна за одиницю ${price} кредитів`;
// console.log(text);

// const total = 100;
// const ordered = 190;
// let text;
// if (ordered <= total){
//     text = "Замовлення отримано, очікуйте дзвінок менеджера!";}
// else{
//     text = "На скаді відсутня бажана кількість тварів!";}
// console.log(text);

// const ADMIN_PASSWORD = 'jqueryismyjam';
// let message;
// Password  = prompt("Введіть пароль")
// if (Password === ADMIN_PASSWORD) {
//     message = "Вітаємо!"
//     alert(message);}
// else if (Password == null) {
//     message = "Відмінено користувачем"
//     alert(message);
// }
//     else{
//     message = "Доступ заборонено, пароль невірний!"
//     alert(message);
// }

// const credits = 23580;
// const pricePerDroid = 3000
// let message;
// OrderQuantity = prompt("Яку кількість дроїдів Ви бажаєте?");
// if ((OrderQuantity*pricePerDroid)<=credits && OrderQuantity !== null){
//     message = `Ви замовили ${OrderQuantity} дроїдів, на рахунку залишилося ${credits-OrderQuantity*pricePerDroid} кредитів`
//     alert(message);
// }
// else if(OrderQuantity === null ){
//     message = "Відмінено користувачем";
//     alert(message);
// }
// else{
//     message = "Недостатньо коштів на рахунку";
//     alert(message);
// }

// let name;
// let cost;
// let message;
// deliveryTo = prompt("Введіть країну доставки").toLowerCase();
// switch (deliveryTo){
//     case "китай":
//         name = "Китай"
//         cost = 100
//         message = `Доставка до ${name} коштує ${cost} кредитів`
//         alert(message);
//         break;
//     case "чилі":
//         name = "Чилі"
//         cost = 250
//         message = `Доставка до ${name} коштує ${cost} кредитів`
//         alert(message);
//         break;
//     case "австралія":
//         name = "Австралія"
//         cost = 170
//         message = `Доставка до ${name} коштує ${cost} кредитів`
//         alert(message);
//         break;
//     case "індія":
//         name = "Індія"
//         cost = 80
//         message = `Доставка до ${name} коштує ${cost} кредитів`
//         alert(message);
//         break;
//     case "ямайка":
//         name = "Ямайка"
//         cost = 120
//         message = `Доставка до ${name} коштує ${cost} кредитів`
//         alert(message);
//         break;
//     default:
//         alert("У вказану країну доставка неможлива!");
// }


let total = 0;
let inputNum;
do{
    inputNum = prompt("Введіть число:");
} while (inputNum !== null){
    total += inputNum;
    alert("Сума значень "+ total);
}
if(inputNum <= 0){
    alert("Було введено не числове значення!");
}
