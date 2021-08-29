// 1
// Сделайте промис, внутри которого будет setTimeout в 3 секунды, после которой промис должен зарезолвится (то есть выполнится успешно).
let promise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("function is good");
  }, 1000);
});
promise.then((result) => {
  alert("function is good");
});

// 2
// Сделайте промис, внутри которого будет setTimeout в 3 секунды, после которой промис должен зареджектится (то есть выполнится с ошибкой).
let promise2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let num = false;
    if (num) {
      resolve("function is good");
    } else {
      reject("error");
    }
  }, 2000);
});
promise2.then(
  (result) => {
    alert("function is good");
  },
  (error) => {
    alert("error");
  }
);

// 3
// Сделайте 3 промиса, в каждом из которых расположена функция setTimeout со случайной задержкой от 1 до 5 секунд. Пусть каждый промис своим результатом возвращает эту задержку. С помощью Promise.all получите массив результатов, найдите его сумму, выведите на экран.
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

let array = [
  new Promise(function (resolve, reject) {
    let waitTime = getRandomInt(1, 6);
    setTimeout(() => {
      resolve(waitTime);
    }, waitTime * 1000);
  }),
  new Promise(function (resolve, reject) {
    let waitTime = getRandomInt(1, 6);
    setTimeout(() => {
      resolve(waitTime);
    }, waitTime * 1000);
  }),
  new Promise(function (resolve, reject) {
    let waitTime = getRandomInt(1, 6);
    setTimeout(() => {
      resolve(waitTime);
    }, waitTime * 1000);
  }),
];

function sumOfArr(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  alert(sum);
}

Promise.all(array).then((results) => sumOfArr(results));

// 4
// Сделать запрос при помощи fetch на адрес https://jsonplaceholder.typicode.com/users, Отфильтровать массив пользователей, чтобы остались только пользователи с четными id.
let promise = fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((value) => {
    return value.filter((item) => item.id % 2 === 0);
  });

// 5
// Сделать запрос при помощи fetch на адрес https://jsonplaceholder.typicode.com/users, вывести список карточек пользователей, отобразить имя, телефон и остальную информацию каждого пользователя. Вывести в html внутри div с id = 1
let container = document.getElementById("1");

function createElement(tag, classNames) {
  let element = document.createElement(tag);
  element.className = classNames;
  return element;
}

function createCard(data) {
  data.forEach((el) => {
    let card = createElement("div", "card");
    let userName = createElement("h2", "name");
    let userInfo = createElement("p", "info");
    let {
      address: { city },
      email,
      name,
      phone,
      username,
      website,
    } = el;
    userName.innerHTML = name;
    userInfo.innerHTML = `Username: ${username},  email: ${email},  city: ${city},  phone: ${phone},  website: ${website}`;
    card.append(userName);
    card.append(userInfo);
    container.append(card);
  });
}

let users = fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((value) => {
    console.log(value);
    return value;
  })
  .then((value) => createCard(value));

// 7
// Сделать запрос при помощи fetch на адрес https://jsonplaceholder.typicode.com/albums/1/photos, вывести фотографии, используя тег img. В качестве src для img использовать поле url в объекте фото

// {
//   "albumId": 1,
//   "id": 4,
//   "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
//   "url": "https://via.placeholder.com/600/d32776",
//   "thumbnailUrl": "https://via.placeholder.com/150/d32776"
// },
// Дополнительно сделать, чтобы по нажатию на картинку картинка увеличивалась в размерах, повторное нажатие вернет картинку к исходному размеру. Вывести в html внутри div с id = 3
let container = document.getElementById("3");

function createImg(url) {
  let img = document.createElement("img");
  img.className = "img";
  img.src = url;
  container.append(img);
}

function getImg() {
  fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
    .then((response) => response.json())
    .then((result) => {
      result.forEach((element) => {
        createImg(element.thumbnailUrl);
      });
      container.addEventListener("click", (e) => {
        let { target } = e;
        if (target.classList.contains("img")) {
          target.classList.toggle("zoom");
        }
      });
    });
}

getImg();
