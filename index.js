var express = require('express');
var app = express();
var jsonParser = require('body-parser').json();
var session = require('express-session');
var mongoose = require('mongoose');
var Article     = require('./app/models/article');
var router = express.Router();
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(session({
  secret: 'jsdf7389isacuy28',
  resave: false,
  saveUninitialized: true,
  cookie: {maxAge: 1000*60*60*24}
}))
app.use(express.static('public'));

app.listen(3001, () => console.log('Server started'))
app.get('/', (req, res) => res.render('home'));

// app.get('/try', (req, res) => res.send('Hello axios'));
// app.post('/axios', jsonParser, (req, res) => {
//   res.send(req.body);
// });

app.post('/signIn', jsonParser, (req, res) => {
  var {username, password} = req.body;
  if(username === 'khoapham' && password === '123'){
    req.session.username = username;
    return res.send('DANG_NHAP_THANH_CONG');
  }
  res.send('DANG_NHAP_THAT_BAI');
});

app.get('/getInfo', (req, res) => {
  if(req.session.username){
    return res.send(req.session.username);
  }
  res.send('CHUA_DANG_NHAP');
});

app.get('/logout', (req, res) => {
  req.session.username = undefined;
  res.send('DA_DANG_XUAT');
});
mongoose.connect('mongodb://localhost:27017/CuoiSML');
// var schema = new mongoose.Schema({ id: String,title: String }, { collection: 'fun_article' });
// schema.set('collection', 'fun_article');
// var collectionName = 'fun_article'
// var Product = mongoose.model('Fun_article', schema, collectionName);
// app.get('/viewall', function(req,res) {
//     Product.find({}, function(err, prds) {
//     console.log(prds);
//     renderResult(res, prds, "Product List from MongoDB :");
// });});
// function renderResult(res, prds, msg) {
//   res.render('display.ejs', {message:msg, products:prds},
//     function(err, result) {
//       if (!err) {res.end(result);}
//       else {res.end('Oops ! An error occurred.');
//         console.log(err);}
// });}

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});
router.route('/articles')

    // create a bear (accessed at POST http://localhost:8080/api/bears)
    .post(function(req, res) {

        var article = new Article();      // create a new instance of the Bear model
        article.user_name = req.body.title;  // set the bears name (comes from the request)

        // save the bear and check for errors
        user.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Bear created!' });
        });

    })
    // get all the bears (accessed at GET http://localhost:8080/api/bears)
   .get(function(req, res) {
       Article.find(function(err, articles) {
           if (err)
               res.send(err);

           res.json(articles);
       });
   });

   // on routes that end in /bears/:bear_id
   // ----------------------------------------------------
   router.route('/articles/:articles_type')

       // get the bear with that id (accessed at GET http://localhost:8080/api/bears/:bear_id)
       .get(function(req, res) {
           Article.findById(req.params.bear_id, function(err, bear) {
               if (err)
                   res.send(err);
               res.json(bear);
           });
       })
       // update the bear with this id (accessed at PUT http://localhost:8080/api/bears/:bear_id)
      .put(function(req, res) {

          // use our bear model to find the bear we want
          Bear.findById(req.params.bear_id, function(err, bear) {

              if (err)
                  res.send(err);

              bear.name = 'waffawwa';  // update the bears info

              // save the bear
              bear.save(function(err) {
                  if (err)
                      res.send(err);

                  res.json({ message: 'Bear updated!' });
              });

          });
      })
      .delete(function(req, res) {
        Bear.remove({
            _id: req.params.bear_id
        }, function(err, bear) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });

app.use('/api', router);
