'use strict';
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http');
const path = require('path');
const router = require('./router');
const config = require('./config');
//const socket = require('./socket.io');
const session = require('express-session');

const app = express();

// use는 내가 구동하는 노드 서버에서 이 모듈을 쓰겠다는 것
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// public 폴더를 사용하겠다 만 알면됨
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));

// ejs 추가
app.set('views', __dirname + '/public/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// session 사용
app.use(session(config.session_config));

app.use('/', router);

// 없는 페이지일 때 콜백
app.use((req, res, next) => {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  console.log(err);

  res.status(err.status || 500);
  res.send(err);
});

const server = http.createServer(app);
const io = require('socket.io')(server);

server.listen(config.port);
console.log(`server start on port ${config.port}`);