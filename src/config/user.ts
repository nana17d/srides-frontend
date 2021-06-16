export const getUser = (): any => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : "";
};

export const setUser = (user: any): void => {
  localStorage.setItem("user", JSON.stringify(user));
};
