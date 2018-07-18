import * as types from '../constants/ActionTypes';

let nextMessageId = 0;
let nextUserId = 0;

export const addMessage = (message, author) => ({
  type: types.ADD_MESSAGE,
  id: nextMessageId += 1,
  message,
  author,
});

export const addUser = (name, avatar) => ({
  type: types.ADD_USER,
  id: nextUserId += 1,
  name,
  avatar,
});

export const messageReceived = (message, author) => ({
  type: types.MESSAGE_RECEIVED,
  id: nextMessageId += 1,
  message,
  author,
});

export const populateUsersList = users => ({
  type: types.USERS_LIST,
  users,
});
