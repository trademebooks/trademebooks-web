import React from "react";
import "./Conversation-Item.css";
const classNames = require("classnames");

const ConversationItem = ({
  conversation,
  isActive,
  onConversationItemSelected,
}) => {
  const className = classNames("conversation", {
    active: isActive,
  });
  return (
    <div
      className={className}
      onClick={() => onConversationItemSelected(conversation.id)}
    >
      <img src={conversation.imageUrl} alt={conversation.imageAlt} />
      <div className="title-text">{conversation.title}</div>
      <div className="created-date">{conversation.createdAt}</div>
      <div className="conversation-message">
        {conversation.latestMessageText}
      </div>
    </div>
  );
};

export default ConversationItem;

// require() "../../images/profiles/daryl.png" - imageUrl
// "Daryl Duckmanton" - imageAlt
// Daryl Duckmanton - title
// Apr 16 - createdAt
// This is a message - latestMessageText
