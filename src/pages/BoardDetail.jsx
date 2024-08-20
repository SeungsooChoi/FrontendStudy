import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';

const BoardDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchBoardDetail = async () => {
      const response = await api.getBoardDetail(id);
      setPost(response);
    };
    fetchBoardDetail();
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <h1>{post.boardTitle}</h1>
      <p>작성자: {post.boardNickname}</p>
      <p>작성일: {post.regDate}</p>
      <p>{post.boardContent}</p>
    </div>
  );
};

export default BoardDetail;
