const Router = require("koa-router");
const Body = require("koa-body");
const { User, Category, SubCategory, Goods } = require("../../../core/db");
const Auth = require("../../../middlewares/auth");
const { Success, Forbbiden } = require("../../../core/http-exception");
const { IdValidator, GoodsValidator } = require("../../validators/validator");

const router = new Router({
  prefix: "/goods"
});

router.use(
  Body({
    multipart: true,
    formidable: {
      uploadDir: process.cwd() + "/static/images/goods",
      keepExtensions: true
    }
  })
);

//LinValidator会将body中的数据复制到校验器对象上  可以用v.get("body.key")获取 ctx.request.key

router.post("/add/images", async ctx => {
  const url = ctx.request.files.file.path
    .split("static")[1]
    .split("\\")
    .join("/");
});

//TODO若分类不存在报错问题  √ Done
router.post("/add", new Auth().m, async ctx => {
  const v = await new GoodsValidator().validate(ctx);

  //TODO body中可能有其他字段    Done 其他字段本来就不会被保存(⊙o⊙)…
  const category = await SubCategory.verifyCategory(
    v.get("body.subcategoryId")
  );

  // let goods = ctx.request.body;
  // goods.userId = ctx.auth.id;
  let goods = Object.assign(ctx.request.body, { userId: ctx.auth.id });

  goods = await Goods.create(goods);

  // throw new Success();

  ctx.body = goods;

  // ctx.body =  v.get("body.name")
});

//TODO 提取公共代码
router.get("/:id", async ctx => {
  const v = await new IdValidator().validate(ctx);
  const goods = await Goods.verifyGoods(v.get("path.id"));
  ctx.body = goods;
});

router.put("/:id", new Auth().m, async ctx => {
  const v = await new IdValidator().validate(ctx);
  let goods = await Goods.verifyGoods(v.get("path.id"));

  //TODO 权限数据
  if (goods.userId !== ctx.auth.id && ctx.auth.scope < 16) {
    throw new Forbbiden("禁止访问，只能更新自己上传的商品");
  }
  goods = Object.assign(goods, ctx.request.body);
  await goods.save();
  throw new Success("更新成功");
});

router.delete("/:id", new Auth().m, async ctx => {
  const v = await new IdValidator().validate(ctx);
  const goods = await Goods.verifyGoods(v.get("path.id"));

  //TODO 权限数据
  if (goods.userId !== ctx.auth.id && ctx.auth.scope < 16) {
    throw new Forbbiden("禁止访问，只能删除自己上传的商品");
  }
  await goods.destroy();
  throw new Success("物品删除成功");
});

router.get("/test", new Auth(8).m, async (ctx, next) => {});

module.exports = router;
