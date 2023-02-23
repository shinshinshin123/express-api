// ライブラリ読み込み
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb')

//body-parserの設定
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3001; // port番号を指定

// GET http://localhost:3000/api/v1/
// app.get('/api/v1/', function(req, res) {
//     res.json({
//       message: "Hello, world"
//     })
// });

var router = require('./routes/v1/');
// ※/routes/v1/index.js
app.use('/api/v1/', router);

//サーバ起動
app.listen(port);
console.log('listen on port' + port);

var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/ExpressAPI');
mongoose.connection.on('error', function(err) {
   console.log('MongoDB connection error: ' + err);
   process.exit(-1);
});
