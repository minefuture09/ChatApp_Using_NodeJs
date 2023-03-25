const http = require('http');
const express = require('express');
const cors = require('cors');
const socketIO = require('socket.io');

const app = express();
const port = 2000||process.env.PORT;

const users = [{}];

app.use(cors());

app.get("/",(req,res)=>{

    res.send("<h1>Server working fine...</h1>");
})


const server = http.createServer(app);

const io = socketIO(server);
    
io.on("connection",(socket)=>{
    console.log("new connection..");

    socket.on('joined',({user})=>{
        users[socket.id]=user;
        // console.log(`${user} has joined `);
        socket.emit("welcome",{user:"Admin",message:`Welcome To The Chat ${users[socket.id]}`});
        // socket.broadcast.emit("userjoined",{user:"Admin",message:`${users[socket.id]} has joined!`});
       
    });

    
    

    
    


    socket.on('message',({message,id})=>{
        io.emit('sendmessage',{user:users[id],message,id});

    });


    socket.on('disconnect',()=>{
        socket.broadcast.emit(`leave`,{user:`Admin`,message:`${users[socket.id]} has left`});
        console.log("User Left");
    })

})

server.listen(port,()=>{
    console.log(`server listening on http://localhost:${port}`);
})

