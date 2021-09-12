const http = require('http');
const path = require('path');

// 启动端口
const port = 1024;

// 创建服务器
const server = http.createServer((req, res) => {
  // 响应200 请求成功  设置响应头 charset=utf-8避免中文乱码 
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8'});
  // res.write('hello word!')
  res.write('来了，小老弟！')
  res.end()
});


// 启动服务器
server.listen(port, () => {
  console.log(`Server is running on http://127.0.0.1:${port}/`);
})

