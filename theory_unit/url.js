import url from 'url';
import querystring from 'querystring';

const uri = '/?q=%D1%8D%D1%80%D0%BB%D0%B0%D0%BD%D0%B3';
const { query } = url.parse(uri, true);
console.log(query);

// first way
// const { query } = url.parse(uri, true);
// const { q } = querystring.parse(query);

// конструирование адреса по частям
const data = {
    hostname: 'ru.hexlet.io',
    pathname: '/my',
    query: { page: 5 }
};
console.log(url.format(data));