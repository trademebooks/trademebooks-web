import React, {Component} from 'react';

class ChatUser extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let {username, selectedUserMessages} = this.props;

        return (
            <div className="chat-user">
                <div>img</div>
                <div>
                    <div onClick={ () => { this.props.onClickUsername(username) } }>username: {username}</div>
                </div>
            </div>
        );
    }
}

export default ChatUser;