// Change value of isSuccess variable to call resolve or reject
const isSuccess = true;

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isSuccess) {
      resolve("Success! Value passed to resolve function");
    } else {
      reject("Error! Error passed to reject function");
    }
  }, 2000);
});

// Will run first
console.log("Before promise.then()");

// Registering promise callbacks
promise.then(
  // onResolve will run third or not at all
  (value) => {
    console.log("onResolve call inside promise.then()");
    console.log(value); // "Success! Value passed to resolve function"
  },
  // onReject will run third or not at all
  (error) => {
    console.log("onReject call inside promise.then()");
    console.log(error); // "Error! Error passed to reject function"
  }
);

// Will run second
console.log("After promise.then()");

// function makeSizer(size) {
//   return function () {
//     document.body.style.fontSize = size + "px";
//   };
// }

// const size12 = makeSizer(12);
// const size14 = makeSizer(14);
// const size16 = makeSizer(16);

// document.getElementById("size-12").onclick = size12;
// document.getElementById("size-14").onclick = size14;
// document.getElementById("size-16").onclick = size16;

// function showHelp(help) {
//   document.getElementById("help").innerHTML = help;
// }

// фабричная функция (function factory)
// Вместо того, чтобы делить на всех одно окружение,
//   функция makeHelpCallback создаёт каждому из замыканий
//   своё собственное, в котором переменная item указывает
//   на правильный элемент массива helpText.
// function makeHelpCallback(help) {
//   return function () {
//     showHelp(help);
//   };
// }

// function setupHelp() {
//   const helpText = [
//     { id: "email", help: "Ваш адрес e-mail" },
//     { id: "name", help: "Ваше полное имя" },
//     { id: "age", help: "Ваш возраст (Вам должно быть больше 16)" },
//   ];

//   for (let i = 0; i < helpText.length; i++) {
//     const item = helpText[i];
//     document.getElementById(item.id).onfocus = makeHelpCallback(item.help);
//   }
// }

// setupHelp();

// Замыкание (англ. closure) в программировании
// — функция первого класса, в теле которой присутствуют
// ссылки на переменные, объявленные вне тела этой функции
// в окружающем коде и не являющиеся её параметрами.
// Например:
// size12, size14  и size16 и — это примеры замыканий.
// Эти функции делят одно определение тела функции,
// но при этом они сохраняют различные окружения.
// В окружении функции size12 size — это 12,
// в то время как в окружении size14 size — это 14...
// Замыкания полезны тем, что позволяют связать данные
//   (лексическое окружение) с функцией, которая работает с этими
// данными.Очевидна параллель с объектно - ориентированным программированием,
//   где объекты позволяют нам связать некоторые данные(свойства объекта)
//   с одним или несколькими методами (изоляция и инкапсуляция).

//   Следовательно, замыкания можно использовать везде,
//     где вы обычно использовали объект с одним единственным методом.

// let clientCounter = 18;
// const maxClients = 25;

// while (clientCounter < maxClients) {
//   console.log(clientCounter);
//   clientCounter += 1;
// }

// let password = "";

// do {
//   password = prompt("Введите пароль длиннее 4-х символов", "");
// } while (password.length < 5);

// console.log("Ввели пароль: ", password);

// const target = 7;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//   sum += i;
// }

// console.log(sum);

// const max = 10;
// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }

// Выносим варианты в массив
// const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
// const fruit = "cherry";
// // Проверяем наличие элемента
// const hasFruit = redFruits.includes(fruit);

// if (hasFruit) {
//   console.log(`${fruit} is a red fruit!`);
// }

// for (let i = 0; i < 5; i++) {
//   const a = 20;
//   console.log(a); // 20

//   if (i === 2) {
//     const b = 30;
//     console.log(a); // 20
//     console.log(b); // 30
//   }

// if (i === 3) {
//   console.log(a); // 20
