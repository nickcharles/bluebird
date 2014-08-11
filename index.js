var express = require('express');
var app = express();
var https = require('https');

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
    response.send("This is the default response");
});

// app.get('/oauth', function(request, response) {
//     var options = {
//         hostname: 'api.twitter.com',
//         path: '/oauth2/token',
//         method: 'POST',
//         headers: {
//             'Authorization': 'Basic S2E2MHY3SENXdklNSmJrajZXWXI5U2g5TTpyN09jUXhiZ05nSHkzTkNHVXR6a1V3TmdwOFFic3ZUaWFiVlVxellCeEJ2QTBzenlUNA==',
//             'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
//         }
//     };
//     var req = https.request(options, function (res) {
//         console.log('STATUS: ' + res.statusCode);
//         console.log('HEADERS: ' + JSON.stringify(res.headers));
//         res.setEncoding('utf8');
//         res.on('data', function (chunk) {
//         console.log('BODY: ' + chunk);
//         response.send(chunk);
//         });
//     });

//     req.on('error', function(e) {
//         console.log('problem with request: ' + e.message);
//     });

//     req.end('grant_type=client_credentials');
// });

// app.get('/friendsID', function(request, response) {
//     var options = {
//         hostname: 'api.twitter.com',
//         path: '/1.1/friends/ids.json?screen_name=nickcmorgan',
//         method: 'GET',
//         headers: {
//             'Authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAAOAHZQAAAAAAy%2FOzsWmWdNx9h55TxrN4RacJMF4%3D4hZjOy5CkpPOA7pIlpMScBIHPBnvHAhKarbLHUO3Gafs9toNMQ'
//         }
//     };
//     var req = https.request(options, function (res) {
//         console.log('STATUS: ' + res.statusCode);
//         console.log('HEADERS: ' + JSON.stringify(res.headers));
//         res.setEncoding('utf8');
//         res.on('data', function (chunk) {
//         console.log('BODY: ' + chunk);
//         response.send(chunk);
//         });
//     });

//     req.on('error', function(e) {
//         console.log('problem with request: ' + e.message);
//     });

//     req.end();
// });

// app.get('/followersID', function(request, response) {
//     var options = {
//         hostname: 'api.twitter.com',
//         path: '/1.1/followers/ids.json?screen_name=nickcmorgan',
//         method: 'GET',
//         headers: {
//             'Authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAAOAHZQAAAAAAy%2FOzsWmWdNx9h55TxrN4RacJMF4%3D4hZjOy5CkpPOA7pIlpMScBIHPBnvHAhKarbLHUO3Gafs9toNMQ'
//         }
//     };
//     var req = https.request(options, function (res) {
//         console.log('STATUS: ' + res.statusCode);
//         console.log('HEADERS: ' + JSON.stringify(res.headers));
//         res.setEncoding('utf8');
//         res.on('data', function (chunk) {
//         console.log('BODY: ' + chunk);
//         response.send(chunk);
//         });
//     });

//     req.on('error', function(e) {
//         console.log('problem with request: ' + e.message);
//     });

//     req.end();
// });

// app.get('/friendsList', function(request, response) {
//     var options = {
//         hostname: 'api.twitter.com',
//         path: '/1.1/friends/list.json?screen_name=nickcmorgan',
//         method: 'GET',
//         headers: {
//             'Authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAAOAHZQAAAAAAy%2FOzsWmWdNx9h55TxrN4RacJMF4%3D4hZjOy5CkpPOA7pIlpMScBIHPBnvHAhKarbLHUO3Gafs9toNMQ'
//         }
//     };
//     var req = https.request(options, function (res) {
//         console.log('STATUS: ' + res.statusCode);
//         console.log('HEADERS: ' + JSON.stringify(res.headers));
//         res.setEncoding('utf8');
//         res.on('data', function (chunk) {
//         console.log('BODY: ' + chunk);
//         response.send(chunk);
//         });
//     });

//     req.on('error', function(e) {
//         console.log('problem with request: ' + e.message);
//     });

//     req.end();
// });

// app.get('/followersList', function(request, response) {
//     var options = {
//         hostname: 'api.twitter.com',
//         path: '/1.1/followers/list.json?screen_name=nickcmorgan',
//         method: 'GET',
//         headers: {
//             'Authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAAOAHZQAAAAAAy%2FOzsWmWdNx9h55TxrN4RacJMF4%3D4hZjOy5CkpPOA7pIlpMScBIHPBnvHAhKarbLHUO3Gafs9toNMQ'
//         }
//     };
//     var req = https.request(options, function (res) {
//         console.log('STATUS: ' + res.statusCode);
//         console.log('HEADERS: ' + JSON.stringify(res.headers));
//         res.setEncoding('utf8');
//         res.on('data', function (chunk) {
//         console.log('BODY: ' + chunk);
//         response.send(chunk);
//         });
//     });

//     req.on('error', function(e) {
//         console.log('problem with request: ' + e.message);
//     });

//     req.end();
// });

// app.listen(app.get('port'), function() {
//   console.log("Node app is running at localhost:" + app.get('port'))
// })

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});