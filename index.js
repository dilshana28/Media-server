//1.import json server
const jsonserver=require('json-server')

//2.create a server for media app
const mediaAserver=jsonserver.create()

//3.set up path for json file
const router =jsonserver.router('db.json')

//4.Return middleware used by jsonserver
const middleware =jsonserver.defaults()

//5.setup port number
const port =process.env.port || 4000

//6.use middleware in app
mediaAserver.use(middleware)
mediaAserver.use(router)

//7.to listen for resolving request
mediaAserver.listen(port,()=>{
    console.log('listening on the port'+port);
})