Реализуйте и экспортируйте по умолчанию функцию, которая обновляет query string в переданном адресе в соответствии с указанными значениями.

Функция принимает на вход два параметра:
* адрес, который может содержать query string
* объект с параметрами, которые нужно проставить в query string

```
import solution from './solution';
const address = 'amazon.com/search?page=10&per=5';
const actual = solution(address, { page: 100, per: 8, order: 'desc' });
// amazon.com/search?page=100&per=8&order=desc
```

Как видно параметры могут встречаться одновременно и в адресе, и в объекте.

```
const address = 'amazon.com/search?page=10&per=5';
const actual = solution(address, { order: 'desc', per: null });
// amazon.com/search?page=10&order=desc
```

Правила подстановки следующие:
* Если параметра не было, то он добавляется
* Если параметр уже был, то его значение заменяется тем, которое передано в объекте
* Если значение параметра null, то сам параметр должен отсутствовать в адресе, даже если он там был.