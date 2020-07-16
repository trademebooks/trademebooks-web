import PropTypes from 'prop-types';
import React from 'react';
export const ChatRightPanel = ({username, userId, messages}) => {

    return (
        <div className="chat-right-panel">
            right panel: user: {username}, user id: {userId}

            <div>
                {messages.map((message, index) => {
                    return <div key={message._id}>{message.message_body}</div>;
                })}
            </div>
        </div>
    );
}
ChatRightPanel.propTypes = {
    username: PropTypes.string,
    userId: PropTypes.string,
    messages: PropTypes.arrayOf(PropTypes.object)
}
export default ChatRightPanel;