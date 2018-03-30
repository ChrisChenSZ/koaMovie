const Koa = require('koa')
const app = new Koa()
console.log(1111);
app.use(async (ctx,next) => {
    ctx.body = 'hellword'
}) 

app.listen(3000, () => {
    console.log('启动成功');
    
})