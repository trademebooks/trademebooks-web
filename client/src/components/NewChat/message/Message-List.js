import React, { useEffect } from "react";

import Message from "./Message";
import "./Message-List.css";
import { connect } from "react-redux";
import { messagesRequested } from "../../../redux/actions/";

const MessageList = ({
  conversationId,
  getMessagesForConversation,
  loadMessages,
}) => {
  const messages = getMessagesForConversation(conversationId);
  let messageItems = null;

  // console.log("MessageList selectedConversation id: ", selectedConversation.id);

  useEffect(() => {
    if (!messages) {
      loadMessages(conversationId);
    }
  }, [messages, loadMessages, conversationId]);

  if (messages && messages.length > 0) {
    messageItems = messages.map((message, index) => {
      return (
        <Message
          key={index}
          isMyMessage={message.isMyMessage}
          message={message}
        />
      );
    });
  }

  return <div id="chat-message-list">{messageItems}</div>;
};

const mapStateToProps = (state) => {
  const getMessagesForConversation = (conversationId) => {
    const conversationMessageDetails =
      state.messageState.messageDetails[conversationId];
    return conversationMessageDetails
      ? conversationMessageDetails.messages
      : null;
  };
  return {
    getMessagesForConversation,
  };
};

const mapDispatchToProps = (dispatch) => {
  const loadMessages = (conversationId) => {
    dispatch(messagesRequested(conversationId));
  };
  return {
    loadMessages,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
