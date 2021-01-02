export const storage = (key, data) => {
  if (!data) {
    return JSON.parse(localStorage.getItem(key));
  }
  localStorage.setItem(key, JSON.stringify(data));
  return null;
};

export const isNumber = (value) => {
  const reg = /^\d+$/;
  return reg.test(value);
};
