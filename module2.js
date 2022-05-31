// function LogItems(array){
//   for (let i=0;i<array.length;i++){
//       console.log(i+1 + "-" + array[i])
//   }
// }
//
// LogItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

// function calculateEngravingPrice(message, pricePerWord){
//     let  wordcount = message.split(" ").length;
//     let price = parseInt(wordcount) * pricePerWord;
//     console.log(`Ціна гравіювання ${price}`)
// }
// calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40);


// function findLongestWord(string) {
//     const srtArr = string.split(" ");
//     console.log(srtArr);
//     let maxLength = 0;
//     let word;
//     for (i=0; i<srtArr.length; i++){
//         if (srtArr[i].length > maxLength){
//             maxLength = srtArr[i].length;
//             word = srtArr[i];
//         }
//     } return(word);
// }

// //console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// //console.log(findLongestWord('Google do a roll'));
// console.log(findLongestWord('May the force be with you')); // 'force'

// function formatString(string){
//     const length = 40;
//     let stringLenht = string.length;
//     console.log(stringLenht);
//     if (stringLenht > length){
//         let newString = string.slice(0, length);
//         return(newString + "...")
//     } else{
//         return (string);
//     }
// }
// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));

// function checkForSpam (message){
//     const words = ['sale','spam'];
//     const spamCheck = [];
//     let newMessage = message.toLowerCase();
//     words.forEach(element => spamCheck.push(newMessage.includes(element)));
//     if (spamCheck.includes(true)){
//         console.log("IT'S SPAM!")
//     } else{
//         console.log("OK. NOT A SPAM")
//     }
// }
// console.log(checkForSpam('Get best  sale offers now!')); // true
// //console.log(checkForSpam('[SPAM] How to earn fast money?')); //true

//Func sumofarray
// const numbers = [];
// let total = 0;
// let inputNum;
// do{
//     inputNum = prompt("Enter a number");
//     if (isFinite(inputNum)){
//         if(inputNum !== null){
//             numbers.push(inputNum);
//         }
//     } else{
//         alert("It's not a number! Try again")
//     }
// } while (inputNum !== null)
// {
//     if (numbers.length === 0) {
//         alert("Array is Empty!")
//     } else {
//         let numArray = numbers.map(Number);
//         console.log(numArray);
//         for (let i = 0; i < numArray.length; i++) {
//             total += numArray[i]
//         }
//         alert(`Сума значень дорівнює ${total}`);
//     }
// }

// //Task7(optional)
// const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
//
// function isLoginValid(login){
//     if (login.length >= 4){
//         if(login.length <= 16){
//             return true;
//         } else{
//             return false;}
//     } else{
//         return false;
//     }
// }
//
// function isLoginUniq(allLogins,login){
//     if (isLoginValid(login) === true){
//         if(!allLogins.includes(login)){
//             return true;
//          }
//         return false;
//     }
// }
//
// function addLogin(allLogins,login){
//     if (isLoginUniq(allLogins,login) === true){
//         allLogins.push(login);
//         return("Логін успішно додано");
//     } else if (isLoginValid(login) === false){
//         return ("Помилка! Логін має бути від 4 до 16 символів")
//     } else{
//         return("Такий логін вже існує, введіть інший логін");
//     }
// }
//
// console.log(addLogin(logins,"Mango"))
// //console.log(addLogin(logins, 'Ajax'));
// //console.log(addLogin(logins, 'robotGoogles'));
// //console.log(addLogin(logins, 'Zod'));
// //console.log(addLogin(logins, 'jqueryisextremelyfast'));