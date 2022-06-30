var express = require('express');
var router = express.Router();
const data = require('../../database/datas.json')
/* GET users listing. */

router.get('/', function(req, res, next) {
  res.send(data);
});

module.exports = router;