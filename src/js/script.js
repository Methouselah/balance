const url = "https://jsonplaceholder.typicode.com/posts/1";

fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Ошибка при выполнении запроса:", error));

// Функция для фильтрации элементов списка
function filterList() {
  const filter = document.getElementById("searchInput").value.toUpperCase();
  const listItems = document
    .getElementById("itemList")
    .getElementsByTagName("li");

  for (let i = 0; i < listItems.length; i++) {
    const txtValue = listItems[i].textContent || listItems[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      listItems[i].style.display = "";
    } else {
      listItems[i].style.display = "none";
    }
  }
}

// Добавление обработчика событий для поля ввода
document.getElementById("searchInput").addEventListener("keyup", filterList);
