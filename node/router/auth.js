const Auth = require('../controllers/auth');
module.exports = (router) => {
  // TODO:router对象封装
  router.post(process.env.API_BASE + 'login', Auth.login);
};
