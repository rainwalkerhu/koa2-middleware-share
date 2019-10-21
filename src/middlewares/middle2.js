exports.middle2 = function() {
  return async(ctx, next) => {
    try {
      console.log('code before next() called', '我是中间件middle2', ctx.url)
      await next()
      console.log('code after next() called', '我是中间件middle2', ctx.url)
    } catch (err) {
      console.log(err)
    }
  }
}