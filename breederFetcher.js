const request = require('request');

const cmdLineArray = (cmdLine) => {
  return cmdLine.slice(2);
}
let array = cmdLineArray(process.argv);
// console.log(array)
request(`https://api.thecatapi.com/v1/breeds/search?q=${array[0]}`, (error, response, body) => {
  // console.log('error', error);
  // console.log('statusCode', response && response.statusCode);
  // console.log(body)
  const data = JSON.parse(body);
  // console.log(data)
  // console.log(typeof data)
})