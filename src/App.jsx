import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Board from './pages/Board';
import './styles/app.css';
import Join from './pages/Join';
import BoardDetail from './pages/BoardDetail';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // sessionStorage에서 token을 확인하여 로그인 상태를 설정
    const token = sessionStorage.getItem('token');
    if (token) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
    setLoading(false);
  }, []);

  if (loading) {
    // 로딩 중 UI
    return <div>로그인 여부 확인 중...</div>;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={loggedIn ? <Board /> : <Navigate to="/login" />} />
        <Route path="/post/:id" element={<BoardDetail />} />
        <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
        <Route path="/join" element={<Join />} />
      </Routes>
    </Router>
  );
}

export default App;
