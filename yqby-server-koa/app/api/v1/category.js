
const Router = require("koa-router");

const Auth = require("../../../middlewares/auth");
const { Category, SubCategory } = require("../../../core/db");


const router = new Router();


router.get("/category", async ctx => {
  // console.log("categories");
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
  console.log(categories);

  ctx.body = categories;
});
module.exports = router;
