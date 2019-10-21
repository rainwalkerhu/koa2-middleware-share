// const Koa = require('koa')
const Koa = require('./koa/application.js')
const app = new Koa()
const middlewares = require('./middlewares')

app.use(middlewares.middle1())
app.use(middlewares.middle2())
app.use(middlewares.middle3())
app.use( async ( ctx ) => {
  console.log('a')
  ctx.body = 'hello koa2'
  console.log('b')
})
app.listen(3000)
console.log('[demo] start-quick is starting at port 3000')