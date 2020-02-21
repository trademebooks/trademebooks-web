import React, {Component} from 'react';
import ChatLeftPanel from "./ChatLeftPanel";
import ChatRightPanel from "./ChatRightPanel";
import "./ChatContainer.css";

class ChatContainer extends Component {
    render() {
        return (
            < div className="container">
                <h1> Chat2 </h1>
                <div className="chat2-container">
                <ChatLeftPanel/>
                <ChatRightPanel/>
                </div>
            < /div>
        );
    }
}

export default ChatContainer;