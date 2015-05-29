var express = require('express');
var app = express();
var dirName = "..\\";
app.get('/', function (req, res) {
  res.sendFile("na'agToran\\www\\index.html", {root: dirName });
});

app.get('/ionicCss', function (req, res) {
  res.sendFile("na'agToran\\www\\lib\\ionic\\css\\ionic.css", {root: dirName });
});
app.get('/styleCss', function (req, res) {
  res.sendFile("na'agToran\\www\pp\css\\style.css", {root: dirName });
});
app.get('/ionicBundleJs', function (req, res) {
  res.sendFile("na'agToran\\www\\lib\\ionic\\js\\ionic.bundle.js", {root: dirName });
});
app.get('/facebookPluginJs', function (req, res) {
  res.sendFile("na'agToran\\www\\js\\facebookPlugin.js", {root: dirName });
});
app.get('/appJs', function (req, res) {
  res.sendFile("na'agToran\\www\\js\\app.js", {root: dirName });
});
app.get('/facebookJs', function (req, res) {
  res.sendFile("na'agToran\\www\\js\\facebook.js", {root: dirName });
});
app.get('/mainImage', function (req, res) {
	res.sendFile("na'agToran\\www\\images\\MainImage.jpg", {root: dirName });
});
app.get('/jquery', function (req, res) {
	res.sendFile("na'agToran\\www\\js\\jquery-1.11.3.js", {root: dirName });
});
app.get('/User/:email', function(req, res) {
	// Check in the db if the user exists
	console.log(req.params.email);
	res.end('{"success" : "Updated Successfully", "status" : 200, "email" : "' + req.params.email + '" }');});


var port = process.env.PORT || 3000;
console.log(port);
app.listen(port); 