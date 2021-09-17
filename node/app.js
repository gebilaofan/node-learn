const http = require('http');
const path = require('path');
const url = require('url');

const {router} = require('./router');

// 启动端口
const port = 1024;

// 创建服务器
const server = http.createServer((req, res) => {
  const pathName = url.parse(req.url).pathname;
  // 路由处理
  if (pathName !== '/favicon.ico' ) {
    router(req, res, pathName);
  };
  // 静态资源处理
  res.end();
});


// 启动服务器
server.listen(port, () => {
  console.log(`Server is running on http://127.0.0.1:${port}/`);
})

