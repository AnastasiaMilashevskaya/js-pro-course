//№1
//Создать массив из 10 чисел. Необходимо создать новый массив, в котором числа будут возведены в квадрат. Например: [1,2,3] -> [1,4,9].

//Вариант 1

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let mapped = arr.map((x) => Math.pow(x, 2));
console.log(mapped);

//Вариант 2

Array.prototype.square = function () {
  let arr = [];
  this.map(function (obj) {
    arr.push(obj * obj);
  });
  return arr;
};
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr.square());

//№2
//Создать массив из 20 чисел. Необходимо высчитать сумму всех элементов.

let array = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
let sum = array.reduce((prev, current) => prev + current);

//№3
//Напишите код, который добавит символ двоеточие(':') между нечетными числами. Например, число 556 результат должен быть '5:56', 566 -> 566, 655 -> 65:5

function addСolons(number) {
  if (isNaN(parseInt(number))) {
    alert("Введите число");
  } else {
    let newArr = [];
    number.split("").forEach((item, i, array) => {
      if (+item % 2 && +array[i + 1] % 2) {
        newArr.push(item + ":");
      } else {
        newArr.push(item);
      }
    });
    console.log(newArr.join(""));
  }
}
addСolons(prompt("Введите число"));

//№4
//Создайте 2 массива с разной длинной. Необходимо написать код,который создаёт массив элементов представляющих собой разность соответствующих элементов заданных массивов.

function differenceArray() {
  let array1 = [8, 9, 23, 7];
  let array2 = [1, 4, 5, 3, 5, 6];
  let result = "";
  for (i = 0; i < array2.length; i++) {
    if (isNaN(array1[i] - array2[i])) {
      result += array2[i] + ",";
    } else {
      result += array1[i] - array2[i] + ",";
    }
  }
  result = result.split(",");
  result.splice(-1, 1);
  return result;
}
differenceArray();

// №5
// Создайте 2 массива с разной длинной. Необходимо написать код,который создаёт массив элементов представляющих собой сумму соответствующих элементов заданных массивов.
function sumArray() {
  let array1 = [8, 9, 23, 7];
  let array2 = [1, 4, 5, 3, 5, 6];
  let result = "";
  for (i = 0; i < array2.length; i++) {
    if (isNaN(array1[i] + array2[i])) {
      result += array2[i] + ",";
    } else {
      result += array1[i] + array2[i] + ",";
    }
  }
  result = result.split(",");
  result.splice(-1, 1);
  return result;
}
sumArray();

// №6
// Напишите код, который разворачивает исходный массив и сохраняет это в новую переменную. Например: исходный массив - [1, 2, 3], результирующий массив - [3, 2, 1]

let arr = [1, 2, 3, 4, 5];
arr.reverse();
console.log(arr);

// №7
// Фильтр юзеров Создать массив объектов для юзеров. Пример:
// [{name: ‘Ivan’, age: 18}, {name: ‘Petr’, age: 12}, {name: ‘Sidor’, age: 25}, {...}, ...]
// Написать скрипт, который будет на выходе отдавать два массива. Первый с совершеннолетними пользователями, второй с несовершеннолетними.
let users = [
  { name: "Ivan", age: 18 },
  { name: "Petr", age: 12 },
  { name: "Sidor", age: 25 },
  { name: "Artem", age: 14 },
  { name: "Semen", age: 29 },
  { name: "Yan", age: 23 },
];

function filterUsers(users) {
  let adults = [];
  let minor = [];
  users.forEach((user) => {
    if (user.age >= 18) {
      adults.push(user);
    } else {
      minor.push(user);
    }
  });
  return { adults, minor };
}
let { adults, minor } = filterUsers(users);

// №8
// Необходимо создать массив из 15 элементов. В массиве обязательно должны быть одинаковые значения. Напишите код, который уберет эти дубликаты из созданного массива.

const dupNumbers = [1, 2, 3, 4, 5, 6, 2, 4, 6, 7, 8, 9, 0];
function removeDuplicateNumbers(array) {
  if ((Array.isArray(array) || array instanceof Array) && array.length) {
    return [...new Set(array)];
  } else {
    return array;
  }
}
const noDupNumbers = uremoveDuplicateNumbers(dupNumbers);
console.log("noDupNumbers: ", [...noDupNumbers]);

// №9
// Напишите код, который проверит является строка полиндромом (слово, которое с обеих сторон читается одинаково, например РЕПЕР, ШАЛАШ)

let str = prompt("Введите строку:");
function myResult(str) {
  return str == str.split("").reverse().join("");
}

alert(myResult(str));

// №10
// Написать функцию, которая принимает первым аргументом массив, а вторым любое значение, функция должна вернуть индекс если такое значение есть в массиве и -1 если его нет. (indexOf, findIndex не использовать!)
function findIndex(arr, element) {
  let result = -1;
  arr.forEach((el, index) => {
    if (el === element) {
      result = index;
    }
  });
  return result;
}

findIndex(["цветы", "перемен", "выручка", "кино"], "перемен");

// №11
// Написать функцию search, которая принимает первым аргументом массив имен:
// [ ‘Ivan’, ‘Petr’, ‘Sidor’, ...]
// и любую произвольную строку. Функция должна отфильтровать массив в зависимости от строки (в независимости от регистра). Например:
function search(arr, str) {
  return arr.filter((item) => item.toLowerCase().includes(str.toLowerCase()));
}

search(["Ivan", "Petr", "Sidor"], "etr");

// №12
// Написать функцию сравнения двух массивов, которая возвращает true или false в зависимости от того, одинаковые у них элементы или нет. Пример:

// checkIsEqaul([1,2,3], [1,2,3]) -> true
// checkIsEqaul([1,2,3], [1,2,3,4]) -> false
// checkIsEqaul([1,2,3], [1,'2',3]) -> false
function checkIsEqaul(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}