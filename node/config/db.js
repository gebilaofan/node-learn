// 数据库连接
const config = require('./config');
const mySql = require('mysql2');

// 创建连接
const connection = mySql.createConnection(config.mySqlConfig);

// 创建mysql连接 
exports.mysqlStart = () => {
  connection.connect((error) => {
    if (error) {
      console.error('error connecting: ' + error.stack);
      return;
    };

    console.log('connected as id ' + connection.threadId);
  });

};


// 关闭mysql连接
exports.mysqlEnd = () => {
  connection.end((error) => {
    console.error('mysql cloes error:', error);
  });
};

