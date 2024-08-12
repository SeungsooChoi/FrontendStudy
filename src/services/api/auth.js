import api from './base';

export const login = async (memberEmail, memberPassword) =>
  await api.post('/member/login', { memberEmail, memberPassword }).then((response) => response.data);
export const register = async (memberName, memberEmail, memberPassword) =>
  await api.post('/member/join', { memberName, memberEmail, memberPassword }).then((response) => response.data);
