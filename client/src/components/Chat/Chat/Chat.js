import React, {useState, useEffect} from "react";
import queryString from 'query-string';
import io from "socket.io-client";

import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';
import TextContainer from '../TextContainer/TextContainer';

import './Chat.css';
import {connect} from "react-redux";

// http://localhost:3000/messages?name=yichen&room=room1337

let socket;

const Chat = ({location, ...props}) => {

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    //const ENDPOINT = 'https://project-chat-application.herokuapp.com/';
    const ENDPOINT = 'http://localhost:5000/';

/*    useEffect(() => {
        console.log("props.auth");
        if (props.auth !== null) {
            console.log('props', props.auth.name);

            const name = props.auth.name;
            const room = "1337";

            socket = io(ENDPOINT);

            setRoom(room);
            setName(name);

            socket.emit('join', {name, room}, (error) => {
                if (error) {
                    alert(error);
                }
            });

        }
    }, [props.auth, ENDPOINT, location.search]);*/

      useEffect(() => {
        console.log("props.auth", props.auth);

        const { name, room } = queryString.parse(location.search);

        socket = io(ENDPOINT);

        setRoom(room);
        setName(name);

        socket.emit('join', { name, room }, (error) => {
          if(error) {
            alert(error);
          }
        });
      }, [ENDPOINT, location.search]);

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

