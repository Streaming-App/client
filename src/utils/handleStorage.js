const handleLocal = {
  localStorageSetUser: (user) => localStorage.setItem('user', JSON.stringify(user)),

  localStorageGetUser: () => JSON.parse(localStorage.getItem('user')),
};

export default { handleLocal };
