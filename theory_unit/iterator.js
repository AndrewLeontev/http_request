// const makeIterator = function() {
//     let nextIndex = 0;

//     const next = () => {
//         if (nextIndex < this.collection.length) {
//             const value = this.collection[nextIndex++];
//             return { value, done: false };
//         }
//         return { done: true };
//     };
//     return { next };
// };

// generators
const makeIterator = function* (coll) {
    for (const value of coll) {
        yield value;
    }
};

const it = makeIterator(['yo', 'ya']);
console.log(it.next()); // { value: 'yo', done: false }
console.log(it.next()); // { value: 'ya', done: false }
console.log(it.next()); // { value: undefined, done: true }
// * - указывает что мы используем генератор
// yield - 
// генератор не выполняет тело, а возвращает спец объект 
// с методом next. Каждый раз когда вызывается next, запускается
// тело генератора с того места, где оно остановилось
// в последний раз. При первом вызове выполнение идет с самого
// начала генератора и продолжается до встречи с выражением yield.
// В этот момент управление передается наружу, next возвращает то,
// что было передано в yield, а генератор замирает в том состоянии,
// на выражении yiel. Последующие вызовы начинают работу от yield.

// Еще один пример для осознания: 
const gen = function* () {
    yield 1;
    yield 2;
    yield 3;
};

const itone = gen();
console.log(itone.next()); // { value: 1, done: false }
console.log(itone.next()); // { value: 2, done: false }
console.log(itone.next()); // { value: 3, done: false }
console.log(itone.next()); // { value: undefined, done: true }

// или даже так: 
const ittwo = gen();
console.log([...ittwo]); // [ 1, 2, 3 ]

// Кроме yield в генераторах можно использовать версию yield*, 
// которая ожидает на входе коллекцию и делает yiel для каждого 
// эл-та коллекции.
const makeIterCol = function* () {
    yield* this.colleciton;
};

const obj = {
    collection: ['yo', 'ya'],
    [Symbol.iterator]: function* () {
        yield* this.collection;
    },
};

for (const v of obj) {
    console.log(v);
}
// yo
// ya