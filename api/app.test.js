const request = require('supertest');

var app = require('./app').app;

it('(supertest) should return Hello World!', function (done) {
  request(app).get('/').expect('Hello World!').end(done);
});