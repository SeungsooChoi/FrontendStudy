import api from './base';

export const getBoardList = async (params) => await api.get('/board', { params }).then((response) => response.data);

export const getBoardDetail = async (id) => {
  return await api.get(`/board/${id}`).then((response) => response.data);
};
