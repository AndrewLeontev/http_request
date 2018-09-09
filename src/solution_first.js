export default (address, queryobj) => {
    const data = url.parse(address, true);
    const merged = { ...data.query, ...queryobj };
    const query = Object.keys(merged)
      .filter(key => merged[key] !== null)
      .reduce((acc, key) => ({...acc, [key]: merged[key] }), {});
    return url.format({ ...data, query, search: null });
  };