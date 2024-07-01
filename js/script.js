const url = "https://jsonplaceholder.typicode.com/posts/1";

fetch(url)
  .then(response => response.json()) 
  .then(data => console.log(data))
  .catch(error => console.error('Ошибка при выполнении запроса:', error));


  // Функция для валидации формы
function validateForm(event) {
  event.preventDefault(); // Предотвращаем отправку формы по умолчанию
  const emailInput = document.getElementById('email');
  const email = emailInput.value;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
  } else {
      alert('Email is valid!');
      // Здесь можно добавить отправку формы или другие действия
  }
}

// Добавление обработчика событий для формы
document.getElementById('myForm').addEventListener('submit', validateForm);
