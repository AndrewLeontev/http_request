// const gen = function* () {
//     const a = yield 10;
//     const b = yield;
//     return a + b;
// };

// const coroutine = gen();
// const result = coroutine.next(); // { value: 10, done: false }
// coroutine.next(result.value + 1); // const a = 11;
// console.log(coroutine.next(15)); // const b = 15;
// { value: 26, done: true }

// yield <что-то> производит данные наружу, 
// const a = yild потребляет данные, 
// const a = yield <что-то> производит и потребляет в два шага

// ОБертка над генераторами для работы с асинх-м кодом
// co(function* () {
//     const a = yield Promise.resolve(1);
//     const b = yield Promise.resolve(2);
//     const c = yield Promise.resolve(3);

//     console.log([a, b, c]);
// })

// co(function* () {
//     const a = yield Promise.resolve(1);
//     try {
//         const b = yield Promise.reject(new Error('Boom'));
//     } catch (e) {
//         console.log(e.message); // boom
//     }
// });

const gen = function* () {
    try {
        const a = yield;
        yield new Error('Boom');
    } catch (e) {
        console.log(e.message);
    }
    console.log('after Boom');
};

const coroutine = gen();
coroutine.next();
const result = coroutine.next();
coroutine.throw(result.value);
