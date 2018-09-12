import url from 'url';
import http from 'http';
import querystring from 'querystring';

const getToken = body => body.match(/value="(\w+)"/)[1];

export default (registrationFormUrl, submitFormUrl, nickname, callback) => {
  // BEGIN (write your solution here)
  http.get(registrationFormUrl, gres => {
    if (gres.statusCode !== 200) {
      callback(new Error(`Server not responce, status code: ${gres.statusCode}`));
    } else {
      const body = [];
      gres.on('data', chunk => {
        body.push(chunk.toString());
      }).on('end', () => {
        const html = body.join();
        const data = querystring.stringify({ nickname, token: getToken(html) });
        const urlObj = url.parse(submitFormUrl);
        
        const options = {
          host: urlObj.hostname,
          port: urlObj.port,
          path: urlObj.path,
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': Buffer.byteLength(data),
          },
        };

        const req = http.request(options, res => {
          if (res.statusCode === 302) {
            callback(null);
          } else {
            callback(new Error(`Expected 302, but was ${res.statusCode}`));
          }
        });
        
        req.end(data).write;
      })
    }
  });

  
  // END
};