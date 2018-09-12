const http = require('http');
const querystring = require('querystring');

// const options = {
//     hostname: 'ru.hexlet.io',
//     path: '/my',
//     method: 'GET', // default
// }
// const req = http.request(options, res => {
//     console.log(res.statusCode);
// });
// req.end();

const postData = querystring.stringify({
    'msg': 'Hello World!',
    'key': 'value',
});

// Content-Length: ?
// Определение размера тела запроса в байтах
const CL = Buffer.byteLength(postData);
console.log('Content-Length:',CL); // 28

// Посто с передачей данных формы
const options = {
    hostname: 'www.google.com',
    path: '/upload',
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': Buffer.byteLength(postData)
    }
  };
  const req = http.request(options, (res) => {
    console.log(`STATUS: ${res.statusCode}`);
  });
  req.write(postData);
  req.end();
  // req.end(postData).write