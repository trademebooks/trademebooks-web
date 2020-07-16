import React from 'react';

import ScrollToBottom from 'react-scroll-to-bottom';

import Message from './Message/Message';
import Proptypes from 'prop-types';
import './Messages.css';

const Messages = ({messages, name}) => (
    <ScrollToBottom className="messages">
        {messages.map((message, i) => <div key={i}><Message message={message} name={name}/></div>)}
    </ScrollToBottom>
);

Messages.propTypes = {
    name: Proptypes.string,
    messages: Proptypes.arrayOf(Proptypes.object)
}
export default Messages;