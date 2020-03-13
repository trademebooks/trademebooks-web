import React, {Component} from 'react';
import ChatUser from "./ChatUser";

class ChatLeftPanel extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="chat-left-panel">
                left panel

                <ChatUser username="john" userId="1" onClickUsername={this.props.onClickUsername}/>
                <ChatUser username="jane" userId="2" onClickUsername={this.props.onClickUsername}/>
                <ChatUser username="yichen" userId="3" onClickUsername={this.props.onClickUsername}/>
            </div>
        );
    }
}

export default ChatLeftPanel;