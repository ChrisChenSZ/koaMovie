const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const { resolve } = require('path')
const {normal} = require('../tpl')
const ejs = require('ejs')

app.use(views(resolve(__dirname,'./views'), {
    extension: 'pug'
}))

app.use(async (ctx, next) => {
    ctx.type = 'text/html;charset=utf-8'
    // ctx.body = ejs.render(normal,{
    //     name:'chris'
    // })
        await ctx.render('index', {
            you: 'Luke',
            me: 'Scott'
        })
}) 

app.listen(3000, () => {
    console.log('启动成功');
    
})