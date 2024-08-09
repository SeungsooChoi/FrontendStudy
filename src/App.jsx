import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Board from './pages/Board';
import './styles/app.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [posts, setPosts] = useState([
    { title: '첫 번째 게시글', content: '내용1', author: '작성자1' },
    { title: '두 번째 게시글', content: '내용2', author: '작성자2' },
    { title: '세 번째 게시글', content: '내용2', author: '작성자2' },
  ]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login setLoggedIn={setLoggedIn} />} />
        <Route path="/board" element={loggedIn ? <Board posts={posts} /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
