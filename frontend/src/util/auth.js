export const TOKENKEY = 'tourx-token';
export const USERKEY = 'tourx-user';

export const setToken = (token) => {
  localStorage.setItem(TOKENKEY, JSON.stringify(token));
};

export const setUser = (user) => {
  localStorage.setItem(USERKEY, JSON.stringify(user));
};

export const getToken = localStorage.getItem(TOKENKEY)
  ? JSON.parse(localStorage.getItem(TOKENKEY))
  : null;

export const getUser = localStorage.getItem(USERKEY)
  ? JSON.parse(localStorage.getItem(USERKEY))
  : null;

export const storeSession = (user, token) => {
  setUser(user);
  setToken(token);
};

export const destroySession = () => {
  localStorage.removeItem(TOKENKEY);
  localStorage.removeItem(USERKEY);
};
