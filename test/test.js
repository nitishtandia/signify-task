const chai = require('chai');
chaiHttp = require('chai-http');

const server = require('../src/index');

chai.should();
chai.use(chaiHttp);

before(function (done) {
  chai.request(server)
    .post('/review/uploadData')
    .end((err, response) => {
      done();
    })
})

describe('GET /review', function () {
  describe('should get review', function () {
    it('should return 200 status', function (done) {
      chai.request(server)
        .get('/review')
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.be.a('array');
          done();
        })
    });

  });
});


describe('POST /review', function () {
  describe('should create a review', function () {
    it('should return 200 status', function (done) {
      let reqBody = {
        "review": "awsome app",
        "author": "Nitish",
        "review_source": "iTunes",
        "rating": 1,
        "title": "Excelente",
        "product_name": "Amazon Alexa",
        "reviewed_date": "2018-01-12T02:27:03.000Z"
      }
      chai.request(server)
        .post('/review')
        .send(reqBody)
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.be.a('object');
          done();
        })
    });

  });
});


describe('GET /review/reviewCounts', function () {
  describe('/reviewCounts', function () {
    it('should return 200 status', function (done) {
      chai.request(server)
        .get('/review/reviewCounts')
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.be.a('array');
          done();
        })
    });

  });
});

