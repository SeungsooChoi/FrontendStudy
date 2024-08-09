import React from 'react';

function Board({ posts }) {
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
}

export default Board;
