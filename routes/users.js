var express = require('express');
var router = express.Router();
var responseBuilder = require(".././responseBuilder/applicationsResponse")
/* GET users listing. */
router.get('/applications', function(req, res, next) {
  // res.send('respond with a resource');
 responseBuilder.applicationsData(function(data) {
    res.json(data)
  })
});

module.exports = router;
