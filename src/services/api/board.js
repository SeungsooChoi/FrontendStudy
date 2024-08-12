import api from './base';

export const getBoardList = async (params) => await api.get('/board', { params }).then((response) => response.data);
