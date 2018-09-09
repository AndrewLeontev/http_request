import http from 'http';

const options = {
    hostname: 'ru.hexlet.io',
};

// body 
http.get(options, res => {
    const body = [];
    res.on('data', chunk => {
        body.push(chunk.toString());
    }).on('end', () => {
        const html = body.join();
        console.log(html);
    });
});

// buffer
const str = 'string as bytes';
const buffer = new Buffer(str, 'utf-8');
console.log(buffer);
console.log(buffer.toString());

// errors
const uri = 'http://ru.hexlet.io/my';
const req = http.get(uri, res => {
    console.log(res.statusCode);
});
req.on('error', e => {
    console.log(`Got error: ${e.message}`);
})