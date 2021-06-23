const users = [];

// Adding a user to the room
const addUser = ({ id, name, room }) => {
  name = name.trim.toLowerCase();
  room = room.trim.toLowerCase();

  const existingUser = user.find((user) => user.room === room && user.name === name)

  if(existingUser) {
    return {error: 'Person don colet that name, no vex find another name'}
  }

  const user = {id, name, room}
  user.push(users)

  return {user}
}

// removing a user
const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if(index !== -1) {
    return users.splice(index, 1)[0];
  }
}

// fetch a user
const getUser = (id) => users.find((user) => user.id === id)

const getUsersInRoom = (room) => users.filter((user) => user.room == room);

module.exports = {addUser, removeUser, getUser, getUsersInRoom}