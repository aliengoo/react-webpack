var router = require('express').Router();

var db = require('./db');
var find = require('./filter').find;

router.post('/api/movies', function (req, res) {

  find('movies', req.body).then(function(docs){
    res.json(docs);
  }, function(err){
    res.status(500).json({
      err: err
    });
  });
});

module.exports = router;
