import '@babel/polyfill';

// BEGIN (write your solution here)
class Seq {
  constructor(start, next, count = Infinity) {
    this.start = start;
    this.next = next;
    this.count = count;
    this.current = start;

    this[Symbol.iterator] = function* gen() {
      for (let i = 0; i < count; i += 1) {
        yield this.current;
        this.current = next(this.current);
      }
    };
  }

  take(count) {
    return new Seq(this.start, this.next, count);
  }

  skip(count) {
    let newStart = this.current;
    for (let i = 0; i < count; i += 1) {
      newStart = this.next(newStart);
    }
    return new Seq(newStart, this.next, this.count);
  }
}

export default Seq;
// END

const seq = new Seq(0, x => x + 1);
const result = seq.take(2);
const actual = [];
for (const value of result) {
    actual.push(value);
}
console.log(actual);