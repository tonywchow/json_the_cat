const { fetchBreedDescription } = require('./breederFetcher');

const breedName = process.argv[2];//assigns that to array

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log(`Error fetch details: ${error}`);
  } else {
    console.log(desc);
  }
});

