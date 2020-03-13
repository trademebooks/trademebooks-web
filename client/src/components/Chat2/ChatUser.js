import React, {Component} from 'react';

class ChatUser extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let {username, userId, selectedUserMessages} = this.props;

        return (
            <div className="chat-user">
                {/*<div>img</div>*/}
                <div>
                    <div onClick={ () => { this.props.onClickUsername(username, userId) } }>username: {username} {userId}</div>
                </div>
            </div>
        );
    }
}

export default ChatUser;