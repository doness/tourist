var request = require('supertest'),
    assert = require('chai').assert;

describe('PlacesController', function() {

  describe('#restaurants()', function() {
    it('It should return an array of restaurants', function (done) {
      request(sails.hooks.http.app)
        .get('/api/places/restaurants')
        .query({ location: '48.859294,2.347589',radius: '500' })
        .expect(200)
        .end(function(err, res) {
          assert.isArray(res.body.data, "Response from google api is an array");
          done();
        });
    });
  });

  describe('#details()', function() {
    it('It should return the details of a specified restaurant', function (done) {
      request(sails.hooks.http.app)
        .get('/api/places/details/ChIJJeb6GBxu5kcRk0LhccqQWaE')
        .expect(200)
        .end(function(err, res) {
          assert.isObject(res.body.data, "Response from google api is an object");
          done();
        });
    });
  });

});