import React, { useEffect, useState } from 'react'
import { user } from "../Join/Join"
import socketIO from "socket.io-client"
import "./chat.css"
import Message from "../message/Message"
import ReactScrollToBottom from "react-scroll-to-bottom";





let socket;
const ENDPOINT = "https://friendsgroupchat.herokuapp.com/";

const Chat = () => {
    const [id, setid] = useState("");
    const [messages, setmessages] = useState([])
    const send = () => {
        const message = document.getElementById("chatInput").value
        socket.emit('message', { message, id });
        document.getElementById("chatInput").value = "";
    }


    useEffect(() => {
        socket = socketIO(ENDPOINT, { transports: ['websocket'] });


        socket.on('connect', () => {


            setid(socket.id);

        })

        socket.emit('joined', { user });
        




        socket.on("welcome", (data) => {
            setmessages([...messages, data]);
            // console.log(data.user, data.message);
        });

        socket.on("userjoined", (data) => {

            setmessages([...messages, data]);
            // console.log(data.user, data.message);
        })

        socket.on("leave", (data) => {
            setmessages([...messages, data]);
            // console.log(data.user, data.message);
        })

        return () => {
            socket.disconnect();
            socket.off();
        }
        // eslint-disable-next-line
    }, [])


    useEffect(() => {
        socket.on('sendmessage', (data) => {
            setmessages([...messages, data]);
            // console.log(data.user, data.message);
        });
        return () => {
            socket.off();

        }
    }, [messages])

    return (
        <div className="perfect">
        <div className="vh-100 gradient-custom  main">
            <div className="top_menu">
               
                <div className="title">Friends</div>
            </div>
           
            
             
              <ReactScrollToBottom className="chatBox"> 
                {messages.map((item, i) => <Message user={item.id === id ? '' : item.user} message={item.message} classs={item.id === id ? 'right' : 'left'} />)}
                
                </ReactScrollToBottom> 
            
            <div className="bottom_wrapper clearfix">
                <div className="message_input_wrapper">
                    <input className="message_input" onKeyPress={(event)=>event.key==="Enter" ? send():null} placeholder="Type your message here..." id="chatInput" />
                </div>
                <div className="send_message" onClick={send}>
                   <div className="icon" />
                    <div className="text" >Send</div>
                </div>
            </div>
            
        </div>
        {/* <div className='users'> Users</div> */}
        </div>
        
       
    )
}

export default Chat
