const handleLocal = {
  setLocalStorage: (value, key) =>
    localStorage.setItem(key, JSON.stringify(value)),
  getLocalStorage: (key) => JSON.parse(localStorage.getItem(key)),
  removeLocalStorage: (key) => localStorage.removeItem(key),
};

export default handleLocal;
