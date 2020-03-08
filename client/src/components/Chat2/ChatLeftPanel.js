import React, {Component} from 'react';
import ChatUser from "./ChatUser";

class ChatLeftPanel extends Component {

    constructor(props) {
        super(props);
    }

    selectedUserMessages = (event) => {
        console.log(this.state);
    };

    render() {
        return (
            <div className="chat-left-panel">
                left panel

                <ChatUser username="john" onClickUsername={this.props.onClickUsername}/>
                <ChatUser username="jane" onClickUsername={this.props.onClickUsername}/>
                <ChatUser username="yichen" onClickUsername={this.props.onClickUsername}/>
            </div>
        );
    }
}

export default ChatLeftPanel;