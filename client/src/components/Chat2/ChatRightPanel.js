import React, {Component} from 'react';

class ChatRightPanel extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="chat-right-panel">
                right panel: {this.props.username}
            </div>
        );
    }
}

export default ChatRightPanel;