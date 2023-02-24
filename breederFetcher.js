const request = require('request');

// const fetchBreedDescription = function(breedName, callback) {
//   request(`https://api.thecatapi.com/v1/breeds/search?q=${array[0]}`, (error, response, body) => {
//     const data = JSON.parse(body);//converts the data received into an object to use instead of a string
//     if (data[0] === undefined) {//handling errors, if breed or domain is typed incorrectly
//       console.log('error: ', error);
//       console.log('response: ', response && response.statusCode);
//       console.log('Breed does not exist, please try again.');
//     } else {
//       console.log(data[0]['description']);//outputs the description
//     }
//   });
// }

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    const data = JSON.parse(body);//converts the data received into an object to use instead of a string
    if (error) {//handling error
      return callback(error, null);
    }
    if (data[0] === undefined) {//if breed or domain is typed incorrectly
      callback('Breed does not exist, please try again.', null);
    } else {
      callback(null, data[0]['description']);//outputs the description
    }
  });
};

module.exports = { fetchBreedDescription };
