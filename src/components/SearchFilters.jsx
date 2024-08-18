import moment from 'moment';
import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const SearchFilters = ({ onSearch }) => {
  const [startDate, setStartDate] = useState(moment().startOf('month').format('YYYY-MM-DD'));
  const [endDate, setEndDate] = useState(moment().format('YYYY-MM-DD'));
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ startDate, endDate, title, content, author });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
      <Input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
      <Input type="text" value={title} placeholder="제목" onChange={(e) => setTitle(e.target.value)} />
      <Input type="text" value={content} placeholder="내용" onChange={(e) => setContent(e.target.value)} />
      <Input type="text" value={author} placeholder="작성자" onChange={(e) => setAuthor(e.target.value)} />
      <Button type="submit">검색</Button>
    </Form>
  );
};

export default SearchFilters;
