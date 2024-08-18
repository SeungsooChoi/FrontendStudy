import React, { useEffect, useState } from 'react';
import api from '../services/api';
import moment from 'moment';
import SearchFilters from '../components/SearchFilters';
import PostList from '../components/PostList';
import Pagination from '../components/Pagination';

const Board = () => {
  moment.locale('ko');
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchPosts = async (
    filters = {
      startDate: moment().startOf('month').format('YYYY-MM-DD'),
      endDate: moment().format('YYYY-MM-DD'),
    },
    page = 1
  ) => {
    try {
      // 서버 API 호출
      const params = {
        title: filters.title,
        content: filters.content,
        author: filters.author,
        startDate: filters.startDate,
        endDate: filters.endDate,
        page: page,
        size: 10,
      };
      // 값이 존재하는 키만 남김
      const filteredParams = Object.keys(params).reduce((acc, key) => {
        if (params[key] !== undefined && params[key] !== '') {
          acc[key] = params[key];
        }
        return acc;
      }, {});

      const response = await api.getBoardList(filteredParams);
      setPosts(response.content);
      setTotalPages(response.totalPages);
    } catch (error) {
      console.warn(error);
    }
  };

  const handleSearch = (filters) => {
    setCurrentPage(1); // 검색 시 첫 페이지로 이동
    fetchPosts(filters, 1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    fetchPosts({}, page);
  };

  useEffect(() => {
    fetchPosts(); // 초기 데이터 로드
  }, []);

  return (
    <div>
      <SearchFilters onSearch={handleSearch} />
      <PostList posts={posts} />
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
};

export default Board;
