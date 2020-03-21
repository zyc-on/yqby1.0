const Router = require("koa-router");
const Body = require("koa-body");
const Auth = require("../../../middlewares/auth");
const { Success } = require("../../../core/http-exception");
const Admin = require("../../../models/Admin");
const { generateToken } = require("../../lib/token");

const router = new Router({
  prefix: "/admin"
});
router.use(Body());

router.post("/login", async ctx => {
  const token = await login(
    ctx.request.body.account,
    ctx.request.body.password
  );
  ctx.body = {
    msg: "登录成功",
    token
  };
});

const login = async (account, password) => {
  const admin = await Admin.verifyAdmin(account, password);
  return generateToken(admin.id, Auth.ADMIN);
};

router.post("/register", async ctx => {
  console.log(ctx.request.body);

  const admin = ctx.request.body;

  const r = await Admin.create(admin);
  throw new Success("注册成功");
});

router.get("menu", async ctx => {
  const menu = [
    {
      id: 1,
      name: "分类管理",
      path: null,
      children: [
        {
          id: 2,
          name: "分类列表",
          path: null
        },
        {
          id: 3,
          name: "新增分类",
          path: null
        }
      ]
    }
  ];
});

module.exports = router;
