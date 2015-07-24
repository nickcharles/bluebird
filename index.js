var https = require('https');
var express = require('express');
var app = express();

var version = '0.1.0';
var consumerKey = '1q7S3mlkPLSkWe0SUjo2S1zZS';
var consumerSecret = '4f5nbI1M5GwqqXhTkShoc0JwvPUoDGifolfiufb2TRDnpCU9Xw';
var globalOptions = {
    hostname: 'api.twitter.com',
    headers: { 'Authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAAOAHZQAAAAAAy%2FOzsWmWdNx9h55TxrN4RacJMF4%3D4hZjOy5CkpPOA7pIlpMScBIHPBnvHAhKarbLHUO3Gafs9toNMQ' }
};


app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));


app.all('*', function(request, response, next) {
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Headers', 'X-Requested-With');
    next();
});


app.get('/', function(request, response) {
    console.log(globalOptions);
    response.send('Bluebird server is running.');
});


app.get('/version', function(request, response) {
    response.send('Bluebird API version ' + version);
});


function buildAuthString(consumerKey, consumerSecret) {
    var bearerToken = encodeURIComponent(consumerKey) + ':' + encodeURIComponent(consumerSecret);
    var encodedToken = Buffer(bearerToken).toString('base64');
    return authorization = 'Basic ' + encodedToken;
};


function authenticateBluebird() {
    var authOptions = {
        hostname: 'api.twitter.com',
        method: 'POST',
        path: '/oauth2/token',
        headers: {
            'Authorization': buildAuthString(consumerKey, consumerSecret),
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        }
    };

    var apiReq = https.request(authOptions, function (apiRes) {
        console.log('STATUS: ', apiRes.statusCode);
        console.log('HEADERS: ', apiRes.headers);
        apiRes.on('data', function (chunk) {
            body = JSON.parse(chunk);
            console.log('BODY: ', body);
            globalOptions.headers = {
                'Authorization': 'Bearer ' + body.access_token
            };
        });
        
    });

    apiReq.on('error', function (e) {
        console.error('ERROR - Problem with request: ' + e.message);
    });

    apiReq.write('grant_type=client_credentials');
    apiReq.end();
};


app.get('/api/oauth2/token', function (request, response) {
    var authOptions = {
        hostname: 'api.twitter.com',
        method: 'POST',
        path: '/oauth2/token',
        headers: {
            'Authorization': buildAuthString(consumerKey, consumerSecret),
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        }
    };

    var apiReq = https.request(authOptions, function (apiRes) {
        console.log('STATUS: ', apiRes.statusCode);
        console.log('HEADERS: ', apiRes.headers);

        var stream = '';
        apiRes.on('data', function (chunk) {
            stream += chunk;
            console.log('CHUNK: ' + chunk);
        });

        apiRes.on('end', function () {
            body = JSON.parse(stream);
            console.log('BODY: ', body);
            globalOptions.headers = {
                'Bearer': body.access_token
            };
            response.send('Successfully set new auth token on server!');
        });
    });

    apiReq.on('error', function (e) {
        console.error('ERROR - Problem with request: ' + e.message);
        response.send('Error setting new auth token, please check server logs for details.');
    });

    apiReq.write('grant_type=client_credentials');
    apiReq.end();
});


app.get('/api/users/lookup', function (request, response) {
    var options = {
        hostname: globalOptions.hostname,
        method: 'POST',
        path: '/1.1/users/lookup.json?user_id=' + request.query.user_id + '&include_entities=false',
        headers: globalOptions.headers
    };

    var apiReq = https.request(options, function (apiRes) {
        console.log('STATUS: ' + apiRes.statusCode);
        console.log('HEADERS: ' + apiRes.headers);

        var stream = '';
        apiRes.on('data', function (chunk) {
            stream += chunk;
            console.log('CHUNK: ' + chunk);
        });

        apiRes.on('end', function () {
            body = JSON.parse(stream);
            console.log('BODY: ', body);
            response.send(body);
        });
    });
d
    apiReq.on('error', function (e) {
        console.log('ERROR - Problem with request: ' + e.message);
    });

    apiReq.end();
})


