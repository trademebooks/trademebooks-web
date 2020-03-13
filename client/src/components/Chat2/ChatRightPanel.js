import React, {Component} from 'react';

class ChatRightPanel extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="chat-right-panel">
                right panel: user: {this.props.username}, user id: {this.props.userId}

                <div>
                    {this.props.messages.map( (message, index) => {
                        return <div key={message._id}>{message.message_body}</div>;
                    })}
                </div>
            </div>
        );
    }
}

export default ChatRightPanel;