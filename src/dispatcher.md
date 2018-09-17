В этом упражнении необходимо создать библиотеку для работы с http, которая оборачивает встроенный в node.js модуль http в промисы. Интерфейсом библиотеки являются две функции: get и post.

Определение функции get:

```
export const get = (url, config = {}) =>
  dispatch({ ...config, url, method: 'GET' });
```

Использование:

```
const host = 'http://ru.hexlet.io';

get('http://ru.hexlet.io').then(response => {
  console.log(response.status); // 301
});
```

Определение функции post:
```
export const post = (url, data, config = {}) =>
  dispatch({ ...config, url, data, method: 'POST' });
const data = { nickname: 'scooter' };
post('https://ru.hexlet.io/users', data).then(response => {
  console.log(response.status); // 201
});
```
**config** – это объект со следующей структурой:
* method - глагол http
* data - объект содержащий данные, которые будут отправлены в теле запроса
* url - адрес назначения
* params - параметры, которые будут подставлены в адрес как query params
* headers - заголовки запроса

**response** – это тоже объект, состоящий из:
* status - код ответа
* statusText - текст ответа соответствующий коду
* headers - заголовки ответа
* data - тело ответа

Дополнительной фишкой библиотеки является автоматическое кодирование данных при выполнении post запроса и установка следующих заголовков:
```
'Content-Type': 'application/x-www-form-urlencoded'
'Content-Length': ...
```

##### dispatcher.js
Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход конфигурацию запроса (примеры в solution.js) и возвращает промис. В промисе должен выполняться запрос, соответствующий параметрам из входной конфигурации.

Подсказки
* Документация модуля http - https://nodejs.org/api/http.html