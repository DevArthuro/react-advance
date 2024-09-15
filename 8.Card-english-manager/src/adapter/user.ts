interface USER_ADAPTER_TYPE {
  token: string;
  refresh: string;
}

export const UserAdapter = (data?: any): USER_ADAPTER_TYPE | null => {
  if (!data) return null;
  return {
    token: data.token,
    refresh: data.refreshToken,
  };
};
