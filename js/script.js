const url = "https://jsonplaceholder.typicode.com/posts/1";

fetch(url)
  .then(response => response.json()) 
  .then(data => console.log(data))
  .catch(error => console.error('Ошибка при выполнении запроса:', error));


// Функция для изменения цвета фона
function changeBackgroundColor() {
  // Случайный цвет
  const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
}

// Добавление обработчика событий для кнопки
document.getElementById('colorButton').addEventListener('click', changeBackgroundColor);

// Пример HTML кода для кнопки:
// <button id="colorButton">Change Background Color</button>
