let a = [
  [1, 2, 3],
  [4, 5, 6],
];
localStorage.setItem("dat", JSON.stringify(a));
let b = localStorage.getItem("dat");
b = JSON.parse(b);
console.log(b);

const xhr = new XMLHttpRequest();

xhr.addEventListener("load", function () {
  if (xhr.status === 200) {
    const response = JSON.parse(xhr.responseText);
    console.log("Ответ от сервера:", response);
  } else {
    console.log("Ошибка при выполнении запроса:");
  }
});

xhr.addEventListener("error", function () {
  console.log("Произошла ошибка при выполнении запроса.");
});

xhr.open("GET", "https://tproger.ru", true);
xhr.send();
