"use strict";

let http = require('http');
let ecstatic = require('ecstatic');

http.createServer(
    ecstatic({
        root: __dirname + '/public'
    })
).listen(8080);

console.log('server listening on 8080');
