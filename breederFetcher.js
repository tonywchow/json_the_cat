const request = require('request');

const cmdLineArray = (cmdLine) => {//modular function to slice the array at index 2 to get breed from command line
  return cmdLine.slice(2);
};
let array = cmdLineArray(process.argv);//assigns that to array

request(`https://api.thecatapi.com/v1/breeds/search?q=${array[0]}`, (error, response, body) => {
  const data = JSON.parse(body);//converts the data received into an object to use instead of a string
  if (data[0] === undefined) {//handling errors, if breed or domain is typed incorrectly
    console.log('error: ', error);
    console.log('response: ', response && response.statusCode);
    console.log('Breed does not exist, please try again.');
  } else {
    console.log(data[0]['description']);//outputs the description
  }
  

});