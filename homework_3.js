//Перепишіть функцію, використовуючи '?' або '||'
//function checkAge(age) {
//if (age > 18) {
//return true;
//} else {
//return confirm("Батьки дозволили?");
//}
//}

// function checkAge(age) {
//   if (age > 18) {
// return console.log("?");
//   } else {
// return confirm("Батьки дозволили?");
//   }
// }
// checkAge(27);

//function checkAge(age) {
//return age > 18 || confirm("Батьки дозволили?");
//}
//checkAge(18);

////---2---

//Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b.

// const min = function (a, b) {
//   if (a < b) {
//     return console.log(a);
//   } else {
//     return console.log(b);
//   }
// };
// min(7, 5);

//---3---
// Перепишіть з використанням стрілкових функцій
// Замініть Функціональні Вирази на стрілкові функції у коді нижче:
// function ask(question, yes, no) {
// if (confirm(question)) yes();
// else no();
// }
// ask(
// "Ви згодні?"
// ,
// function() { alert("Ви погодились."); },
// function() { alert("Ви скасували виконання."); }
// );
//
// const ask = (question, yes, no) => {
//   if (confirm(question)) yes();
//   else no();
// };

// ask(
//   "Ви згодні?",
//   () => alert("Ви погодились."),
//   () => alert("No!")
// );
