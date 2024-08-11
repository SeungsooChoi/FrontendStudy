import React, { useEffect, useState } from 'react';
import api from '../services/api';

const Board = () => {
  const [posts, setPosts] = useState([
    { title: '첫 번째 게시글', content: '내용1', author: '작성자1' },
    { title: '두 번째 게시글', content: '내용2', author: '작성자2' },
    { title: '세 번째 게시글', content: '내용2', author: '작성자2' },
  ]);

  const getBoardList = async () => {
    try {
      const params = {
        page: 1,
        size: 10,
      };
      const response = await api.getBoardList();
    } catch (error) {}
  };

  useEffect(() => {
    getBoardList();
  }, []);

  return (
    <div>
      <h1>게시판</h1>
      {posts.map((post, index) => (
        <div key={index} className="post">
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <p>
            <strong>{post.author}</strong>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Board;
