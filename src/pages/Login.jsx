import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ setLoggedIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // 간단한 로그인 로직 (실제 로그인 로직에서는 백엔드와 연동 필요)
    if (email === 'test@test.com' && password === '1234') {
      setLoggedIn(true);
      navigate('/board');
    } else {
      alert('로그인 실패');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <div>
        <label>Email: </label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Password: </label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