app.get('/api/friends/ids', function (request, response) {
    var options = {
        hostname: globalOptions.hostname,
        headers: globalOptions.headers,
        path: '/1.1/friends/ids.json?screen_name=' + request.query.screen_name + '&stringify_ids=true&count=5000',
    };

    var apiReq = https.get(options, function (apiRes) {
        console.log('STATUS: ' + apiRes.statusCode);
        console.log('HEADERS: ' + apiRes.headers);

        var stream = '';
        apiRes.on('data', function (chunk) {
            stream += chunk;
            console.log('CHUNK: ' + chunk);
        });

        apiRes.on('end', function () {
            body = JSON.parse(stream);
            console.log('BODY: ', body);
            response.send(body);
        });
    });

    apiReq.on('error', function (e) {
        console.log('ERROR - Problem with request: ' + e.message);
    });

    apiReq.end();
});


app.get('/api/followers/ids', function (request, response) {
    var options = {
        hostname: globalOptions.hostname,
        headers: globalOptions.headers,
        path: '/1.1/followers/ids.json?screen_name=' + request.query.screen_name + '&stringify_ids=true&count=5000',
    };

    var apiReq = https.get(options, function (apiRes) {
        console.log('STATUS: ' + apiRes.statusCode);
        console.log('HEADERS: ' + apiRes.headers);

        var stream = '';
        apiRes.on('data', function (chunk) {
            stream += chunk;
            console.log('CHUNK: ' + chunk);
        });

        apiRes.on('end', function () {
            body = JSON.parse(stream);
            console.log('BODY: ', body);
            response.send(body);
        });
    });

    apiReq.on('error', function (e) {
        console.log('ERROR - Problem with request: ' + e.message);
    });

    apiReq.end();
});


app.get('/api/friends/list', function (request, response) {
    var options = {
        hostname: globalOptions.hostname,
        headers: globalOptions.headers,
        path: '/1.1/friends/list.json?screen_name=' + request.query.screen_name + '&count=200&skip_status=true&include_user_entities=false',
    };

    var apiReq = https.get(options, function (apiRes) {
        console.log('STATUS: ' + apiRes.statusCode);
        console.log('HEADERS: ' + apiRes.headers);

        var stream = '';
        apiRes.on('data', function (chunk) {
            stream += chunk;
            console.log('CHUNK: ' + chunk);
        });

        apiRes.on('end', function () {
            body = JSON.parse(stream);
            console.log('BODY: ', body);
            response.send(body);
        });
    });

    apiReq.on('error', function (e) {
        console.log('ERROR - Problem with request: ' + e.message);
    });

    apiReq.end();
});


app.get('/api/followers/list', function (request, response) {
    var options = {
        hostname: globalOptions.hostname,
        headers: globalOptions.headers,
        path: '/1.1/followers/list.json?screen_name=' + request.query.screen_name + '&count=200&skip_status=true&include_user_entities=false',
    };

    var apiReq = https.get(options, function (apiRes) {
        console.log('STATUS: ' + apiRes.statusCode);
        console.log('HEADERS: ' + apiRes.headers);

        var stream = '';
        apiRes.on('data', function (chunk) {
            stream += chunk;
            console.log('CHUNK: ' + chunk);
        });

        apiRes.on('end', function () {
            body = JSON.parse(stream);
            console.log('BODY: ', body);
            response.send(body);
        });
    });

    apiReq.on('error', function (e) {
        console.log('ERROR - Problem with request: ' + e.message);
    });

    apiReq.end();
});


app.get('/api/application/rate_limit_status', function (request, response) {
    var options = {
        hostname: globalOptions.hostname,
        headers: globalOptions.headers,
        path: '/1.1/application/rate_limit_status.json?resources=application,users,followers,friends'
    };

    var apiReq = https.get(options, function (apiRes) {
        console.log('STATUS: ' + apiRes.statusCode);
        console.log('HEADERS: ' + apiRes.headers);

        var stream = '';
        apiRes.on('data', function (chunk) {
            stream += chunk;
            console.log('CHUNK: ' + chunk);
        });

        apiRes.on('end', function () {
            body = JSON.parse(stream);
            console.log('BODY: ', body);
            response.send(body);
        });
    });

    apiReq.on('error', function (e) {
        console.log('ERROR - Problem with request: ' + e.message);
    });

    apiReq.end();
});


var server = app.listen(app.get('port'), function() {
    console.log('Node app is running at localhost:' + app.get('port'))
});

// authenticateBluebird();