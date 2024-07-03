const url = "https://jsonplaceholder.typicode.com/posts/1";

fetch(url)
  .then(response => response.json()) 
  .then(data => console.log(data))
  .catch(error => console.error('Ошибка при выполнении запроса:', error));

  function addListItem() {
    const listItem = document.createElement('li');
    const inputText = document.getElementById('itemInput').value;
    listItem.textContent = inputText;

    document.getElementById('itemList').appendChild(listItem);
    document.getElementById('itemInput').value = ''; // Очистить поле ввода
}

// Добавление обработчика событий для кнопки
document.getElementById('addItemButton').addEventListener('click', addListItem);