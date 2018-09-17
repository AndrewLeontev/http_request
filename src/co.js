// BEGIN
export default (generator) => {
    const iterator = generator();
  
    const next = (result) => {
      const { value } = result;
      if (result.done) {
        return value;
      }
  
      return value.then(
        res => next(iterator.next(res)),
        err => next(iterator.throw(err)),
      );
    };
  
    return next(iterator.next());
  };
  // END