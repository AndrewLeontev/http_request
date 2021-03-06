Эта задача полностью повторяет задачу про CSRF. Цель – увидеть катастрофическую разницу между использованием коллбеков и async/await.

Для выполнения http запросов воспользуйтесь импортированными функциями из библиотеки hexlet-http-request, которую мы реализовывали в одном из уроков.

##### solution.js
Реализуйте и экспортируйте по умолчанию функцию, которая с помощью http запросов, эмулируя поведение пользователя, выполняет регистрацию на сайте.

Функция принимает на вход следующие параметры:

* Адрес формы регистрации (get запрос)
* Адрес, по которому необходимо отправить данные формы (post запрос)
* nickname - значение поля nickname из формы регистрации

На сайте реализована защита от csrf, поэтому перед непосредственной отправкой данных формы на соответствующий адрес необходимо сделать запрос на форму регистрации, извлечь из нее токен и отправить его вместе с данными формы по нужному адресу.

В упражнении доступен веб-доступ, по которому открывается этот сайт. Попробуйте посмотреть исходный код страницы, найти там этот токен, а так же выполните регистрацию.

Обработка ошибок
* В случае, если первый запрос вернет статус не 200, то возвращаем resolved промиз, но передаем туда ошибку.
* В случае, если второй запрос вернет статус не 302, то так же возвращаем resolved промиз с передачей внутрь ошибки.

Подсказки
* Для извлечения токена из тела запроса воспользуйтесь функцией getToken