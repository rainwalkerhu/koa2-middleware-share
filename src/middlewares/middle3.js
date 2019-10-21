exports.middle3  = function() {
  return async (ctx, next) => {
    try {
      console.log('code before next() called', '我是中间件middle3', ctx.url)
      await next()
      console.log(ctx.body)
      console.log('code after next() called', '我是中间件middle3', ctx.url)
    } catch (err) {
      console.log(err)
    }
  }
}