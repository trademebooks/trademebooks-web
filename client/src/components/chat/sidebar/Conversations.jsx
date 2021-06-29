import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import { MDBBadge } from 'mdbreact'

import { getInitialsFromName } from '../utils'
import { updateConversationByIdAndMarkAsRead } from '../../../actions/chat/chat'

const Conversations = ({
  conversations,
  handleToggleSidebar,
  setScope,
  setCurrentConversation,
  currentConversation,
  isLoadedFromPage,
  setNewMessage,
  currentAuthUser
}) => {
  const params = useParams()
  useEffect(() => {
    async function init() {
      const currentConversationUserId = params.userId

      if (conversations && conversations.length === 0) {
        // you have no conversations currently, you didnt chat with anyone yet
        setScope('You do not have any conversations at the moment...')
      } else if (conversations && conversations.length > 0) {
        if (currentConversationUserId && isLoadedFromPage === true) {
          const currentConvo = conversations.find((conversation) => {
            if (conversation.chattingWithUser) {
              return (
                conversation.chattingWithUser._id === currentConversationUserId
              )
            }
          })

          if (currentConvo) {
            setScope(
              `${currentConvo.chattingWithUser.first_name} ${currentConvo.chattingWithUser.last_name}`
            )
            setCurrentConversation(currentConvo)
          }
          // else: if we can't find it, then we just set the currentConversation to the first 1, assuming conversations.length > 0
        } else if (currentConversationUserId && isLoadedFromPage === false) {
          //  'if the currentConversationUserId is seting the URL && the user is Not coming from a page load, then we do nothing cause the react component is just rendering...'
        } else if (!currentConversationUserId && isLoadedFromPage === false) {
          // we are on just /chat meaning the currentConversationUserId is not set and it is not isLoadedFromPage, meaning its just switching between conversations
        } else {
          setCurrentConversation(conversations[0])
          setScope(
            `${conversations[0].chattingWithUser.first_name} ${conversations[0].chattingWithUser.last_name}`
          )
        }
      }
    }

    init()
  }, [conversations, params])

  return (
    <>
      {conversations && currentConversation && (
        <>
          {conversations.map((conversation) => {
            const { chattingWithUser } = conversation

            if (chattingWithUser) {
              return (
                <ListItem
                  className={
                    conversation._id === currentConversation._id
                      ? 'current-focused-conversation'
                      : ''
                  }
                  key={conversation._id}
                  button
                  onClick={async () => {
                    await updateConversationByIdAndMarkAsRead(conversation._id)

                    setCurrentConversation(conversation)
                    setScope(
                      `${chattingWithUser.first_name} ${chattingWithUser.last_name}`
                    )

                    // hide the side bar when a user is clicked
                    handleToggleSidebar(false)

                    // when switching between conversations, we set the current newMessage to a blank string, so the state does not persist
                    setNewMessage('')
                  }}
                >
                  <ListItemAvatar>
                    <Avatar>
                      {getInitialsFromName(
                        `${chattingWithUser.first_name} ${chattingWithUser.last_name}`
                      )}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={`${chattingWithUser.first_name} ${chattingWithUser.last_name}`}
                    secondary={
                      <>
                        {`${conversation.lastestMessage.substr(0, 30)}...`}

                        {!conversation.usersWhoHaveReadLastestMessage.includes(
                          currentAuthUser._id
                        ) ? (
                          <MDBBadge color="danger" className="ml-1">
                            &nbsp;
                          </MDBBadge>
                        ) : (
                          ''
                        )}
                      </>
                    }
                  />
                </ListItem>
              )
            }
          })}
        </>
      )}
    </>
  )
}

export default Conversations
