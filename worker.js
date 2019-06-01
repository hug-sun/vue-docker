const { Wechaty } = require('wechaty') // import { Wechaty } from 'wechaty'
const bot = new Wechaty({name:'WechatEveryDay'})


bot
.on('scan', (qrcode, status) => {

    require('qrcode-terminal').generate(qrcode)  // 在console端显示二维码
    const qrcodeImageUrl = [
      'https://api.qrserver.com/v1/create-qr-code/?data=',
      encodeURIComponent(qrcode),
    ].join('')
    console.log(qrcodeImageUrl)
    // qrcode.generate(`https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(code)}`);
})
.on('login',            user => console.log(`User ${user} logined`))
.on('message',       message => console.log(`Message: ${message}`))

bot.start()
process.on('message', (obj) => {
  
  console.log('[Worker] Received message from master: ' + JSON.stringify(obj))
  main(obj)
})

async function main({msg,author}) {
  let logMsg
  console.log(123,bot)

  
  let  contact = await bot.Contact.find({name:'前端大圣'}) // 获取你要发送的联系人
  let str = `
    ${new Date()}
    部署人:${author},
    部署信息:${msg}
  `
  try{
    logMsg = str
	  await contact.say(str) // 发送消息
  }catch (e) {
	  logMsg = e.message
  }
  console.log(logMsg)
}

