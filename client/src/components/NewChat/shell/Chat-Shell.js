import React from "react";
import { connect } from "react-redux";
import {
  conversationChanged,
  newMessageAdded,
  conversationDeleted,
} from "../../../redux/actions";
import ConversationSearch from "../conversation/Conversation-Search";
import ConversationList from "../conversation/Conversation-List";
import NewConversation from "../conversation/New-Conversation";
import ChatTitle from "../chat-title/Chat-Title";
import MessageList from "../message/Message-List";
import ChatForm from "../chat-form/Chat-Form";

import "./Chat-Shell.css";

const ChatShell = ({
  conversations,
  selectedConversation,
  conversationChanged,
  onMessageSubmitted,
  onDeleteConversation,
}) => {
  console.log("Chat-Shell selectedConversation", selectedConversation);
  console.log("Chat-Shell conversations: ", conversations);
  return (
    <div id="chat-container">
      <ConversationSearch />
      <ConversationList
        // have to dispatch something
        onConversationItemSelected={conversationChanged}
        conversations={conversations}
        selectedConversation={selectedConversation}
      />
      <NewConversation />
      <ChatTitle
        selectedConversation={selectedConversation}
        onDeleteConversation={onDeleteConversation}
      />
      <MessageList selectedConversation={selectedConversation} />
      <ChatForm
        selectedConversation={selectedConversation}
        onMessageSubmitted={onMessageSubmitted}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  // state is an object becase in index.js reducer, the state is an object
  return {
    conversations: state.conversationState.conversations,
    selectedConversation: state.conversationState.selectedConversation,
  };
};

const mapDispatchToProps = (dispatch) => ({
  conversationChanged: (conversationId) =>
    dispatch(conversationChanged(conversationId)),
  onMessageSubmitted: (messageText) => {
    dispatch(newMessageAdded(messageText));
  },
  onDeleteConversation: () => {
    dispatch(conversationDeleted());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatShell);
