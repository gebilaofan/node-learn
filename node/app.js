const http = require('http');
// const path = require('path');
const url = require('url');
const config = require('./config/config');
// const { mysqlStart } = require('./db');
const { routerHandler } = require('./router/router');
const eventEmitter = require('../scripts/event');

// 连接数据库
// mysqlStart()

// 创建服务器
const server = http.createServer((req, res) => {
  // eslint-disable-next-line node/no-deprecated-api
  const pathName = url.parse(req.url).pathname;
  // 设置返回的格式 json
  res.setHeader('Content-Type', 'application/json');
  // 路由处理
  if (pathName !== '/favicon.ico') {
    routerHandler(req, res, pathName);
  }
  // 静态资源处理
  res.end();
});

// 启动服务器
server.listen(config.port, () => {
  console.log(
    `${config.name} Server is running on http://127.0.0.1:${config.port}/`
  );
  eventEmitter.emit('eslint');
});
