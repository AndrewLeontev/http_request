import { get, post } from 'hexlet-http-request';

// BEGIN (write your solution here)

export default (backendsListUrl, setCurrentBackendUrl) =>
  get(backendsListUrl)
    .then((response) => {
      const urlList = JSON.parse(response.data);
      const getStatus = el => get(`${el.url}/status`);
      return Promise.all(urlList.map(getStatus));
    })
    .then((responses) => {
      const statuses = responses.map(r => JSON.parse(r.data));
      const minLoadSite = statuses[0];
      statuses.forEach((el) => {
        if (el.workload < minLoadSite.workload) {
          minLoadSite.workload = el.workload;
          minLoadSite.url = el.url;
        }
      });
      return post(setCurrentBackendUrl, { value: minLoadSite.url });
    })
    .catch(err => console.log(err));
// END
