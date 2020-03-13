import React, {Component} from 'react';
import ChatLeftPanel from "./ChatLeftPanel";
import ChatRightPanel from "./ChatRightPanel";
import "./ChatContainer.css";

class ChatContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clickedUsername: "",
            clickedUserId: "",
            messages: [

            ]
        }
    }

    onClickUsername = async (username, userId) => {
        let current_auth_user_id = "2";

        console.log(username, userId);
        let data = await fetch('/api/messages');
        let messages = await data.json();

        let my_messages = messages.filter( message => {
            return message.from_user_id === userId.toString() && message.to_user_id === current_auth_user_id;
        });

        console.log(my_messages);

        this.setState((prevState) => {
            return {
                clickedUsername: username,
                clickedUserId: userId,
                messages: my_messages
            }
        });
    };

    render() {
        return (
            <div className="container">
                <h1> Chat2 </h1>
                <div className="chat2-container">
                    <ChatLeftPanel onClickUsername={this.onClickUsername}/>

                    <ChatRightPanel username={this.state.clickedUsername} userId={this.state.clickedUserId} messages={this.state.messages}/>
                </div>
            </div>
        );
    }
}

export default ChatContainer;