var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.sendFile("D:\\Nave\\MyProjects\\Na'agToran\\na'agToran\\www\\index.html");
});

app.get('/ionicCss', function (req, res) {
  res.sendFile("D:\\Nave\\MyProjects\\Na'agToran\\na'agToran\\www\\lib\\ionic\\css\\ionic.css");
});
app.get('/styleCss', function (req, res) {
  res.sendFile("D:\\Nave\\MyProjects\\Na'agToran\\na'agToran\\www\\css\\style.css");
});
app.get('/ionicBundleJs', function (req, res) {
  res.sendFile("D:\\Nave\\MyProjects\\Na'agToran\\na'agToran\\www\\lib\\ionic\\js\\ionic.bundle.js");
});
app.get('/facebookPluginJs', function (req, res) {
  res.sendFile("D:\\Nave\\MyProjects\\Na'agToran\\na'agToran\\www\\js\\facebookPlugin.js");
});
app.get('/appJs', function (req, res) {
  res.sendFile("D:\\Nave\\MyProjects\\Na'agToran\\na'agToran\\www\\js\\app.js");
});
app.get('/facebookJs', function (req, res) {
  res.sendFile("D:\\Nave\\MyProjects\\Na'agToran\\na'agToran\\www\\js\\facebook.js");
});
app.get('/mainImage', function (req, res) {
	res.sendFile("D:\\Nave\\MyProjects\\Na'agToran\\na'agToran\\www\\images\\MainImage.jpg");
});
app.get('/jquery', function (req, res) {
	res.sendFile("D:\\Nave\\MyProjects\\Na'agToran\\na'agToran\\www\\js\\jquery-1.11.3.js");
});
app.get('/User/:email', function(req, res) {
	// Check in the db if the user exists
	console.log(req.params.email);
	res.end('{"success" : "Updated Successfully", "status" : 200, "email" : "' + req.params.email + '" }');});


var port = process.env.PORT || 3000;
console.log(port);
app.listen(port); 