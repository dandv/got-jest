import got from 'got';

/* Commented out due to bogus error
 * error TS1378: Top-level 'await' expressions are only allowed when the 'module' option is set to 'es2022', 'esnext', 'system', 'node16', or 'nodenext', and the 'target' option is set to 'es2017' or higher.

const data = await got.post('https://httpbin.org/anything', {
  json: {
    hello: 'world'
  }
}).json();

console.log(data);
//=> {"hello": "world"}
*/

export async function foo() {
  // If commented out, the test passes
  const data = await got.post('https://httpbin.org/anything', {
    json: {
      hello: 'world'
    }
  }).json();
  console.log(data);

  return 42;
}
