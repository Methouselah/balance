const url = "https://api.example.com/data";

fetch(url)
  .then(response => response.json()) 
  .then(data => console.log(data))
  .catch(error => console.error('Ошибка при выполнении запроса:', error));