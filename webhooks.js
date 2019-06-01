var http = require('http')
var createHandler = require('github-webhook-handler')
var handler = createHandler({ path: '/webhooks', secret: 'myHashSecret' })
// 上面的 secret 保持和 GitHub 后台设置的一致
const childProcess = require('child_process')
// const worker = childProcess.fork('./worker.js')
// setInterval(()=>{
//     worker.send({author:'shengxinjing', msg:'哈哈'})
// },3000)


function run_cmd(cmd, args, callback) {
    var spawn = require('child_process').spawn;
    var child = spawn(cmd, args);
    var resp = "";

    child.stdout.on('data', function (buffer) { resp += buffer.toString(); });
    child.stdout.on('end', function () { callback(resp) });
}

http.createServer(function (req, res) {
    handler(req, res, function (err) {
        res.statusCode = 404
        res.end('no such location')
    })
}).listen(7002)

handler.on('error', function (err) {
    console.error('Error:', err.message)
})

handler.on('push', function (event) {
    console.log('Received a push event for %s to %s',
        event.payload.repository.name,
        event.payload.ref);
        console.log(JSON.stringify(event.payload,2,2))
        // 分支判断
        if(event.payload.ref === 'refs/heads/master'){
            console.log('push master..')
            let msg = event.payload.head_commit.message
            let author  = event.payload.head_commit.author.name

            if(msg.indexOf('@deploy')>-1){
                console.log('deploy master..')
                run_cmd('sh', ['./deploy.sh'], function(text){ console.log(text) });
                // worker.send({author, msg})
            }
 

        }
      
})