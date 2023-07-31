// 1
// Створити масив з трьох чисел. Змінити значення другого елемента масиву на 10.
const numbers = [1, 2, 3];
numbers[1] = 10;
console.log(numbers);
// 2
// Створити масив із трьох рядків. Додати до масиву ще одну рядків.
const clients = ["Harry", "Poly", "Tom"];
 clients[3] = "Ben";
 console.log(clients);
// // 3
// // Створити скрипт який поверне суму всіх чисел в масиві
 const numbersArray = [1, 2, 3, 4, 5];
 let total = 0;
 for (const number of numbersArray) {
     total += number; 
 }
 console.log(total);
// // 4
// // Створити масив з 5-ти чисел. Вивести на екран всі елементи масиву за допомогою циклу for
 const arrayFiveNumbers = [1, 2, 3, 4, 5]
 for (let index = 0; index < arrayFiveNumbers.length; index += 1) {
     const element = arrayFiveNumbers[index];
     console.log(element);
 }

 for (const numberOfArray of arrayFiveNumbers) {
     console.log(numberOfArray);
}
// 5
// Створити масив із 5-ти рядків. Вивести на екран кожен рядокз масиву, який містить більше 5-ти символів
const arrayStrings = ["aa", "bbbbbb", "cc", "ddddddd", "ee"]
for (const str of arrayStrings) {
    if (str.length > 5) {
        console.log(str);
    }
}
// 6
// Створити масив з 10-ти чисел. Знайти та вивести на екран максимальне значення з масиву
const arrayTenNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const lastElementIndex = arrayTenNumbers.length - 1;
console.log(arrayTenNumbers[lastElementIndex]);
// 7
// Створити масив з 10-ти чисел. Знайти всі парні числа в масиві та вивести їх на екран
const numbersArrayTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const doubleNumber of numbersArrayTen) {
    if (doubleNumber % 2 === 1) {
        continue;
      }
      console.log(doubleNumber);
}