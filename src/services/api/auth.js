import api from './base';

export const login = async (memberEmail, memberPassword) => {
  const response = await api.post('/member/login', { memberEmail, memberPassword });
  return response.data;
};
export const register = async (memberName, memberEmail, memberPassword) => {
  const response = await api.post('/member/join', { memberName, memberEmail, memberPassword });
  return response.data;
};
