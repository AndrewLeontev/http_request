import url from 'url';
import http from 'http';

const getTitle = body => body.match(/<h1>(.*?)<\/h1>/)[1];
const getLinks = body =>
  (body.match(/href="\/(.*?)">/g) || [])
    .map(item => item.match(/href="\/(.*?)">/)[1]);

// BEGIN (write your solution here)
const wikiSearch = (title, address, cb) => {
  const { protocol, pathname, host } = url.parse(address);
  const deepsearch = (waited, visited) => {
    if (waited.length === 0) {
      cb(new Error('Not found'));
      return;
    }

    const [ current, ...rest ] = waited;
    const body = [];

    const curaddress = url.format({ protocol, host, pathname: current });

    if (visited.has(current)) {
      deepsearch(rest, visited);
      return;
    }

    http.get(curaddress, res => {
      res.on('data', chunk => {
        body.push(chunk.toString());
      }).on('end', () => {
        const data = body.join();
        const curTitle = getTitle(data);
        if (title === curTitle) {
          cb(null, curaddress);
          return;
        }

        const newLinks = getLinks(data);
        visited.add(current);
        deepsearch([...newLinks, ...rest], visited);
      });
    }).on('error', (e) => {
      cb(e);
    });
  };

  deepsearch([pathname], new Set());
}

export default wikiSearch;
// END