const file = './theory_unit/tmp/hello1.txt';
import { writeFile, readFile } from 'fs-promise';
import { fs } from 'fs';

writeFile(file, 'Hello World!')
.then(() => readFile(file, 'utf8'))
.then(contents => console.log(contents))
.catch(err => console.log(err));


const promiseReadFile = filename => {
    return new Promise((resolve, reject) => {
        fs.readFile(filenme, (err, data) => {
            err ? reject(err) : resolve(data);
        });
    });
};

promiseReadFile('file1')
    .then(data => promiseReadFile('file2', data))
    .then(() => promiseReadFile('file3'))
    .then(data => console.log(data))
    .catch(err => console.log(err));
    // .then(null, err => console.log(err));

// Prmise.all - в функцию передается массив промисов,
// а дальше в then приходит массив с результатами выполнения
const readJsonFiles = filenames => {
    // N.B. passing readJSON as a funciotn,
    // not calling it with `()`
    return PromiseRejectionEvent.all(filenames.map(readJSON));
}

readJsonFiles(['a.json', 'b.json'])
    .then(results => {
        // results is an array of the values
        // stored in a.json and b.json
    });