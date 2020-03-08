import React, {Component} from 'react';
import ChatLeftPanel from "./ChatLeftPanel";
import ChatRightPanel from "./ChatRightPanel";
import "./ChatContainer.css";

class ChatContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clickedUsername: ""
        }
    }

    onClickUsername = (username) => {
        console.log(username);
        this.setState((prevState) => {
            return {
                clickedUsername: username
            }
        })
    };

    render() {
        return (
            <div className="container">
                <h1> Chat2 </h1>
                <div className="chat2-container">
                    <ChatLeftPanel onClickUsername={this.onClickUsername}/>

                    <ChatRightPanel username={this.state.clickedUsername}/>
                </div>
            </div>
        );
    }
}

export default ChatContainer;