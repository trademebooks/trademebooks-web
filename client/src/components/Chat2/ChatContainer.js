import React, {useState} from 'react';
import {ChatLeftPanel} from "./ChatLeftPanel";
import {ChatRightPanel} from "./ChatRightPanel";
import {useDispatch, useSelector} from 'react-redux';
import {fetchMessages} from '../../actions/message';

import "./ChatContainer.css";

export const ChatContainer = () => {
    const [clickedUsername,
        setClickedUsername] = useState("");
    const [clickedUserId,
        setclickedUserId] = useState("");
    const [messages,
        setMessages] = useState([]);
    const hasError = useSelector(state => state.messages.hasError)
    const dispatch = useDispatch();
    const onClickUsername = async(username, userId) => {
        let current_auth_user_id = "2";

        console.log(username, userId);
        let all_messages = await dispatch(fetchMessages());
        let my_messages = [];
        if (!hasError) {
            my_messages = all_messages.filter(message => {
                return message.from_user_id === userId.toString() && message.to_user_id === current_auth_user_id;
            });
        }
        setClickedUsername(username);
        setclickedUserId(userId);
        setMessages(my_messages)

    };

    return (
        <div className="container">
            <h1>
                Chat2
            </h1>
            <div className="chat2-container">
                <ChatLeftPanel onClickUsername={onClickUsername}/>

                <ChatRightPanel
                    username={clickedUsername}
                    userId={clickedUserId}
                    messages={messages}/>
            </div>
        </div>
    );
}

export default ChatContainer;