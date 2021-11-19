// const contoller = require('./controller');
// // 路由列表
// let routeArr = {};
// routeArr['GET']={};
// routeArr['POST']={};
// routeArr['PUT']={};
// routeArr['DELETE']={};

// // 路由模块
// exports.routerHandler = (req, res, pathName) => {
//   // TODO: 静态资源处理

//   // 获取请求类型
//   const method = req.method;

//   // 路由匹配分发
//   // addRouter('GET', '/getList', contoller.getList(req, res));

//   // 判断是否为函数
//   if (typeof routeArr[method][pathName] === 'function' ) {
//     // 调用匹配到到路由处理函数
//     routeArr[method][pathName](req, res, pathName);
//   } else {
//     // 匹配失败 
//     res.writeHead(200, {
//       'Content-type': 'text/plain'
//     });
//     res.write('404 Not Found');
//     res.end();
//   };


// }


// /**
//  * 路由添加
//  *
//  * @param {*} method
//  * @param {*} url
//  * @param {*} handle
//  */
// function addRouter(method, url, handle) {
//   try {
//     console.log(`handle ${method} request -----> ${url}`)
//     routeArr[method][url] = handle;
//   } catch (error) {
//     console.error('addRouter error::', error)
//   };
// }


class Router {
  constructor() {
    routeList = []
  },
  /**
   * 路由添加
   *
   * @param {String} method
   * @param {String} url
   * @param {Function} handle
   */
  addRouter(method, url, handle) {
    try {
      console.log(`handle ${method} request -----> ${url}`)
      this.routeArr[method][url] = handle;
    } catch (error) {
      console.error('addRouter error::', error)
    };
  }
}
