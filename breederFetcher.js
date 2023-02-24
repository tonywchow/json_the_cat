const request = require('request');

const cmdLineArray = (cmdLine) => {
  return cmdLine.slice(2);
};
let array = cmdLineArray(process.argv);

request(`https://api.thecatapi.com/v1/breeds/search?q=${array[0]}`, (error, response, body) => {
  const data = JSON.parse(body);
  // console.log(data[0])
  if (data[0] === undefined) {
    console.log('error: ', error);
    console.log('response: ', response && response.statusCode);
    console.log('Breed does not exist, please try again.');
  } else {
    console.log(data[0]['description']);
  }
  

});