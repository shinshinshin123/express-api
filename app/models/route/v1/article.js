var express = require('express');
// ルーティング
var router = express.Router();
var Article = require('../../modeles/articleModel.js');

router.post('/', function(req, res) {
   // モデル作成
   var Article = new ArticleModel();

   // データを詰め込む
   Article.title = req.body.title;
   Article.text = req.body.text;
   Article.setDate();

   // 保存処理
   Article.save(function(err) {
    if(err) {
         // エラーがあった場合エラーメッセージを返す
         res.send(err);
    } else {
         // エラーがなければ「Success!!」
         res.json({ message: 'Success!!' });
    }
   });
});

// GET  http://localhost:3000/api/v1/article/test
router.get('/test', function (req, res) {
    res.json({
        message: 'This is article api'
    });
});

router.get('/:id', function (req, res) {
    var Articleid = req.params.id;
    ArticleModel
        .findById(Articleid, function (err, article) {
            res.json(article);
        });
});

router.delete('/:id', function(req, res) {
    var Articleid = req.params.id;
    ArticleModel.remove({_id: Articleid })
        .then(function() {
            res.json({message: 'Success!!'});
        });
});



//routerをモジュールとして扱う準備
module.exports = router;
