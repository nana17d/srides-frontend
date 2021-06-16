export const getAccessToken = (): string => {
  const token = localStorage.getItem("atk") || "";
  return token;
};

export const setAccessToken = (accessToken: string): void => {
  localStorage.setItem("atk", accessToken);
};

export const hasToken = (): boolean => {
  return getAccessToken() ? true : false;
};
