import { database } from "../data/data.js";

export const addUser = (user) => {
  database.users.push(user);
  console.log(database.users);
};
export const getUser = (id) => {
  return database.users.find((user) => user.id === id);
};
export const getUserByEmail = (email) => {
  return database.users.find((user) => user.email === email);
};
export const checkUser = (email) => {
  if (database.users.find((user) => user.email === email)) {
    return false;
  } else {
    return true;
  }
};
