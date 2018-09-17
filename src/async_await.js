import { get, post } from 'hexlet-http-request';

const getToken = body => body.match(/value="(\w+)"/)[1];

// BEGIN (write your solution here)
export default async (registrationFormUrl, submitFormUrl, nickname) => {
  const response = await get(registrationFormUrl);
  if (response.status !== 200) {
    return new Error(`Expected 200, but was ${response.status} for '${registrationFormUrl}'`);
  }
  const data = { nickname, token: getToken(response.data) };
  const response2 = await post(submitFormUrl, data);
  if (response2.status !== 302) {
    return new Error(`Expected 302, but was ${response2.status} for '${submitFormUrl}'`);
  }

  return null;
};
// END
