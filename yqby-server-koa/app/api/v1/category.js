const Router = require("koa-router");

const Auth = require("../../../middlewares/auth");
const { Category, SubCategory } = require("../../../core/db");

const router = new Router();

router.get("/category", async ctx => {
  //
  // ctx.body = "categories"

  const categories = await Category.findAll({
    attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] },
    include: [
      {
        model: SubCategory,
        attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] }
      }
    ]
  });

  ctx.body = categories;
});
module.exports = router;
