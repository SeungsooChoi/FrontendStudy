import moment from 'moment';
import React from 'react';
import styled from 'styled-components';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const TableHeader = styled.thead`
  background-color: #f5f5f5;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const TableCell = styled.td`
  padding: 12px;
  border: 1px solid #ddd;
  text-align: center;
`;

const TableHeaderCell = styled.th`
  padding: 12px;
  border: 1px solid #ddd;
  text-align: center;
  font-weight: bold;
  background-color: #007bff;
  color: white;
`;

const PostList = ({ posts }) => {
  moment.locale('ko');

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>번호</TableHeaderCell>
          <TableHeaderCell>제목</TableHeaderCell>
          <TableHeaderCell>작성자</TableHeaderCell>
          <TableHeaderCell>작성일</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <tbody>
        {posts.map((post, index) => (
          <TableRow key={post.boardId}>
            <TableCell>{index + 1}</TableCell>
            <TableCell>{post.boardTitle}</TableCell>
            <TableCell>{post.boardNickname}</TableCell>
            <TableCell>{moment(post.regDate).format('YYYY-MM-DD')}</TableCell>
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
};

export default PostList;
