const url = "https://jsonplaceholder.typicode.com/posts/1";

fetch(url)
  .then(response => response.json()) 
  .then(data => console.log(data))
  .catch(error => console.error('Ошибка при выполнении запроса:', error));

  function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// Пример использования функции
console.log(factorial(5)); // Выведет в консоль результат: 120