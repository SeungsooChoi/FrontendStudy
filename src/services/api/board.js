import api from './base';

export const getBoardList = async (params) => {
  const response = await api.post('/board', params);
  return response.data;
};
