const { fetchBreedDescription } = require('../breederFetcher');
const {assert} = require('chai');

describe('fetchBreederDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (error, desc) => {
      //we expect no error for this scenario
      assert.equal(error, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      //compare returned description
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });

  it('returns a string when given an invalid breed, via callback', (done) => {
    fetchBreedDescription('dog', (error, desc) => {
      //we expect error for this scenario
      assert.equal(error, 'Breed does not exist, please try again.');
      const expectedDesc = null;
      //compare returned description
      assert.equal(expectedDesc, desc);
      done();
    });
  });
});