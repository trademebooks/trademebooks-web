import React, {useState, useEffect} from "react";

import io from "socket.io-client";

import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';
import TextContainer from '../TextContainer/TextContainer';

import './Chat.css';
import {connect} from "react-redux";

// http://localhost:3000/messages?name=yichen&room=room1337
let ENDPOINT = 'https://www.trademebooks.com/';
if (window.location.href.includes("localhost")) {
    ENDPOINT = 'http://localhost:5000/';
}

let socket;
socket = io(ENDPOINT);

const Chat = ({location, ...props}) => {

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        console.log("props.auth", props.auth);
        const room = "chat room 1337";
        if (props.auth) {
            let name = props.auth.name;

            setRoom(room);
            setName(name);

            socket.emit('join', {name, room}, (error) => {
                if (error) {
                    alert(error);
                }
            });
        }
    }, [props.auth]);

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message]);
        });

        socket.on('roomData', ({users}) => {
            setUsers(users);
        });

        return () => {
            socket.emit('disconnect');

            socket.off();
        }
    }, [messages]);

    const sendMessage = (event) => {
        event.preventDefault();

        if (message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    };

    return (
        <div className="outerContainer">

            <div className="chat-container">
                <InfoBar room={room}/>
                <Messages messages={messages} name={name}/>
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage}/>
            </div>

            <TextContainer users={users}/>
        </div>
    );
};


function mapStateToProps({auth}) {
    return {auth};
}

function mapDispatchToProps(dispatch) {
    return {
        //actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Chat);

