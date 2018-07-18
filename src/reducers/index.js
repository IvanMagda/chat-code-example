import { combineReducers } from 'redux';
import messages from './messages/messages';
import users from './users/users';

const chat = combineReducers({
  messages,
  users,
});

export default chat;
