import React, { useEffect, useState } from 'react';
import api from '../services/api';
import moment from 'moment';

const Board = () => {
  moment.locale('ko');
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);
  const [startDate, setStartDate] = useState(moment().format('YYYY-MM-DD'));
  const [endDate, setEndDate] = useState(moment().format('YYYY-MM-DD'));
  const [searchTitle, setSearchTitle] = useState('');
  const [searchContent, setSearchContent] = useState('');
  const [totalPages, setTotalPages] = useState(0);

  const search = async () => {
    const params = {
      page: page,
      size: size,
      startDate: startDate,
      endDate: endDate,
      title: searchTitle,
      content: searchContent,
    };

    try {
      const data = await api.getBoardList(params);
      setPosts(data.content);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error('조회 실패', error);
    }
  };
  useEffect(() => {
    search();
  }, []);

  const handleSearch = () => {
    setPage(0);
    search();
  };

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const enterKeyUp = (e) => {
    if (e.keyCode === 13) search(); // enter
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>게시판</h1>
      <div style={{ marginBottom: '20px' }}>
        <label>시작일: </label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          style={{ marginRight: '10px', padding: '5px' }}
        />
        <label>종료일: </label>
        <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} style={{ padding: '5px' }} />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="제목 검색"
          value={searchTitle}
          onChange={(e) => setSearchTitle(e.target.value)}
          onKeyUp={(e) => enterKeyUp(e)}
          style={{ marginRight: '10px', padding: '5px', width: '200px' }}
        />
        <input
          type="text"
          placeholder="내용 검색"
          value={searchContent}
          onChange={(e) => setSearchContent(e.target.value)}
          onKeyUp={(e) => enterKeyUp(e)}
          style={{ padding: '5px', width: '200px' }}
        />
        <div style={{ marginTop: '20px' }}>
          <button onClick={handleSearch} style={{ padding: '5px 10px', marginLeft: '10px' }}>
            검색
          </button>
        </div>
      </div>
      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          marginBottom: '20px',
        }}
      >
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>제목</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>내용</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>작성자</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>작성일</th>
          </tr>
        </thead>
        <tbody>
          {posts.length === 0 ? (
            <tr>
              <td>게시글이 없습니다.</td>
            </tr>
          ) : (
            posts.map((post) => (
              <tr key={post.boardId}>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{post.boardTitle}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{post.boardContent}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{post.boardNickname}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                  {moment(post.regDate).format('YYYY-MM-DD')}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <div style={{ textAlign: 'center' }}>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => handleChangePage(index)}
            style={{
              padding: '5px 10px',
              margin: '0 5px',
              backgroundColor: page === index ? '#007bff' : '#f0f0f0',
              color: page === index ? '#fff' : '#000',
              border: '1px solid #ddd',
              cursor: 'pointer',
            }}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Board;
