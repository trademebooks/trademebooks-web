import React, {useState, useEffect, Component} from "react";
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
const ENDPOINT = 'http://localhost:5000/';

class Chat extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            messages: []
        }
    }

    componentDidMount() {
        //console.log("props.auth", this.props.auth);

        const name = "yichen" + Math.random();
        const room = "room123";
        socket = io(ENDPOINT);
        socket.emit('join', {name, room}, (error) => {
            if (error) {
                alert(error);
            }
        });

/*        socket.on('message', (message) => {
            this.setState( prevState => {
                return {
                    messages: [
                        ...prevState.messages, message
                    ]
                }
            });
        });*/
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

/*
        socket.on('roomData', ({users}) => {
            setUsers(users);
        });*/
    }

    componentWillUnmount() {
        socket.emit('disconnect');
        socket.off();
    }

    sendMessage = (event) => {
        event.preventDefault();

/*        if (message) {
            socket.emit('sendMessage', message/!*, () => setMessage('')*!/);
        }*/
    };

    render() {
        return (
            <div className="outerContainer">
                <div className="chat-container">
                    {/*<InfoBar room={room}/>
                    <Messages messages={messages} name={name}/>
                    <Input message={message} setMessage={setMessage} sendMessage={sendMessage}/>*/}
                </div>
                {/*<TextContainer users={users}/>*/}
            </div>
        );
    }
}


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

