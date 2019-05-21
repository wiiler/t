const router = require('koa-router')()

router.prefix('/api')

router.post('/message', function (ctx, next) {
  ctx.body = ctx
})

module.exports = router
