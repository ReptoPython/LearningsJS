// Change user info
// const user = {
//     name: 'Mango',
//     age: 20,
//     hobby: 'html',
//     premium: true,
// };
//
// const UserDef = {
//     name: "Mango",
//     hobby: "skydiving",
//     mood: "happy",
//     premium: false,
//     age: 20
// }
//
// let changeData = Object.assign(user, UserDef);
// for (key in changeData){
//     console.log(key + ":" + changeData[key]);
// }

// function countProps (obj){
//     return(Object.keys(obj).length)
// }
//
// console.log(countProps({})); // 0
// //console.log(countProps({ name: 'Mango', age: 2 })); // 2
// //console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3

// function findBestEmployee(employees){
//     let MaxTask = 0;
//     let quantTask = Object.values(employees)
//     for (i = 0; i <quantTask.length; i++){
//         if (quantTask[i]> MaxTask){
//             MaxTask = quantTask[i]
//         }
//     }
//     return(Object.keys(employees).find(key => employees[key] === MaxTask));
// }
// console.log(findBestEmployee({ann: 29, david: 35, helen: 1, lorence: 99,}),); // lorence
// console.log(findBestEmployee({poly: 12, mango: 17, ajax: 4,}),); // mango
// console.log(findBestEmployee({lux: 147, david: 21, kiwi: 19, chelsy: 38,}),); // lux

// function countTotalSalary(employees){
//     let TotalSalary = 0;
//     const salarys = Object.values(employees)
//     for (i = 0; i<salarys.length;i++){
//         TotalSalary += salarys[i]
//     }
//     return(TotalSalary);
// }
//
// console.log(countTotalSalary({})); // 0
// console.log(countTotalSalary({mango: 100, poly: 150, alfred: 80,}),); // 330
// console.log(countTotalSalary({kiwi: 200, lux: 50, chelsy: 150,}),); // 400

// #5
// const products = [
//     { name: 'Радар', price: 1300, quantity: 4 },
//     { name: 'Сканер', price: 2700, quantity: 3 },
//     { name: 'Дроид', price: 400, quantity: 7 },
//     { name: 'Захват', price: 1200, quantity: 2 },
// ];
//
// function getAllPropValues(arr,prop){
//     let output = [];
//     let serchIndex;
//     arr.forEach(element => {
//         serchIndex = Object.keys(element).indexOf(prop)
//         if (serchIndex>=0){
//             output.push(Object.values(element)[serchIndex])
//         } else{
//             return []}
//     });
//     return(output);
// }
//
// console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']
// console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]
// console.log(getAllPropValues(products, 'category')); // []

// const products = [
//     { name: 'Радар', price: 1300, quantity: 4 },
//     { name: 'Сканер', price: 2700, quantity: 3 },
//     { name: 'Дроид', price: 400, quantity: 7 },
//     { name: 'Захват', price: 1200, quantity: 2 },
// ];
// function calculateTotalPrice(allProdcuts, productName){
//     let totalSum = 0;
//     let search = allProdcuts.find(obj => obj.name === productName)
//     totalSum = search.price * search.quantity
//     return totalSum
// }
// console.log(calculateTotalPrice(products, 'Радар')); // 5200
// console.log(calculateTotalPrice(products, 'Дроид')); //2800

// //7
// const account = {
//     balance: 0,
//     transactions: []
// }
//
// function createTransaction(amount, type){
//     let currentId = 1;
//     for (let i = currentId;i < account.transactions.length + 1;i++){
//         currentId++
//     }
//     account.transactions.push({id:currentId,type:type,amount:amount})
//     return account.transactions
// }
//
//
// function deposit(amount){
//     account.balance += amount
//     return createTransaction(amount,'deposit')
// }
// console.log(deposit(300))
// console.log(deposit(500))
// console.log(deposit(200))
//
//
// function withdraw(amount){
//     account.balance -= amount
//     return createTransaction(amount,'withdraw')
// }
// console.log(withdraw(50))
// console.log(withdraw(100))
// console.log(withdraw(50))
//
// function getBalance(accountData){
//     for (key in accountData) {
//         if (key === 'balance') {
//             return(key + ":" + accountData[key])
//         }
//     }
// }
// console.log(getBalance(account))
//
// function getTransactionDetails(id){
//     transactionsArray = account.transactions
//     let output = transactionsArray.find(obj =>{
//         return obj.id === id})
//     return output;
// }
// console.log(getTransactionDetails(6))
// function getTransactionTotal(type){
//     transactionsArray = account.transactions
//     return transactionsArray.filter(obj =>{return obj.type === type})
//
// }
// console.log(getTransactionTotal('withdraw'))
