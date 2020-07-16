import PropTypes from 'prop-types';
import React from 'react';
import ChatUser from "./ChatUser";
export const ChatLeftPanel = ({onClickUsername}) => {

    return (
        <div className="chat-left-panel">
            left panel

            <ChatUser username="john" userId="1" onClickUsername={onClickUsername}/>
            <ChatUser username="jane" userId="2" onClickUsername={onClickUsername}/>
            <ChatUser username="yichen" userId="3" onClickUsername={onClickUsername}/>
        </div>
    )
}
ChatLeftPanel.propTypes = {
    onClickUsername: PropTypes.func.isRequired
}
export default ChatLeftPanel;