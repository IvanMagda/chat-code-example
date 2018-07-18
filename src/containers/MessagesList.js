import { connect } from 'react-redux'
import MessagesListComponent from '../components/MessagesList/MessagesList'

export const MessagesList = connect(state => ({
  messages: state.messages
}), {})(MessagesListComponent)