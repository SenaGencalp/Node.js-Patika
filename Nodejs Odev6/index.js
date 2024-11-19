const Koa = require("koa");
const Router = require("@koa/router");

const app = new Koa();
const router = new Router();

router.get("/index", (ctx) => {
  ctx.status = 200;
  ctx.type = "html";
  ctx.body = "<h2>INDEX SAYFASINA HOSGELDINIZ</h2>";
});

router.get("/hakkimda", (ctx) => {
  ctx.status = 200;
  ctx.type = "html";
  ctx.body = "<h2>HAKKIMDA SAYFASINA HOSGELDINIZ</h2>";
});

router.get("/iletisim", (ctx) => {
  ctx.status = 200;
  ctx.type = "html";
  ctx.body = "<h2>ILETISIM SAYFASINA HOSGELDINIZ</h2>";
});

app.use(async (ctx, next) => {
  await next();
  if (ctx.status === 404) {
    ctx.status = 404;
    ctx.type = "html";
    ctx.body = "<h2>404 Sayfa BULUNAMADI.</h2>";
  }
});

app.use(router.routes()).use(router.allowedMethods());

const port = 5000;
app.listen(port, () => {
  console.log(`Sunucu port ${port} üzerinde çalışıyor.`);
});
