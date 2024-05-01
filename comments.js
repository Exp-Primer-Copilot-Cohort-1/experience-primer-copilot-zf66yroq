//create webserver
var http = require('http');
var fs = require('fs');
var url = require('url');
var querystring = require('querystring');
var comments = [];

var server = http.createServer(function(req, res) {
    //parse the url
    var urlObj = url.parse(req.url, true);
    var pathname = urlObj.pathname;
    }); // Add closing curly brace here
