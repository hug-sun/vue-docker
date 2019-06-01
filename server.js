// const express = require('express')
// const app = express()

// app.get('/',function(req,res){
//     res.send(`
//         <html>
//             <div>
//                 <div id="app">
//                     <h1>开课吧</h1>
//                     <p class="demo">开课吧还不错</p>
//                 </div>
//             </body>
//         </html> 
//     `)
// })

// app.listen(3000, ()=>{
//     console.log('启动成功')
// })

const express = require('express')
const Vue = require('vue')

const app = express()
const renderer = require('vue-server-renderer').createRenderer()
// 可以谢爬虫
// 可以读数据库
// 可以读接口
// 服务端渲染vue的组件，产出dom节点，首屏渲染
const page = new Vue({
    data:{
        name:'开课吧',
        count:1
    },
    template:`
        <div >
           <input v-model="name" />
            <h1>{{name}}</h1>
            <h1>{{count}}</h1>
        </div>
    `
})

app.get('/',async function(req,res){
    // 把vue组件解析成渲染后的dom字符串
    const html = await renderer.renderToString(page)
    res.send(html)
})

app.listen(3000, ()=>{
    console.log('启动成功')
})