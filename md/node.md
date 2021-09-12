# node version
## 基础环境
- 本机电脑node版本 `node: v10.24.1`
- `"nodemon": "^2.0.12"`

> 关于`nodemon`，可以让你在开发的时候避免频繁的启动项目，它可以监听项目改变并执行，很适合本地开发调试。

## 配置项目启动
在`package.json`文件下`srcipt`中添加以下命令
```js
  "start": "node app.js",
  "dev": "nodemon app.js"
```

`start` 命令用于项目启动

`dev` 命令用于本地开发

## 创建一个简单的服务器
```js
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
```


## http模块


## fs模块

## path模块

## 路由

## control



## API接口
### 登录

### 注册

### 退出登录

### 增删改查 list

### 个人信息修改

### 设置




## 数据库
### MySqy
#### 安装使用

#### node中使用

#### sql语法

#### 增删该查

### MongoDB
#### 安装使用

#### node中使用

#### sql语法

#### 增删该查

### Redis
#### ...


## 单元测试
#### ...

## 部署
### log4js 日志

### PM2 进程管理

### Docker容器

### CI持续集成

### Nginx 代理