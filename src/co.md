##### co.js
Реализуйте и экспортируйте по умолчанию функцию co. Она должна принимать на вход генератор и возвращать promise. Функция co опирается на то, что внутри генератора yield используется только для promise.

```
co(function* () {
  const a = yield Promise.resolve(1);
  const b = yield Promise.resolve(2);
  const c = yield Promise.resolve(3);

  return [a, b, c]; // [1, 2, 3]
}).then(data => console.log(data));
// [1, 2, 3]
```

В случае, если promise внутри генератора переходит в состояние rejected, то co трансформирует возникшую ошибку в исключение.
```
co(function* () {
  try {
    yield Promise.reject(new Error('boom'));
  } catch (err) {
    console.log(err.message);
  }
});
// boom
```