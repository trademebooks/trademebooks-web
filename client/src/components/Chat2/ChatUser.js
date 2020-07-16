import React from 'react';
import PropTypes from 'prop-types';
export const ChatUser = ({username, userId, onClickUsername}) => {

    return (
        <div className="chat-user">
            {/*<div>img</div>*/}
            <div>
                <div
                    onClick={() => {
                    onClickUsername(username, userId)
                }}>username: {username}
                    {userId}</div>
            </div>
        </div>
    );
}

ChatUser.propTypes = {
    username: PropTypes.string,
    userId: PropTypes.string,
    onClickUsername: PropTypes.func.isRequired
}

export default ChatUser;