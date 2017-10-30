var express = require('express');
var router = express.Router();
var mysql      = require('mysql');
var connection = mysql.createPool({
  host     : 'localhost',            // 主机名
  user     : 'root',
  password : '123456' ,
  database:'item1',

});

/* GET users listing. */
router.get('/list', function(req, res, next) {
  res.header('Access-Control-Allow-Origin',"*")

    connection.query('SELECT id,name FROM xinwen',function(err, rows, fields) {
    if(err) throw err
    res.send(rows)
  })
});

router.post('/c1', function(req, res, next) {
  res.header('Access-Control-Allow-Origin',"*")
  //console.log(req.body)
  connection.query('SELECT * FROM xinwen where id='+req.body.abc,          //请求数据、表
      function(err, rows, fields) {
        if(err) throw err
        res.send(rows)
      })
});

module.exports = router;
