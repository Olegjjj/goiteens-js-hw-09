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
let numberMax = arrayTenNumbers[0];

for (const iteratorEx of arrayTenNumbers) {
    if (iteratorEx > numberMax) {
        numberMax = iteratorEx
    }
}
console.log(numberMax);
// 7
// Створити масив з 10-ти чисел. Знайти всі парні числа в масиві та вивести їх на екран
const numbersArrayTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const doubleNumber of numbersArrayTen) {
    if (doubleNumber % 2 === 1) {
        continue;
      }
      console.log(doubleNumber);
}





// experement
// 6
const max = Math.max.apply(null, arrayTenNumbers)
console.log(max);





                                            // additional //

// 1
const arr1 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
arr1[arr1.length] = 22;
console.log(arr1.length);
// 2
const arr2 = [1, 2, 3, 4, 5, 6, 7];
for (const ar2 of arr2) {
    console.log(ar2);
    console.log(typeof ar2);
}
// 3
const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let totalArr3 = 0;
for (const ar3 of arr3) {
    if (ar3 % 2 === 0) {
        totalArr3 += ar3;
      }
}
console.log(totalArr3);
// 4
arr4 = [1, 2, 3, 4, 5]
arr5 = [6, 7, 8, 9, 10]
totalArr4 = 0;
totalArr5 = 0;
totalFinal = 0;
for (const ar4 of arr4) {
        totalArr4 += ar4;
}
for (const ar5 of arr5) {
        totalArr5 += ar5;
}
totalFinal = totalArr4 + totalArr5;
console.log(totalFinal);