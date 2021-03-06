var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/article1.html', function (req, res) {
  res.sendFile(path.join(__dirname,  'article1.html'));
});
app.get('/wishes1.html', function (req, res) {
  res.sendFile(path.join(__dirname,  'wishes1.html'));
});
app.get('/1.html', function (req, res) {
  res.sendFile(path.join(__dirname,  '1.html'));
});

app.get('/wishes.html', function (req, res) {
  res.sendFile(path.join(__dirname,  'wishes.html'));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/video.mp4', function (req, res) {
  res.sendFile(path.join(__dirname, 'video.mp4'));
});
app.get('/vinita.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'vinita.jpg'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
