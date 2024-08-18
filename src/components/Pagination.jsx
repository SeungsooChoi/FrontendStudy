import React from 'react';
import styled from 'styled-components';

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PageButton = styled.button`
  padding: 10px;
  margin: 0 5px;
  background-color: ${(props) => (props.active ? '#007bff' : '#fff')};
  color: ${(props) => (props.active ? '#fff' : '#007bff')};
  border: 1px solid #007bff;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
    color: white;
  }

  &:disabled {
    background-color: #ddd;
    cursor: not-allowed;
  }
`;

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [...Array(totalPages).keys()].map((num) => num + 1);

  return (
    <PaginationContainer>
      {pages.map((page) => (
        <PageButton key={page} onClick={() => onPageChange(page)} disabled={currentPage === page}>
          {page}
        </PageButton>
      ))}
    </PaginationContainer>
  );
};

export default Pagination;
