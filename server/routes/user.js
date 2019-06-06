const Router = require('koa-router');
const UserService = require('../service/user');
const handleRes = require('../utils/response');

const userService = new UserService();
const userRouter = new Router({
  prefix: '/api/users'
});

userRouter
  .post('/login', async (ctx, next) => {
    const { username, password } = ctx.request.body;
    try {
      const data = await userService.validUser(username, password);
      handleRes({
        ctx,
        data: {
          userId: data._id,
          username: data.usr
        }
      });
    } catch (error) {
      handleRes({
        ctx,
        error_code: 1,
        msg: error.message
      });
    }
  })
  .post('/', async (ctx, next) => {
    const { username, password } = ctx.request.body;
    try {
      const data = await userService.addUser(username, password);
      if (data) {
        handleRes({
          ctx,
          status_code: 201
        });
      }
    } catch (error) {
      handleRes({
        ctx,
        error_code: 1,
        msg: error.message
      });
    }
  });

module.exports = userRouter;
