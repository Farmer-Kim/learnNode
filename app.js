const http = require('http');

const express = require('express');
const exp = require('constants');

const app = express();

const server = http.createServer(app);

server.listen(3000);