export const database = {
  users: [
    {
      name: "John",
      email: "johndoe@gmail.com",
      password: "password",
    },
  ],
};

export const changePassword = (email, newPassword) => {
  const user = database.users.find((user) => user.email === email);
  if (user) {
    user.password = newPassword;
  }
  return user;
};
