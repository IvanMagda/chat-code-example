import * as types from '../constants/ActionTypes';
import { addUser, messageReceived, populateUsersList } from '../actions';

const setupSocket = (dispatch, user) => {
  const socket = new WebSocket('ws://localhost:8989');

  socket.onopen = () => {
    socket.send(JSON.stringify({
      type: types.ADD_USER,
      name: user.username,
      avatar: user.avatar,
    }));
  };
  socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    switch (data.type) {
      case types.ADD_MESSAGE:
        dispatch(messageReceived(data.message, data.author));
        break;
      case types.ADD_USER:
        dispatch(addUser(data.name, data.avatar));
        break;
      case types.USERS_LIST:
        dispatch(populateUsersList(data.users));
        break;
      default:
        break;
    }
  };

  return socket;
};

export default setupSocket;
